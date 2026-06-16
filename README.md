# Passport Index

Lightweight passport mobility dataset.

## Goals

* Simple
* Fast
* Easy to update
* Minimal duplication

## Structure

```text
passport-index/
├── data/
│   ├── countries.json
│   ├── master.csv
│   └── passport_matrix.json
│
├── generated/
│   ├── rankings.json
│   ├── scores.json
│   └── visa-free-counts.json
│
├── scripts/
│   ├── build.ts
│   ├── validate.ts
│   └── stats.ts
│
├── cmd/
│   └── passport-cli/
│       └── main.go
│
├── internal/
│   ├── lookup/
│   ├── ranking/
│   └── export/
│
├── docs/
│   ├── schema.md
│   ├── status-codes.md
│   └── methodology.md
│
├── package.json
├── tsconfig.json
├── go.mod
└── README.md
```

## Source of Truth

`data/master.csv`

```csv
passport,destination,status,days
KE,SG,vf,30
KE,US,vr,
```

## Status Codes

```text
vf = Visa Free
vo = Visa On Arrival
ev = eVisa
et = ETA
vr = Visa Required
```

## Build Flow

```text
master.csv
    ↓
validate.ts
    ↓
build.ts
    ↓
passport_matrix.json
    ↓
stats.ts
    ↓
generated/*
```

## Tech Stack

* CSV → source data
* JSON → output
* TypeScript → build tools
* Go → CLI and future API

## Principles

* Edit one file.
* Generate everything else.
* Keep data portable.
* Keep the repo small.
