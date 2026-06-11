#!/usr/bin/env bash

set -e

script_dir=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
repo_dir=$(CDPATH= cd -- "$script_dir/.." && pwd)

pushd "$repo_dir" >/dev/null

# Resolve *.ts files as ours
git config --local merge.ours.driver true

git checkout master
git pull

git checkout l10n_master
git pull

git merge master -X theirs
git push

git checkout master

popd >/dev/null
