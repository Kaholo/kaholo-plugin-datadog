# kaholo-plugin-datadog
kaholo plugin for datadog

This plugin handles REST API integration with Datadog according to the [documentation](https://docs.datadoghq.com/api/)

## Settings:
1) URL - the main URL to your DD (example: https://app.datadoghq.com) The rest of the API will be added automatically (/api/v1/user).
2) API_KEY - From integrations -> APIs
3) APP_KEY - From integrations -> APIs

## Create new DD user:
Create a new user inside Datadog

### Parameters
1) Access role (Option): Standard user, Admin user, Read Only User.
2) Disabled (Options)
3) Email.
4) Handle.
5) Name
