import { getUserObj, getSubscriptionPlans } from "../profile/user-accout-m.js";
import { sqlTimestampToJs } from "../../../utils/date-formatter.js";
const subscriptionUrl =
  "http://localhost/delta-fitness/shared/data/api/payments.php";




onInit();

function onInit() {
  getSubsPlans();
}

function getSubsPlans() {
  const request = new XMLHttpRequest();
  request.onload = () => {
    let responseObject = null;

    try {
      responseObject = JSON.parse(request.responseText);
    } catch {
      console.error("Could not parse JSON");
    }

    if (responseObject) {
      handleResponse(responseObject);
    }
  };

  request.open("get", subscriptionUrl);
  request.setRequestHeader("Content-type", "application/json");
  request.send();
}



function handleResponse(subscriptions) {
  let user = getUserObj();
  let plans = getSubscriptionPlans();
  // console.log(plans);

  const response = subscriptions.filter(
    (subscription) => subscription.id == user.id
  );

  const subQuantity = document.getElementById('subs-quantity');
  subQuantity.innerHTML = response.length ?? 0;
  
  if (response.length == 0) {
    const noData = document.getElementById("no-data");
    const dataTable = document.getElementById("data-table");
    dataTable.style.display = "none";
    noData.style.display = "flex";
  } else {
    const tbody = document.getElementById("tbody");
    let output = "";

    for (let subscription of response) {

      const subsResponse = plans.filter((plan) => {
        return plan.id == subscription.subscription_id;
      });

      for (let subRes of subsResponse) {
        let subscriptionName = subRes.name;
      
        output += `
            <tr>
               <td> ${sqlTimestampToJs(subscription.createdAt).toDateString()} </td>  
               <td> ${subscriptionName} </td>  
               <td> ${parseFloat(subscription.total).toFixed(2)} </td>  
            </tr>
       `;
      }

      tbody.innerHTML = output;

    }
  }
}


