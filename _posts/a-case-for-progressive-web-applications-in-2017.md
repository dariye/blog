---
title: A Case for Progressive Web Applications in 2017
date: 04/20/2017
summary: If your company is or is planning on doing business in emerging markets, architecting your web applications for performance through progressive enhancements is one easy way to drastically improve accessibility, retention, and user experience.
---

> TL;DR — If your company is or is planning on doing business in emerging markets, architecting your web applications for performance through progressive enhancements is one easy way to drastically improve accessibility, retention, and user experience.

*Disclaimer: It so happens that not only people in emerging markets suffer from poor networks.*


Starting last year, Progressive Web Applications (PWAs) became a really hot topic all over the interweb, as you can see [here](https://addyosmani.com/blog/getting-started-with-progressive-web-apps/), [here](https://auth0.com/blog/introduction-to-progressive-apps-part-one/), [here](https://infrequently.org/2015/06/progressive-apps-escaping-tabs-without-losing-our-soul/), [here](https://www.smashingmagazine.com/2016/08/a-beginners-guide-to-progressive-web-apps/), or and [here](https://developers.google.com/web/progressive-web-apps/). Even your run of the mill [Google search](https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=progressive%20web%20applications) returns a staggering amount of chatter:


<div class="img-container full">
![Google Web Search for ‘progressive web applications’][google-search-result]
</div>
*Google Web Search for ‘progressive web applications’*


This three part series is here to tell you why they’re a good thing. In part 1, we’ll talk about why progressive enhancements are good for you, your customers, and your business. Part 2 will walk through a simple example of how to add progressive enhancements to an existing application. Finally, part 3 will test it out using another shiny tool from Google–[Lighthouse](https://developers.google.com/web/tools/lighthouse/)–which will explain why.

And finally, I’m going to wrap it all up by putting it in the context of emerging markets.


## PART 1: PWAs ARE GOOD FOR YOU


### First things first: What is a PWA?


A PWA is built by baking performance early into the development through progressive enhancements. There’s a great summary of it in [Pete LePage’s](https://developers.google.com/web/resources/contributors#petelepage) piece ‘[Your First Progressive Web App](https://developers.google.com/web/fundamentals/getting-started/codelabs/your-first-pwapp/):’

- **Progressive** because it works for every user on any browser.
- **Responsive** because it fits any form factor.
- **Connectivity Independent** because it is designed with the worst network in mind.
- **App-Like** as a result of the separation of functionality from application content.
- **Fresh** due to the service workers updating content in the background.
- **Safe** because it is served over HTTPS.
- **Discoverable** since search engines are better able to identify it as an application.
- **Re-engageable** through features like push notifications.
- **Installable** on a user’s home screen for easy access.
- **Linkable** through a simple url.


***PRCAFSDRIL*** makes a horrible acronym, but … the point still stands.


While all of these are great for any application, the first three — progressive, responsive, and connectivity independent — are the most important: they’re what I’d summarize as the ‘accessibility aspects’ of these applications. Accessibility, in this case, basically means that any user on any device on any network can access and interact with a web application with no noticeable difference in experience. For emerging markets, this means that you and your team should be focused on configuring the application for 2G.

Google has been advocating for PWAs for a few years — in fact, last year, at their [2016 Chrome Developer Summit](https://developer.chrome.com/devsummit/), progressive enhancements the focus of most discussions. And rightfully so — PWAs are slated to have a huge impact. For example, the adoption of features like Service Workers by browser vendors will drastically improve how applications are consumed on mobile devices around the world. And since PWAs can provide a much richer browsing experience, the end goal seems to be one that inches towards completely blurring the line between a web app and native application experience.

> Performance goals should be for the least of your customers.
>
> – Someone at Chrome Dev Summit 2016


## Building for the next billion in mind


According to [Forbes](https://www.forbes.com/pictures/eglg45gdjd/emerging-market-growth-beats-us-2/#29cf546c53aa), over 70% of world economic growth over the next few years will be from emerging markets. And emerging markets are natively built on mobile. This gives PWAs a great opportunity to be a fundamental driving force of growth.

**Accessibility**, as I pointed out earlier, is one of the core tenets of a PWA. Even with the proliferation of the mobile cellular networks over the last few years (as shown in diagram), accessibility continues to remain an issue especially for internet users, particularly ones in emerging markets who are still remanded to slower networks than the developed world.


<div class="img-container full">
![Mobile network coverage and evolving technologies. Source: ITU][mobile-network-coverage-and-evolving-technologies]
</div>
*Mobile network coverage and evolving technologies. Source: ITU*


The unique accessibility problem PWAs can be configured to solve is a combination of factors including cost (2x the monthly cost of a person in a developed country), device fragmentation (mostly an Android issue), and availability of better network options (i.e 3G, 4G, or LTE).

The high cost of cellular data forces mobile users to access applications that consume as little data as possible (which is why WhatsApp is so popular in emerging markets) and for much shorter durations. I’ve personally experienced this while browsing Facebook in Nigeria: I ran through over 3GB of data in two days.


<div class="img-container full">
![Fixed- and mobile-broadband prices, $$$. Source: ITU][fixed-and-mobile-broadband-pricing]
</div>
*Fixed- and mobile-broadband prices, $$$. Source: ITU*


However, the cost of cellular data will continue to drop as the technology matures and as more suppliers compete for market dominance in emerging markets.

The next big issue is the fragmentation of the mobile device market, which is especially true in Android-dominated emerging markets:


<div class="img-container full">
![Global Smartphone Sales. Source: Gartner][global-smartphone-sales]
</div>
*Global Smartphone Sales. Source: Gartner*


For Android, fragmentation has been a bittersweet pill. On one hand, consumers have access to thousands of devices, in all shapes and sizes, price tiers, colors, different performance, whatever. On the other, developers and product teams are stuck in a awkward place, unsure of which screen size or performance benchmark to build their applications against.

Here’s an example of just how big the problem is:


<div class="img-container full">
![Android OS Fragmentation by Device. Source: OpenSignal][opensignal-fragmentation-report]
</div>
*Android OS Fragmentation by Device. Source: OpenSignal*


*Note: The chart above shows only device fragmentation and doesn’t include OS, screen size, brand, etc.* [*Read more*](https://opensignal.com/reports/2015/08/android-fragmentation/)*.*


Finally, as developing countries become prime investment destinations, infrastructure will continue to be built out to support better networks like LTE and other alternate forms of access to the web services like [Safaricom’s](https://www.safaricom.co.ke/personal/m-pesa) MPESA platform and for new comers like [Flutterwave](https://www.flutterwave.com/).

Even with these existing problems, there’s still an immense opportunity for growth. Three quarters of people have still yet to come online, and the platforms, services and apps they adopt are going to be the ones that are best configured for their network and device realities.


<div class="img-container full">
![Global Internet Usage. Source: ITU][global-internet-usage]
</div>
*Global Internet Usage. Source: ITU*


**What does all these mean for you, your customers, and your business?**


There’s a chance for you to capture some of that 3.9 billion person market. It’s really a tremendous opportunity, and anything short of that would be a gross understatement.

Fast growing online retail giants like [Konga.com](http://konga.com) and [Jumia](http://jumia.co) (an [Andela](http://www.andela.com) partner), both operating in Africa, see the opportunity: they’re taking a proactive, optimistic approach by leveraging the current and future capabilities of PWAs to better serve their potential billions. So far, they’ve reaped significant rewards by baking progressive enhancements into their web applications: Konga was able to cut data usage by 92%, allowing users to do more with their current data plans. And Jumia was able to increase conversions significantly by 7.85% (vs 4.5% for native app). That makes a big difference.

If you’re a CEO/CTO, product owner, or product manager, you’ll only find yourself at considerable ease when you know all of your customers have been served. And as a customer, you’ll have better access to your favorite web applications with a richer browsing experience. It’s a win-win for both parties, especially the enterprising business who can drastically increase conversion, reduce bounce rate, increase their visibility and assure better data security.

*Google has some more compelling* [*case studies*](https://developers.google.com/web/showcase/) *as to why progressive enhancement should be the roadmap of your web application.*

At [Andela](http://andela.com/what-we-do) we’re constantly mulling over how to best empower the next generation of technology leaders. As we expand through the continent of Africa, finding some of the most talented individuals, we’re always looking for better ways to reach them. Luckily I’m part of the team–Marketing Tech–rebuilding our website to adhere to the accessibility standards progressive web apps are setting and of which I’ve made a case for in this post.


In the next chapter, Part 2, we’ll build a simple progressive web application.
Here’s a quick teaser:


You can quickly begin progressive enhancements by:


1.Adding [W3C compliant Web App Manifest](https://w3c.github.io/manifest/) file.


Example `manifest.json` file in root directory (preferably)

```javascript
{
  "name": "Andela",
  "short_name": "Andela",
  "description": "Extend your engineering team with world-class developers",
  "lang": "en-US",
  "start_url": "/",
  "display": "standalone",
  "orientation": "portrait",
  "theme_color": "#3359DF",
  "icons": [
    {
      "src": "static/homescreen-128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "static/homescreen-144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "static/homescreen-152.png",
      "sizes": "152x152",
      "type": "image/png"
    },
    {
      "src": "static/homescreen-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "static/homescreen-64.png",
      "sizes": "64x64",
      "type": "image/png"
    }
  ],
  "background_color": "#3359DF"
}

```


2.Installing a Service Worker


Example [service worker registration](https://developers.google.com/web/fundamentals/instant-and-offline/service-worker/registration) in a `sw.js` file (you can name this whatever you like)


```javascript
  //register service worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/sw.js').then(function(registration) {
        console.log('SW Status: Registered Successfully');
      }).catch(function(error) {

      });
    });
  }
```

3.Serving your web application over HTTPS

Adios for now. See you in Part II.


- *Note: Browser support: Chief among the reason people shy away from progressive enhancement is the [lack of support by some major browser vendors](https://jakearchibald.github.io/isserviceworkerready/), Apple being the elephant in the room.*
- *Acknowledgement: Huge thanks to my colleagues on the Andela Marketing & Technology teams for reviewing and proofreading this piece.*
- *Crossposting: You can find this piece on [Andela's Medium Technology Publication](https://medium.com/technology-learning/a-case-for-progressive-web-applications-in-2017-dafb5957e783)*

[google-search-result]: ../img/google-search-result.png "Google Web Search for ‘progressive web applications’"
[mobile-network-coverage-and-evolving-technologies]: ../img/mobile-network-coverage-and-evolving-technologies.png "Mobile network coverage and evolving technologies. Source: ITU"
[global-smartphone-sales]: ../img/global-smartphone-sales.png "Global Smartphone Sales. Source: Gartner"
[fixed-and-mobile-broadband-pricing]: ../img/fixed-and-mobile-broadband-pricing.png "Fixed- and mobile-broadband prices, $$$. Source: ITU"
[opensignal-fragmentation-report]: ../img/opensignal-fragmentation-report.png "Android OS Fragmentation by Device. Source: OpenSignal"
[global-internet-usage]: ../img/global-internet-usage.png "Global Internet Coverage. Source: ITU"
