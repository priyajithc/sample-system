# GitOps Environments (sample)

Argo CD Applications for `backend` and `frontend` across `dev`, `staging`, `prod`.
- Charts: `oci://us.icr.io/helm-charts` (replace with your registry)
- Namespaces: `sample-<env>`

## Promote flow
- Change only the target env `values.yaml` tag (and optionally chart version) via PR.
- Merge → Argo CD syncs (dev/staging auto; prod manual by default).

## Local testing
- Use `localtest.me` hosts (resolve to 127.0.0.1) with a local ingress controller.
