import { message, danger, fail, warn } from "danger"

const pr = danger.github.pr
const modifiedMD = danger.git.modified_files.join("- ")
message("Changed Files in this PR: \n - " + modifiedMD)

// Always ensure we assign someone
if (pr.assignee === null) {
    warn("Please assign someone to merge this PR, and optionally include people who should review.")
}