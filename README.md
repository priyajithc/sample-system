# Sample System (Frontend + Backend + Helm + GitOps)

This bundle includes:
- `app-frontend/` (React + Vite + Nginx)
- `app-backend/`  (Node + Express)
- `charts/`       (Helm charts for both services)
- `env/`          (Argo CD Applications + per-env values for dev/staging/prod)

## Build images locally
```bash
# backend
cd app-backend
npm install
docker build -t us.icr.io/priyajith/backend:0.1.0 .

# frontend
cd ../app-frontend
npm install
docker build -t us.icr.io/priyajith/frontend:0.1.0 .
```
Push to your registry (ICR example):
```bash
docker login us.icr.io -u iamapikey
docker push us.icr.io/priyajith/backend:0.1.0
docker push us.icr.io/priyajith/frontend:0.1.0
```

## Publish charts as OCI
```bash
cd charts
helm package ./backend && helm push backend-0.1.0.tgz oci://us.icr.io/helm-charts
helm package ./frontend && helm push frontend-0.1.0.tgz oci://us.icr.io/helm-charts
```

## Argo CD (env repo)
- Point Argo CD at the `env/` repo path and `main` branch (or copy to your own git repo).
- Edit `values.yaml` per env to promote versions.
