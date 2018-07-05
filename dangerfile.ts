import { message, danger, fail } from "danger"

const pr = danger.github.pr
const modifiedMD = danger.git.modified_files.join("- ")
message("Changed Files in this PR: \n - " + modifiedMD)

// Always ensure we assign someone, so that our Slackbot can do its work correctly
if (pr.assignee === null) {
    fail("Please assign someone to merge this PR, and optionally include people who should review.")
}