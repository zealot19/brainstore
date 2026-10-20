# How Our App Keeps Everyone's Data the Same

_Explained like you're 10_

Imagine a big head office (we call it HQ) and several little shops in different towns. HQ is the big computer on the internet. Each shop has its OWN computer with its OWN copy of everything, so the shop keeps working even when the internet is asleep.


## Who is who

- HQ (online) = the boss computer everyone shares. In our app it's called the 'master'.
- Shops = each agency. Every agency has its own copy so it never has to stop working.

## Step 1 - Opening day: copy the whole big book

When a new shop opens, the very first thing it does is photocopy HQ's ENTIRE big book. Now the shop knows everything HQ knows: the price list, the towns, the buses, the people, all of it. In the app this one-time copy is called the 'bootstrap'.


## Step 2 - Daily work: write in your own notebook

During the day the shop sells tickets, registers parcels, and so on. Every time it writes something, a little helper quietly keeps a list of ONLY the new things this shop wrote. Think of it as an 'out-tray' of letters waiting to be mailed.


## Step 3 - Mail your news up to HQ

When the internet wakes up, the shop mails HQ only the letters from its out-tray - its own new writes. It never mails back things it received from someone else. So HQ slowly learns everything each shop did.


## Step 4 - HQ shares the news with everyone

When HQ receives a shop's letter, it does two things: it files the news in the big book, AND it pins a copy on a shared 'news board' so the OTHER shops can pick it up later.


## Step 5 - Get everyone else's news

Every shop regularly asks HQ one simple question: 'What is new that is NOT mine?' HQ hands over everything since the last time - HQ's own updates plus the other shops' news - and the shop copies it into its notebook. It skips its own news (it already has that).


## The happy ending

Give it a little time and every shop's book and HQ's book say exactly the same thing. If a shop was offline, no problem: it kept working, and it catches up the moment the internet returns. Grown-ups call this 'eventual consistency' - everyone ends up the same, eventually.


```
SHOP A  <-->  HQ (online)  <-->  SHOP B
  my new notes up ; everyone's notes down
```


## The clever tricks that stop it from breaking

1. **Secret code names.** Every note gets a unique secret code (a UUID). Two shops can never accidentally give two different things the same name, so nothing clashes when they meet at HQ.
2. **Newest wins.** If two people change the very same thing, the app keeps the most recent change and drops the older one. No arguing.
3. **No echo.** You never receive your own news back from HQ, so notes don't bounce around forever.
4. **Works offline.** No internet? Keep selling. The out-tray remembers everything and mails it when the connection is back.
5. **Some things stay private.** A few things are personal to each computer - like who is logged in right now, and its own ticket-number counter. Those are never shared.
6. **One rulebook.** The important rules (routes, prices, who-can-do-what) are written ONLY at HQ and sent down to every shop, so everybody plays by the same rules.

## How fast?

Each shop mails and checks for news about once every minute or two. So a sale made in one town shows up at HQ and then in the other towns within a few minutes.


> In one sentence: every shop starts with a full copy, keeps a list of only its own new writes, mails them to HQ, and HQ shares everyone's writes with everyone - so all the computers slowly become twins.

