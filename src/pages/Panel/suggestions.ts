export const suggestions = [
  {
    name: 'issue.properties."proforma.forms.i1"',
    description:
      "Returns the value of the custom field 'proforma.forms.i1' in the issue's properties.",
  },
  {
    name: '{{if(smartValue)}}',
    description: 'Returns true or null.',
  },
  {
    name: '{{if("string")}}',
    description: 'Returns true or null.',
  },
  {
    name: '{{#if(smartValue)}}Hello{{/}}',
    description: "Returns 'Hello' or null.",
  },
  {
    name: '{{if(smartValue, "Hello")}}',
    description: "Returns 'Hello' or null.",
  },
  {
    name: '{{if(smartValue, "value if true", "value if false")}}',
    description:
      'Allows you to add a specific value when the condition is not matched.',
  },
  {
    name: 'abbreviate',
    description:
      "Abbreviates the text string to the defined number of characters and adds '...' to the end.",
  },
  {
    name: 'asNumber',
    description:
      'Converts a string to a number if possible; otherwise, returns null.',
  },
  {
    name: 'charAt',
    description:
      'Identifies the character at the specified position in the text string.',
  },
  {
    name: 'capitalize',
    description: 'Capitalizes the first character of the string.',
  },
  {
    name: 'concat',
    description:
      'Adds a specified text string to the end of the returned value.',
  },
  {
    name: 'endsWith',
    description: 'Checks if the text string ends with the specified text.',
  },
  {
    name: 'equals',
    description: 'Checks if the text field is equal to the given string.',
  },
  {
    name: 'equalsIgnoreCase',
    description:
      'Checks if the text field is equal to the given string, regardless of case.',
  },
  {
    name: 'htmlEncode',
    description: 'Encodes text to allow it to be included in HTML content.',
  },
  {
    name: 'indexOf',
    description:
      'Returns the position of the first character in the specified text string.',
  },
  {
    name: 'isAlpha',
    description: 'Checks if the text contains only letters.',
  },
  {
    name: 'isAlphanumeric',
    description: 'Checks if the text contains only letters or numbers.',
  },
  {
    name: 'isEmpty',
    description: 'Checks if the text is empty.',
  },
  {
    name: 'isNotEmpty',
    description: 'Checks if the text is not empty.',
  },
  {
    name: 'isNumeric',
    description: 'Checks if the text contains only numbers.',
  },
  {
    name: 'jsonEncode',
    description: 'Encodes text to allow it to be included in JSON calls.',
  },
  {
    name: 'lastIndexOf',
    description:
      'Returns the position of the last character in the specified text string.',
  },
  {
    name: 'left',
    description:
      'Returns the specified number of characters from the left of the text string.',
  },
  {
    name: 'leftPad',
    description:
      'Adds characters to the beginning of the text until the specified total number of characters is reached.',
  },
  {
    name: 'length',
    description: 'Returns the number of characters in the text string.',
  },
  {
    name: 'match',
    description:
      'Performs a regular expression search and returns the first matching group.',
  },
  {
    name: 'quote',
    description:
      'Escapes the smart value into a literal text expression for use in regex.',
  },
  {
    name: 'remove',
    description: 'Removes specified characters from the text.',
  },
  {
    name: 'replace',
    description:
      'Replaces all literal text matches with a specified replacement.',
  },
  {
    name: 'replaceAll',
    description:
      'Performs a regex search and replaces any match with the replacement.',
  },
  {
    name: 'reverse',
    description: 'Reverses the characters in the text string.',
  },
  {
    name: 'right',
    description:
      'Returns the specified number of characters from the right of the text string.',
  },
  {
    name: 'rightPad',
    description:
      'Adds characters to the end of the text string until the specified total number of characters is reached.',
  },
  {
    name: 'split',
    description:
      "Splits the text and returns the word specified by the word's position.",
  },
  {
    name: 'startsWith',
    description: 'Checks if the text string starts with the specified text.',
  },
  {
    name: 'substring',
    description:
      'Returns the characters after the specified number of characters.',
  },
  {
    name: 'substringAfter',
    description:
      'Returns the text after the first occurrence of the given separator.',
  },
  {
    name: 'substringAfterLast',
    description:
      'Returns the text after the last occurrence of the given separator.',
  },
  {
    name: 'substringBefore',
    description:
      'Returns the text before the first occurrence of the given separator.',
  },
  {
    name: 'substringBeforeLast',
    description:
      'Returns the text before the last occurrence of the given separator.',
  },
  {
    name: 'substringBetween',
    description: 'Returns the text between the given parameters.',
  },
  {
    name: 'toLowerCase',
    description: 'Converts the text string to lower case.',
  },
  {
    name: 'toUpperCase',
    description: 'Converts the text string to upper case.',
  },
  {
    name: 'trim',
    description: 'Removes any whitespace at the beginning or end of the value.',
  },
  {
    name: 'urlEncode',
    description: 'Encodes text to allow it to be included as a URL parameter.',
  },
  {
    name: 'xmlEncode',
    description: 'Encodes text to allow it to be included in XML data.',
  },
  {
    name: 'issue.description',
    description: "Returns the content in the issue's Description field.",
  },
  {
    name: 'issue.key',
    description:
      "Returns the issue's key, which is a unique identifier comprised of the project key and the issue's number (e.g., PROJ-123).",
  },
  {
    name: 'issue.project',
    description: 'Returns the project this issue is a part of.',
  },
  {
    name: 'issue.status',
    description: "Returns the issue's status ID.",
  },
  {
    name: 'issue.status.name',
    description: "Returns the issue's status name.",
  },
  {
    name: 'issue.summary',
    description: "Returns the issue's summary.",
  },
  {
    name: 'issue.versions',
    description: "Returns the issue's Affects versions.",
  },
  {
    name: 'issue.issueType.name',
    description: "Returns the issue's type (e.g., Story, Bug, Task).",
  },
  {
    name: 'issue.resolution.name',
    description: "Returns the issue's resolution (e.g., Fixed, Canceled).",
  },
  {
    name: 'issue.updated',
    description: 'Returns the date the issue was last updated.',
  },
  {
    name: 'issue.created',
    description: "Returns the issue's creation date.",
  },
  {
    name: 'issue.duedate',
    description: "Returns the issue's due date.",
  },
  {
    name: 'issue.assignee.displayName',
    description: "Returns the issue's assignee.",
  },
  {
    name: 'issue.reporter.displayName',
    description: "Returns the issue's reporter.",
  },
  {
    name: 'issue.[Custom Field].id',
    description: 'Returns the unique ID for the custom field assigned by Jira.',
  },
  {
    name: 'issue.[Custom Field].description',
    description:
      'Returns the text displayed below the custom field viewed in the Simple Search column.',
  },
  {
    name: 'issue.[Custom Field].name',
    description:
      'Returns the visible label displayed on the left of the field.',
  },
  {
    name: 'issue.affectedServices.name',
    description: "Returns the names of the issue's Affected services.",
  },
  {
    name: 'issue.affectedServices.tier',
    description: "Returns the tiers of the issue's Affected services.",
  },
  {
    name: 'issue.affectedServices.changeApprovers',
    description:
      "Returns the account ID of all change approvers of the issue's services.",
  },
  {
    name: 'issue.affectedServices.dependentServices',
    description:
      "Returns the list of services that this issue's services depend on.",
  },
  {
    name: 'issue.comments.last.body',
    description: 'Returns the body of the last comment.',
  },
  {
    name: 'issue.comments.first.body',
    description: 'Returns the body of the first comment.',
  },
  {
    name: 'issue.comments.size',
    description: 'Returns the number of comments on the issue.',
  },
  {
    name: 'issue.components.name',
    description: "Returns the values in the issue's Component field.",
  },
  {
    name: 'issue.epic.key',
    description: "Returns the epic's key.",
  },
  {
    name: 'issue.epic.status.name',
    description: "Returns the epic's status.",
  },
  {
    name: 'issue.fixVersions.name',
    description: 'Returns the name of the fix version.',
  },
  {
    name: 'issue.fixVersions.description',
    description: 'Returns the description of the fix version.',
  },
  {
    name: 'issue.fixVersions.archived',
    description: 'Returns true if the fix version is archived.',
  },
  {
    name: 'issue.fixVersions.released',
    description: 'Returns true if the fix version is released.',
  },
  {
    name: 'issue.fixVersions.releaseDate',
    description: "Returns the fix version's release date.",
  },
  {
    name: 'issue.latest.description',
    description: "Returns the status's description.",
  },
  {
    name: 'issue.parent.key',
    description: "Returns the issue key of the subtask's parent issue.",
  },
  {
    name: 'issue.parent.priority.name',
    description: "Returns the priority of the subtask's parent issue.",
  },
  {
    name: 'issue.properties',
    description: 'Accesses any issue property.',
  },
  {
    name: 'issue.Request Type.requestType.name',
    description: 'Returns the customer request type.',
  },
  {
    name: 'issue.Request Type.currentStatus.status',
    description: 'Returns the status of the current request.',
  },
  {
    name: 'issue.security.name',
    description: 'Returns the security level name.',
  },
  {
    name: 'issue.security.id',
    description: 'Returns the security level ID.',
  },
  {
    name: 'issue.timetracking.timespent',
    description:
      'Returns the amount of time that has been logged on the issue.',
  },
  {
    name: 'issue.timetracking.remainingestimate',
    description: 'Returns the value in the Time remaining field.',
  },
  {
    name: 'issue.url',
    description: 'Returns the URL of the issue.',
  },
  {
    name: 'issue.versions.name',
    description: 'Returns the name of the affects version.',
  },
  {
    name: 'issue.watchers.displayName',
    description: "Returns the watcher's display name.",
  },
  {
    name: 'lookupIssues.key',
    description: 'Returns the issue key from a JQL search.',
  },
  {
    name: 'lookupIssues.url',
    description: 'Returns the issue URL from a JQL search.',
  },
  {
    name: 'lookupIssues.summary',
    description: 'Returns the issue summary from a JQL search.',
  },
  {
    name: 'triggerIssue',
    description: 'Refers to the original issue that triggered the rule.',
  },
  {
    name: 'attachment.filename',
    description: 'Returns the filename of the attachment.',
  },
  {
    name: 'attachment.mimeType',
    description: 'Returns the file format of the attachment.',
  },
  {
    name: 'attachment.created',
    description:
      'Returns the date and time the attachment was added to the issue.',
  },
  {
    name: 'baseUrl',
    description: 'Prints the URL of the Jira instance.',
  },
  {
    name: 'changelog.summary',
    description: 'Changelog information for the Summary field.',
  },
  {
    name: 'comment.body',
    description: 'Returns the body of the comment that triggered the rule.',
  },
  {
    name: 'createdIssue',
    description: 'Accesses the previous issue created in the rule.',
  },
  {
    name: 'eventType',
    description: 'The type of event that triggered the rule.',
  },
  {
    name: 'fieldChange.fromString',
    description: 'Returns the previous value as displayed.',
  },
  {
    name: 'rule.name',
    description: 'Returns the name of the rule that is currently running.',
  },
  {
    name: 'webhookResponse.status',
    description: 'Response code (e.g., 200) from a webhook request.',
  },
  {
    name: 'worklog.comment',
    description: 'Returns the comment associated with a worklog entry.',
  },
  {
    name: 'issue.InsightField',
    description: 'Returns the issue summary and issue key for Insight fields.',
  },
  {
    name: 'issue.TempoAccountField',
    description: 'Returns the name of the Tempo account.',
  },
  {
    name: 'approval.createdDate',
    description: 'Returns the creation date of approval.',
  },
  {
    name: 'project.id',
    description: 'Returns the ID of the project that triggered the rule.',
  },
  {
    name: 'project.key',
    description:
      'Returns the project key of the project that triggered the rule.',
  },
  {
    name: 'project.name',
    description: 'Returns the name of the project that triggered the rule.',
  },
  {
    name: 'project.projectTypeKey',
    description:
      "Returns the triggering project's type. Possible types are Business, Software, Service management, or Discovery.",
  },
  {
    name: 'project.avatarUrls',
    description: "Returns the triggering project's avatar URL.",
  },
  {
    name: 'list',
    description:
      'Iterates over a list and prints it. This smart value can reference further methods and properties.',
  },
  {
    name: 'average',
    description: 'Finds the average of all numbers in a list.',
  },
  {
    name: 'distinct',
    description: 'Returns all items in a given list, without duplicate items.',
  },
  {
    name: 'isEmpty',
    description:
      "Returns true if a list is empty, and false if the list isn't.",
  },
  {
    name: 'join(separator)',
    description:
      'Iterates over a list and prints out items separated by the given characters.',
  },
  {
    name: 'get(index)',
    description:
      'The element at the specified index, where 0 denotes the first element in the array.',
  },
  {
    name: 'getFromEnd(index)',
    description:
      'The element at the specified index from the end, where 0 denotes the last element in the array.',
  },
  {
    name: 'first',
    description: 'The first item in a list.',
  },
  {
    name: 'last',
    description: 'The last element of a list.',
  },
  {
    name: 'max',
    description:
      'Finds the highest number in a list, or finds the latest date in a list.',
  },
  {
    name: 'min',
    description:
      'Finds the smallest number in a list, or finds the earliest date in a list.',
  },
  {
    name: 'size',
    description: 'The size of the list.',
  },
  {
    name: 'sum',
    description: 'Finds the sum of all values in a list.',
  },

  {
    name: 'accountId',
    description:
      'The unique ID of the user, set by Jira. It is not possible to change this ID.',
  },
  {
    name: 'active',
    description: "Whether the user's account is active or not.",
  },
  {
    name: 'avatarUrls',
    description:
      "Provides access to the user's avatar images in sizes 16x16, 24x24, 32x32 & 48x48.",
  },
  {
    name: 'displayName',
    description: "The full name in the user's profile.",
  },
  {
    name: 'emailAddress',
    description: "The email address in the user's profile.",
  },
  {
    name: 'timeZone',
    description: 'The default timezone of the Atlassian Cloud site.',
  },
  {
    name: 'assignee',
    description: 'The assignee of the active issue.',
  },
  {
    name: 'comment.author',
    description: 'The user who adds a comment on an issue.',
  },
  {
    name: 'creator',
    description:
      'The user who created the active issue. It is not possible to change the creator of an issue.',
  },
  {
    name: 'initiator',
    description: 'The user who triggered the rule.',
  },
  {
    name: 'reporter',
    description: 'The reporter of the active issue.',
  },
  {
    name: 'Custom field',
    description:
      'To access information related to user picker custom fields, enter the field name in between {{ and }}.',
  },
  {
    name: 'entity properties',
    description:
      'Arbitrary key/value pairs that can be set for a user in Jira.',
  },
  {
    name: 'equals',
    description:
      'Returns true if the two inputs are equal, and false if they aren’t.',
  },
  {
    name: 'exists',
    description:
      'Returns true if the specified smart value exists, otherwise returns null.',
  },
  {
    name: 'not',
    description:
      'Returns true if the smart value is false, and false if the smart value is true.',
  },
  {
    name: 'and',
    description:
      'Returns true if both smart values are true, otherwise returns false.',
  },
  {
    name: 'or',
    description:
      'Returns true if at least one of the smart values is true, otherwise returns false.',
  },
  {
    name: 'now',
    description: 'Returns the current date and time in UTC+00:00.',
  },
  {
    name: '[date].[dateformat]',
    description:
      'Takes a date and time that you provide, and returns it in a format of your choosing.',
  },
  {
    name: '[date1].diff([date2]).[unit]',
    description:
      'Returns the amount of time between date1 and date2, in the unit specified.',
  },
  {
    name: '[date1].isAfter([date2])',
    description: 'Returns true if date1 is after date2, and false if not.',
  },
  {
    name: '[date1].isBefore([date2])',
    description: 'Returns true if date1 is before date2, and false if not.',
  },
  {
    name: '[date1].isEquals([date2])',
    description:
      'Returns true if date1 and date2 are the same, and false if not.',
  },
  {
    name: '[date1].compareTo([date2])',
    description: 'Compares date1 to date2, to find which date is earlier.',
  },
  {
    name: '[date].plus[Unit]([number])',
    description:
      'Takes the given date and time, adds the number of the unit specified, and returns the resulting date and time.',
  },
  {
    name: '[date].minus[Unit]([number])',
    description:
      'Takes the given date and time, subtracts the number of the unit specified, and returns the resulting date and time.',
  },
  {
    name: '[date].toBusinessDay',
    description: 'Takes the given date, and returns the next business date.',
  },
  {
    name: '[date].toBusinessDayBackwards',
    description: 'Takes the given date, and returns the previous business day.',
  },
  {
    name: '[date].setTimeZone([timezone])',
    description:
      'Takes a given time, and sets that time to the given time zone.',
  },
  {
    name: '[date].convertToTimeZone([timezone])',
    description:
      'Takes a given time, and converts it to the time in the given time zone.',
  },
  {
    name: '[date].withDayOfMonth([date])',
    description:
      'Takes a given date and time, and returns that same date and time, but with the day of the month set to the date that was inputted.',
  },
  {
    name: '[date].withNextDayOfWeek(["day"])',
    description: 'Sets the date to the next matching day.',
  },
  {
    name: '[date].with[attribute](input)',
    description:
      'Takes a given date and time, and sets the date or time to whatever is described in the attribute.',
  },
  {
    name: '[date].endOfMonth',
    description: 'Returns the date and time of the end of the month.',
  },
  {
    name: '[date].startOfMonth',
    description: 'Returns the date and time of the start of the month.',
  },
  {
    name: '[date].firstBusinessDayOfMonth',
    description: 'Returns the first business day of the month.',
  },
  {
    name: '[date].lastBusinessDayOfMonth',
    description: 'Returns the last business day of the month.',
  },
  {
    name: '[date].firstOfTheMonth(input)',
    description:
      'Takes the given date, and returns the first specified day of the month.',
  },
  {
    name: '[date].lastOfTheMonth(input)',
    description: 'Takes the given date, and returns the last day of the month.',
  },
  {
    name: '[date].ofTheMonth(n, day)',
    description: 'Takes the given date, and returns the nth day of that month.',
  },
  {
    name: 'branch',
    description: 'Represents an independent line of development.',
  },
  {
    name: 'branch.name',
    description: 'Returns the name of the branch, e.g. TEST-123-some-feature.',
  },
  {
    name: 'branch.url',
    description:
      'Returns the URL of the branch, e.g. https://bitbucket.org/account/repo/TEST-123-some-feature.',
  },
  {
    name: 'branch.repository',
    description:
      'Returns information related to the repository the branch belongs to.',
  },
  {
    name: 'branch.repository.name',
    description: 'Returns the name of the repository.',
  },
  {
    name: 'branch.repository.url',
    description: 'Returns the URL of the repository.',
  },
  {
    name: 'createdBranch',
    description:
      'Access information related to the last branch that was created.',
  },
  {
    name: 'createdBranch.name',
    description: 'Returns the name of the branch.',
  },
  {
    name: 'createdBranch.url',
    description: 'Returns the URL of the branch.',
  },
  {
    name: 'createdBranch.product',
    description: 'Returns the product that the branch was created in.',
  },
  {
    name: 'createdBranch.repository',
    description: 'Accesses details of the branch’s repository.',
  },
  {
    name: 'createdBranch.repository.id',
    description: 'Returns the repository’s ID.',
  },
  {
    name: 'createdBranch.repository.name',
    description: 'Returns the repository’s name.',
  },
  {
    name: 'createdBranch.repository.url',
    description: 'Returns the repository’s URL.',
  },
  {
    name: 'createdBranches',
    description:
      'Access information related to all branches created in the rule, as a list.',
  },
  {
    name: 'createdBranches.name',
    description: 'Returns the names of the branches.',
  },
  {
    name: 'createdBranches.url',
    description: 'Returns the URLs of the branches.',
  },
  {
    name: 'createdBranches.product',
    description: 'Returns the products that the branches were created in.',
  },
  {
    name: 'createdBranches.repository',
    description: "Accesses details of the branches' repositories.",
  },
  {
    name: 'createdBranches.repository.id',
    description: 'Returns the IDs of each repository.',
  },
  {
    name: 'createdBranches.repository.name',
    description: 'Returns the names of each repository.',
  },
  {
    name: 'createdBranches.repository.url',
    description: 'Returns the URLs of each repository.',
  },
  {
    name: 'commit',
    description: 'Represents an individual change to a file (or set of files).',
  },
  {
    name: 'commit.hash',
    description: 'Returns the SHA1 hash of the commit.',
  },
  {
    name: 'commit.shortHash',
    description: 'Returns the truncated SHA1 hash of the commit.',
  },
  {
    name: 'commit.message',
    description: 'Returns the commit message.',
  },
  {
    name: 'commit.url',
    description: 'Returns the absolute URL of the commit.',
  },
  {
    name: 'commit.isMergeCommit',
    description: 'Returns True if commit is a merge commit.',
  },
  {
    name: 'commit.timestamp',
    description: 'Returns the timestamp (UTC) the commit was created.',
  },
  {
    name: 'commit.repository',
    description: 'Returns information related to the repository.',
  },
  {
    name: 'commit.repository.name',
    description: 'Returns the name of the repository.',
  },
  {
    name: 'commit.repository.url',
    description: 'Returns the repository’s URL.',
  },
  {
    name: 'flag',
    description: 'Returns information related to the created feature flag.',
  },
  {
    name: 'flag.key',
    description: 'Returns the key of the feature flag.',
  },
  {
    name: 'flag.name',
    description: 'Returns the name of the feature flag.',
  },
  {
    name: 'flags',
    description:
      'Returns information related to all feature flags created throughout the rule or branch, as a list.',
  },
  {
    name: 'flags.key',
    description: 'Returns the key of the feature flag.',
  },
  {
    name: 'flags.name',
    description: 'Returns the name of the feature flag.',
  },
  {
    name: 'pullRequest',
    description:
      'Represents proposed changes before they are integrated into an official project.',
  },
  {
    name: 'pullRequest.title',
    description: 'Returns the title of the pull request.',
  },
  {
    name: 'pullRequest.url',
    description: 'Returns the absolute URL of the pull request.',
  },
  {
    name: 'pullRequest.state',
    description: 'Returns the state the pull request is in.',
  },
  {
    name: 'pullRequest.createdDate',
    description: 'Returns the time (UTC) when the pull request was created.',
  },
  {
    name: 'pullRequest.updatedDate',
    description:
      'Returns the time (UTC) when the pull request was last updated.',
  },
  {
    name: 'pullRequest.sourceBranch',
    description:
      'Returns information related to the source branch for the pull request.',
  },
  {
    name: 'pullRequest.sourceBranch.name',
    description: 'Returns the name of the source branch.',
  },
  {
    name: 'pullRequest.sourceBranch.url',
    description: 'Returns the URL of the source branch.',
  },
  {
    name: 'pullRequest.destinationBranch',
    description:
      'Returns information related to the destination branch of the pull request.',
  },
  {
    name: 'pullRequest.destinationBranch.name',
    description: 'Returns the name of the destination branch.',
  },
  {
    name: 'pullRequest.destinationBranch.url',
    description: 'Returns the URL of the destination branch.',
  },
  {
    name: 'build',
    description:
      'Represents the process in which files are converted into their final consumable form.',
  },
  {
    name: 'build.name',
    description: 'Returns the name of the build.',
  },
  {
    name: 'build.url',
    description: 'Returns the absolute URL of the build.',
  },
  {
    name: 'build.state',
    description: 'Returns the state of the build.',
  },
  {
    name: 'build.refs',
    description: 'Returns the refs of the build.',
  },
  {
    name: 'deployment',
    description:
      'Represents the process in which a product is released in an environment.',
  },
  {
    name: 'deployment.name',
    description: 'Returns a human-friendly deployment name.',
  },
  {
    name: 'deployment.url',
    description: 'Returns the absolute URL of the deployment.',
  },
  {
    name: 'deployment.state',
    description: 'Returns the state of the deployment.',
  },
  {
    name: 'deployment.environment',
    description: 'Returns information related to the deployment environment.',
  },
  {
    name: 'repository',
    description: 'Represents a collection of files and associated metadata.',
  },
  {
    name: 'repository.name',
    description: 'Returns the name of the repository.',
  },
  {
    name: 'repository.url',
    description: 'Returns the absolute URL of the repository.',
  },
  {
    name: 'environment',
    description:
      'Represents a distinct ecosystem where products are deployed to.',
  },
  {
    name: 'environment.name',
    description: 'Returns the use-provided name for the environment.',
  },
  {
    name: 'environment.type',
    description: 'Returns the environment type.',
  },
  {
    name: 'sprint',
    description:
      'Accesses information relating to the sprint that triggered the rule.',
  },
  {
    name: 'sprint.id',
    description: 'Returns the sprint ID.',
  },
  {
    name: 'sprint.name',
    description: 'Returns the sprint name.',
  },
  {
    name: 'sprint.isStarted',
    description: 'Returns true if the sprint has started.',
  },
  {
    name: 'sprint.isClosed',
    description: 'Returns true if the sprint has closed.',
  },
  {
    name: 'sprint.startDate',
    description: 'Returns the start date of the sprint.',
  },
  {
    name: 'sprint.endDate',
    description: 'Returns the end date of the sprint.',
  },
  {
    name: 'sprint.completeDate',
    description: 'Returns date the sprint was marked as complete.',
  },
  {
    name: 'sprint.originBoardId',
    description: 'Returns the ID of the board the sprint belongs to.',
  },
  {
    name: 'sprint.goal',
    description: 'Returns the sprint goal.',
  },
  {
    name: 'createdSprint',
    description:
      'Access information related to the last sprint that was created in the rule.',
  },
  {
    name: 'createdSprint.id',
    description: 'Returns the sprint ID.',
  },
  {
    name: 'createdSprint.name',
    description: 'Returns the sprint name.',
  },
  {
    name: 'createdSprint.isStarted',
    description: 'Returns true if the sprint has started.',
  },
  {
    name: 'createdSprint.isClosed',
    description: 'Returns true if the sprint has closed.',
  },
  {
    name: 'createdSprint.startDate',
    description: 'Returns the start date of the sprint.',
  },
  {
    name: 'createdSprint.endDate',
    description: 'Returns the end date of the sprint.',
  },
  {
    name: 'createdSprint.completeDate',
    description: 'Returns date the sprint was marked as complete.',
  },
  {
    name: 'createdSprint.originBoardId',
    description: 'Returns the ID of the board the sprint belongs to.',
  },
  {
    name: 'createdSprint.goal',
    description: 'Returns the sprint goal.',
  },
  {
    name: 'createdSprints',
    description:
      'Access information related to all sprints created in an automation rule, as a list.',
  },
  {
    name: 'createdSprints.id',
    description: 'Returns the sprint IDs.',
  },
  {
    name: 'createdSprints.name',
    description: 'Returns the sprint names.',
  },
  {
    name: 'createdSprints.isStarted',
    description: 'Returns true if the sprint has started.',
  },
  {
    name: 'createdSprints.isClosed',
    description: 'Returns true if the sprint has closed.',
  },
  {
    name: 'createdSprints.startDate',
    description: 'Returns the start date of each sprint.',
  },
  {
    name: 'createdSprints.endDate',
    description: 'Returns the end date of each sprint.',
  },
  {
    name: 'createdSprints.completeDate',
    description: 'Returns date each sprint was marked as complete.',
  },
  {
    name: 'createdSprints.originBoardId',
    description: 'Returns the ID of the board each sprint belongs to.',
  },
  {
    name: 'createdSprints.goal',
    description: 'Returns each sprint goal.',
  },
  {
    name: 'version',
    description:
      'Accesses information for the version that triggered the rule.',
  },
  {
    name: 'version.name',
    description: "Returns the version's name.",
  },
  {
    name: 'version.id',
    description: "Returns the version's ID.",
  },
  {
    name: 'version.description',
    description: "Returns the version's description.",
  },
  {
    name: 'version.archived',
    description: 'Returns true if the version is archived.',
  },
  {
    name: 'version.startDate',
    description: "Returns the version's start date.",
  },
  {
    name: 'version.released',
    description: 'Returns true if the version is released.',
  },
  {
    name: 'version.releaseDate',
    description: "Returns the version's release date.",
  },
  {
    name: 'version.project.key',
    description:
      'Returns the project key of the project the version belongs to.',
  },
  {
    name: 'component',
    description:
      'Access component details created by the Component created in Compass trigger.',
  },
  {
    name: 'component.ownerId',
    description: 'Prints the ID (ARI) of the team that owns the component.',
  },
  {
    name: 'component.name',
    description: 'Prints the name of the Compass component.',
  },
  {
    name: 'component.id',
    description: 'Prints the ID (ARI) of the Compass component.',
  },
  {
    name: 'component.url',
    description: 'Prints the URL of the Compass component.',
  },
  {
    name: 'component.cloudId',
    description: 'Prints the Cloud ID of the Compass component.',
  },
  {
    name: 'component.type',
    description: 'Prints the component type.',
  },
  {
    name: 'component.lastUserModificationAt',
    description:
      'Prints the timestamp for when the component was last modified.',
  },
  {
    name: 'component.lastUserModificationBy',
    description:
      'Prints the ID (ARI) of the user that last modified the component.',
  },
  {
    name: 'scorecard',
    description:
      'Access scorecard details created by the Scorecard status change in Compass trigger.',
  },
  {
    name: 'scorecard.id',
    description: 'Prints the ID (ARI) of the Compass scorecard.',
  },
  {
    name: 'scorecard.name',
    description: 'Prints the name of the Compass scorecard.',
  },
  {
    name: 'scorecard.type',
    description: 'Prints the type of the Compass scorecard.',
  },
  {
    name: 'scorecard.ownerId',
    description:
      'Prints the ID (ARI) of the user that owns the Compass scorecard.',
  },
  {
    name: 'scorecard.applicationType',
    description: 'Prints the application type of the Compass scorecard.',
  },
  {
    name: 'scorecard.status',
    description: 'Prints the new status of the Compass scorecard.',
  },
  {
    name: 'scorecard.previousStatus',
    description: 'Prints the previous status of the Compass scorecard.',
  },
  {
    name: 'scorecard.lastUserModificationAt',
    description:
      'Prints the timestamp for when the scorecard was last modified.',
  },
  {
    name: 'scorecard.lastUserModificationBy',
    description:
      'Prints the ID (ARI) of the user that last modified the scorecard.',
  },
  {
    name: 'vulnerability.displayName',
    description: 'Returns the display name of the vulnerability.',
  },
  {
    name: 'vulnerability.description',
    description:
      'Returns the vulnerability description in plain text as sent from the security tool in markdown format.',
  },
  {
    name: 'vulnerability.type',
    description:
      'Returns the type of vulnerability, for example DAST, SAST or SCA.',
  },
  {
    name: 'vulnerability.introducedDate',
    description:
      'Returns a timestamp showing the date and time the vulnerability was introduced.',
  },
  {
    name: 'vulnerability.lastUpdatedDate',
    description:
      'Returns a timestamp showing the date and time the vulnerability was last updated.',
  },
  {
    name: 'vulnerability.severity',
    description:
      'Returns the vulnerability severity in plain text as sent from the security tool.',
  },
  {
    name: 'vulnerability.identifiers',
    description: 'Returns a list of CVE identifiers for the vulnerability.',
  },
  {
    name: 'vulnerability.additionalInfoContent',
    description: 'Returns additional information content.',
  },
  {
    name: 'vulnerability.additionalInfoURL',
    description: 'Returns a URL for additional information.',
  },
  {
    name: 'vulnerability.status',
    description: 'Returns the status of the vulnerability.',
  },
  {
    name: 'vulnerability.url',
    description:
      'Returns a specific URL for the vulnerability on the security tool provider’s site.',
  },
  {
    name: 'vulnerability.description.text',
    description: 'Returns the vulnerability description in plain text.',
  },
  {
    name: 'vulnerability.description.wiki',
    description: 'Returns the vulnerability description as wiki text.',
  },
  {
    name: 'vulnerability.description.html',
    description: 'Returns the vulnerability description as HTML.',
  },
  {
    name: 'asJsonString',
    description:
      'Render a text property as a string in JSON format. This will escape any special characters contained in the string.',
  },
  {
    name: 'asJsonStringArray',
    description:
      'Transforms a list of values into a JSON encoded list of values, or converts a list of numbers into a list of JSON encoded strings.',
  },
  {
    name: 'asJsonArray',
    description: 'Transforms a list of number values into a JSON encoded list.',
  },
  {
    name: 'asJsonObject',
    description:
      'Transforms a text value into a JSON key/value pair object. The keyName property is used as the name of the field.',
  },
  {
    name: 'asJsonObjectArray',
    description:
      'Allows you to extract one attribute of an object into a JSON key/value pair object.',
  },
  {
    name: 'xmlToJson',
    description:
      'Takes a string representation of XML data and converts it to a JSON object.',
  },
  {
    name: 'Chaining functions',
    description:
      'You can chain two of the above functions to extract a property from an object into a JSON key/value pair, while also changing the name of the key.',
  },
  {
    name: '{{#=}}{{/}}',
    description: '{{#=}}3.2 * {{issue.My Number field}} + 43{{/}}',
  },
  {
    name: '{{#math}}{{/}}',
    description: 'Increases a number by 1 using `{{#increment}}4{{/}}`.',
  },
  {
    name: '{{#increment}}{{/}}',
    description:
      'Perform calculations with numeric custom fields, e.g., `{{#=}}3.2 * {{issue.My Number field}} + 43{{/}}`.',
  },
  {
    name: 'format',
    description: 'Specify the format of a date at the end of the smart value.',
  },
  {
    name: 'withLocale',
    description:
      "Specify the locale to print the dates in (default is 'US' locale).",
  },
  {
    name: 'convertToTimeZone',
    description: "Converts the issue's created time to the new timezone.",
  },
  {
    name: 'setTimeZone',
    description: 'Sets the timezone for the date while keeping the same time.',
  },
  {
    name: 'plusDays',
    description: 'Adds a specified number of days to the current date.',
  },
  {
    name: 'withDayOfMonth',
    description: 'Sets the day of the month for the date.',
  },
  {
    name: 'dayOfMonth',
    description: 'Retrieves the day of the month from the date.',
  },
  {
    name: 'dayOfWeekName',
    description: 'Gets the name of the day of the week for the date.',
  },
  {
    name: 'toBusinessDay',
    description: 'Calculates the next business day from the current date.',
  },
  {
    name: 'plusBusinessDays',
    description:
      'Adds a specified number of business days to the current date.',
  },
  {
    name: 'diff',
    description: 'Calculates the difference between two dates.',
  },
  {
    name: 'isAfter',
    description: 'Compares two dates to check if one is after the other.',
  },
  {
    name: 'toDate',
    description: "Converts text to a date if it's in the correct format.",
  },
  {
    name: 'startOfMonth',
    description: 'Gets the first day of the current month.',
  },
  {
    name: 'endOfMonth',
    description: 'Gets the last day of the current month.',
  },
  {
    name: 'firstBusinessDayOfMonth',
    description: 'Gets the first business day of the current month.',
  },
  {
    name: 'lastBusinessDayOfMonth',
    description: 'Gets the last business day of the current month.',
  },
  {
    name: 'jsonStringToObject',
    description: 'Converts a JSON string into an object.',
  },
];
