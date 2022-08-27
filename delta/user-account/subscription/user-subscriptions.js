import { getUserObj, getSubscriptionPlans } from "../profile/user-accout-m.js";
import {
  addMonthToDate,
  sqlTimestampToJs,
} from "../../../utils/date-formatter.js";
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

let dates;

let allDate = [];

function handleResponse(subscriptions) {
  let user = getUserObj();
  let plans = getSubscriptionPlans();

  const response = subscriptions.filter(
    (subscription) => subscription.user_info_id == user.id
  );

  const subQuantity = document.getElementById("subs-quantity");
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
      dates = subscription.createdAt;
      allDate.push(dates);
      const subsResponse = plans.filter((plan) => {
        return plan.id == subscription.subscription_id;
      });
      for (let subRes of subsResponse) {
        let subscriptionName = subRes.name;
        let date = sqlTimestampToJs(subscription.createdAt);
        let endDate = new Date(addMonthToDate(date));
        output += `
              <tr>
                 <td> ${sqlTimestampToJs(
                   subscription.createdAt
                 ).toDateString()} </td>  
                 <td> ${subscriptionName} </td>  
                 <td> ${parseFloat(subscription.total).toFixed(2)} </td>  
                 <td> ${endDate.toDateString()} </td>  
              </tr>
         `;
      }

      tbody.innerHTML = output;
    }
  }
}

const countDown = () => {
  const startDate = sqlTimestampToJs(allDate[allDate.length - 1]);
  const endDate = addMonthToDate(startDate);
  const now = new Date().getTime();
  const gap = endDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  if (gap > 0) {
    const textDays = Math.floor(gap / day);
    const textHours = Math.floor((gap % day) / hour);
    const textMinutes = Math.floor((gap % hour) / minute);
    const textSeconds = Math.floor((gap % minute) / second);

    document.querySelector(".day").innerHTML = textDays;
    document.querySelector(".hour").innerHTML = textHours;
    document.querySelector(".min").innerHTML = textMinutes;
    document.querySelector(".sec").innerHTML = textSeconds;
  } else if (gap == 0) {
    document.getElementById("expired").style.display = "block";
  } else {
    document.getElementById("activate").style.display = "block";
  }
};

setInterval(() => countDown(), 1000);


