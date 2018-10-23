# Exercice du cookie cliquable

# Instructions


# JS Cookie Clicker

- Official Cookie Clicker : <http://orteil.dashnet.org/cookieclicker/>
- CERN Particle Clicker: <https://particle-clicker.web.cern.ch/particle-clicker/>

![Chocolate Chip Cookies](chocolate_chip_cookies.jpg)

## Step 1 : _Base structure_
Make a basic structure with *HTML* / *CSS* / *JS*. In the HTML, make a button named « Click » with an identifier and a `div` with an identifier `output` and set his initial value to `0`.

## Step 2 : _Get the JS ready_
Set up variables at the head of your *JS* that will allow us to manipulate our button and our `div`. We'll need another variable `score` initialized at `0`.

## Step 3 : _Increase the score_
When we click on the button, increase the value of the variable `score` by `1`, then display that score in the output `div`.

## Step 4 : _Get the multiplier ready_
Add a button with an identifier `multiply`. Create another click counter (name the variable `multiplier` and set it to `1`) on that button. Create an associated function to the multiplier click called `increaseMultiplier`.

## Step 5 : _Use the multiplier_
Make it so the score of the first button click doesn't increase by `1` but by the multiplier value. For example, if i clicked once on the multiplier button, each click on the first button will increase the score by `2` instead of `1`.

## Step 6 : _Multiplier price_
The multipier allows you to raise the score more quickly. It shouldn't be free ! Try to decrease the score by `50` when you click on the multiplier button.

## Step 7 : _No debts_
We can't go in debt and the score can't get below 0. Try to update the score output after the multiplier purchase.

## Step 8 : _Counter output_
Display the multiplier counter inside the button. For example, if the counter is at `5`, the button text should be « Multiplier x5 ».

## Step 9 : _Price increasing_
Buying a lot of multipliers is too easy. After buying six multipliers you'll figure out why the price should increase with each multiplier bought.
For example, the first should be worth `50`, the next `100`, `200`, and so on... Make it simple, you don't need a lot of conditions. Find a good way to raise the price !

## Step 10 : _Price display_
In the button text, in addition to « x5 », add the cost of the next purchase.

## Step 11 : _Autoclicker_
New upgrade to buy: Autoclick. As soon as you hit `200` score, a click is made automatically each second.
(`setInterval` is your friend)

## Step 12 : _Autoclicker purchase_
Autoclicked won't be automatic anymore. From now on you'll need to buy the autoclicker. Add a button with an `autoclick` identifier. It'll cost `500`. Once the autoclicker bought, the button will have to be disabled.

## Step 13 : _Purchase of a bonus_
From now on, we have to be able to buy a bonus that increase the score on each click by 200% for 30 seconds. It means that if you're supposed to get `3` on a click, for next 30 seconds the bonus will increase that click value to `6`. After the 30 seconds the score should increase by `3` again.
Create the « BONUS » button with an identifier `bonus`, and set the cost at `5000`. Once the bonus bought, the number of seconds will be displayed in the button with the count and the button will have to be desactivated while the bonus is active. Once the bonus is over, the button have to be reactivated with the same text as before pressing it.

## Step 14 : _Desactivate buttons (if you don't have enough to buy them)_
Make it so the buttons multiplier, autoclick and bonus can't be clicked UNLESS you have enough score to buy them.

## Step 15 : _Some CSS_
Make it pretty ! No pictures !
