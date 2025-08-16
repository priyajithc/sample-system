{- define "backend.name" -}
{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" -}
{- end -}

{- define "backend.fullname" -}
{- $name := default .Chart.Name .Values.nameOverride -}
{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" -}
{- end -}

{- define "backend.labels" -}
helm.sh/chart: { .Chart.Name }-{ .Chart.Version }
app.kubernetes.io/name: { .Chart.Name }
app.kubernetes.io/instance: { .Release.Name }
app.kubernetes.io/managed-by: { .Release.Service }
{- end -}

{- define "backend.selectorLabels" -}
app.kubernetes.io/name: { .Chart.Name }
app.kubernetes.io/instance: { .Release.Name }
{- end -}
