# Deploying from your machine

PokerEstima runs on Fly.io as the app `poker-estima-app` (region `gru`). These steps deploy it from your local checkout with the `fly` CLI.

## 1. One-time setup

Install the CLI (Windows PowerShell):

```powershell
iwr https://fly.io/install.ps1 -useb | iex
```

On macOS or Linux, use `curl -L https://fly.io/install.sh | sh`.

Log in, then check that you can see the app:

```bash
fly auth login
fly status -a poker-estima-app
```

## 2. Deploy

From the project root, where `fly.toml` lives:

```bash
fly deploy --remote-only
```

`--remote-only` builds the Docker image on Fly's builder, so you don't need Docker locally. The build uses your **working tree**, including uncommitted changes, so commit or stash anything you don't want to ship.

## 3. Check it

```bash
fly status          # machine should be "started" or "stopped" (it auto-stops when idle)
fly logs            # live logs; Ctrl+C to quit
```

Then open https://poker-estima-app.fly.dev/. The first request after an idle period can take a few seconds while the machine starts.

## Roll back

A rollback deploys an older image:

```bash
fly releases --image                                  # list releases and their images
fly deploy --image registry.fly.io/poker-estima-app:<tag>
```

## Secrets

`SECRET_KEY` and `CORS_ORIGIN` are set as Fly secrets. To change one (this restarts the app):

```bash
fly secrets list
fly secrets set SECRET_KEY=<new value>
```

## Troubleshooting

- **`archive/tar: unknown file mode`**: something in the build context is a symlink. Add its folder to `.dockerignore` (local tooling like `.claude/` and `.agents/` is already excluded).
- **`no access token available`**: run `fly auth login` again.
- **Database**: SQLite lives on the `sqlite_data` volume mounted at `/data`. Deploys keep it; don't delete the volume attached to the machine (`fly volumes list`).
