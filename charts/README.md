# Charts Repo (sample)

Contains two charts:
- `frontend/` (Nginx-served React build; Nginx proxies `/api` to `backend` Service)
- `backend/`  (Node/Express on 8080)

Publish as OCI (example):
```
helm package ./backend && helm push backend-0.1.0.tgz oci://us.icr.io/helm-charts
helm package ./frontend && helm push frontend-0.1.0.tgz oci://us.icr.io/helm-charts
```
