export let baseUrl = "http://localhost:4000";

// const type = "STAGE";
const type = "PROD";

if (type === "PROD") {
  baseUrl = "https://api.strikexgaming.com";
} else if (type === "STAGE") {
  baseUrl = "https://stagingapiv2.strikexgaming.com"
  
} else {
  baseUrl = "http://localhost:4000";
}

export const APIurls = {
  getRoles: `${baseUrl}/api/v2/get-roles`,
  fetchRoles: `${baseUrl}/api/v2/roles`,
  submitTicket: `${baseUrl}/users/submit-ticket`,
  rejectAgent: `${baseUrl}/users/report-agent`,
  notifyAgent: `${baseUrl}/users/notify-agent`,
};
