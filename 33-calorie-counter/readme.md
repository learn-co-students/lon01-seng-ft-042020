## Flatiron Calorie Counter

Our client is trying to launch a calorie counter as a tool for their customers to use. We already have a functioning backend API where we can query and store data. However, our frontend developer had to take an unexpected leave of absence before finishing. We need your help to complete this SPA (single page application). **_We are on a tight deadline and need you to have a functioning application by the EOD (end of day)._**

---

### Setup

You can find the code for the backend API in the `./calorie-counter-api` directory. We are using postgresql instead of sqlite for this project so **make sure you have that installed**. Check that it works by running `psql` in your terminal.
Finish setting up your app by running the following commands:

- `$ cd ./calorie-counter-api`
- `$ bundle install`
- `$ rails db:create`
- `$ rails db:migrate`
- `$ rails db:seed`

As far as CRUD goes, the backend should have everything you need to `create`, `read` and `update` and `delete`. Still, we're counting on your abilities as a fullstack dev to figure out how the backend works by looking at the codebase.

Take some time to understand the HTML layout that our previous frontend dev has already set up. For CSS library, the previous dev chose [UIkit](https://getuikit.com/). All those extra classes you see are for styling purposes. Feel free to add additional classes/ids at your discretion. _We would advise against removing things from the format of the current setup without good reasons._

---

### Here are the deliverables:

We want want to give beginners an idea of how many calories they should be consuming. We'll use [Basal Metabolic Rate (BMR) formula](https://www.active.com/fitness/calculators/bmr) to accomplish this. Traditionally, there is a formula for female and male calcuation. We will be using both to return a range of numbers back to the user, e.g., 1200kcal - 1400kcal.

- Clicking the "Calculate BMR" button should update the `span#lower-bmr-range` and `span#higher-bmr-range` with the appropriate values
  - forumla for lower-range: `BMR = 655 + (4.35 x weight in pounds) + (4.7 x height in inches) - (4.7 x age in years)`
  - formula for upper-range: `BMR = 66 + (6.23 x weight in pounds) + (12.7 x height in inches) - (6.8 x age in years)`
- Clicking the calculate BMR button should also set the `#progress-bar`'s max attribute to the average of the two numbers above.

- maybe handle errors???
