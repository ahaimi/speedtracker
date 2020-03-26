export default {
  metrics: {
    breakdown: {
      html: {
        bytes: {
          color: [115, 210, 222],
          name: "HTML",
          transform: value => (value / 1000).toFixed(1),
          unit: "KB"
        },
        requests: {
          color: [115, 210, 222],
          name: "HTML"
        }
      },
      js: {
        bytes: {
          color: [251, 177, 60],
          name: "JS",
          transform: value => (value / 1000).toFixed(1),
          unit: "KB"
        },
        requests: {
          color: [251, 177, 60],
          name: "JS"
        }
      },
      css: {
        bytes: {
          color: [33, 131, 128],
          name: "CSS",
          transform: value => (value / 1000).toFixed(1),
          unit: "KB"
        },
        requests: {
          color: [33, 131, 128],
          name: "CSS"
        }
      },
      image: {
        bytes: {
          color: [143, 45, 86],
          name: "Images",
          transform: value => (value / 1000).toFixed(1),
          unit: "KB"
        },
        requests: {
          color: [143, 45, 86],
          name: "Images"
        }
      },
      flash: {
        bytes: {
          color: [33, 41, 92],
          name: "Flash",
          transform: value => (value / 1000).toFixed(1),
          unit: "KB"
        },
        requests: {
          color: [33, 41, 92],
          name: "Flash"
        }
      },
      font: {
        bytes: {
          color: [216, 17, 89],
          name: "Fonts",
          transform: value => (value / 1000).toFixed(1),
          unit: "KB"
        },
        requests: {
          color: [216, 17, 89],
          name: "Fonts"
        }
      },
      other: {
        bytes: {
          color: [231, 143, 142],
          name: "Other",
          transform: value => (value / 1000).toFixed(1),
          unit: "KB"
        },
        requests: {
          color: [231, 143, 142],
          name: "Other"
        }
      }
    },
    loadTime: {
      color: [195, 125, 146],
      name: "Load time",
      transform: value => (value / 1000).toFixed(2),
      unit: "s",
      description:
        "The time between the initial request and the browser load event"
    },
    render: {
      color: [173, 138, 100],
      name: "Start render",
      transform: value => (value / 1000).toFixed(2),
      unit: "s",
      description:
        "The Start Render time is measured as the time from the start of the initial navigation until the first non-white content is painted to the browser display."
    },
    firstPaint: {
      color: [173, 138, 100],
      name: "First paint",
      transform: value => (value / 1000).toFixed(2),
      unit: "s",
      description:
        "The time until the browser starts painting content to the screen"
    },
    fullyLoaded: {
      color: [3, 181, 170],
      name: "Fully loaded",
      transform: value => (value / 1000).toFixed(2),
      unit: "s",
      description:
        "The time at which the page has fully finished loading content"
    },
    SpeedIndex: {
      color: [87, 117, 144],
      name: "SpeedIndex",
      transform: value => (value / 1000).toFixed(2),
      unit: "s",
      description:
        "A custom metric introduced by WebPageTest to rate pages based on how quickly they are visually populated"
    },
    TTFB: {
      color: [80, 48, 71],
      name: "Back-end (TTFB)",
      transform: value => (value / 1000).toFixed(2),
      unit: "s",
      description:
        "The time it takes for the server to respond with the first byte of the response"
    },
    "first-cpu-idle": {
      color: [247, 81, 61],
      name: "First CPU Idle",
      transform: value => (value / 1000).toFixed(2),
      unit: "s",
      description:
        "This is a newer metric and reports when the page is first expected to be usable and will respond to input quickly (with the possibility of slow responses as more content loads)."
    },
    visualComplete: {
      color: [243, 202, 64],
      name: "Visually complete",
      transform: value => (value / 1000).toFixed(2),
      unit: "s",
      description:
        "The time it takes for the page to be fully visually populated"
    },
    domInteractive: {
      color: [243, 202, 64],
      name: "DOM Interactive",
      transform: value => (value / 1000).toFixed(2),
      unit: "s",
      description:
        "The time it takes for the page to be fully visually populated"
    },
    lighthousePerformance: {
      color: [51, 103, 214],
      name: "Lighthouse performance score",
      unit: "",
      description:
        "Performance score defined by Google Lighthouse. 0 to 49 (slow), 50 to 89 (average), 90 to 100 (fast)."
    },
    lighthouse: {
      color: [121, 180, 115],
      name: "Lighthouse PWA score",
      unit: "",
      description:
        "Progressive Web App (PWA) score defined by Google Lighthouse."
    },
    dns_end: {
      color: [250, 121, 33],
      name: "DNS lookup",
      unit: "ms",
      description: "The time it takes to perform the DNS lookup."
    },
    connect_ms: {
      color: [229, 89, 52],
      name: "Initial connection",
      unit: "ms",
      description:
        "Time it took to establish a connection, including TCP handshakes/retries and negotiating a SSL."
    },
    ssl_ms: {
      color: [155, 197, 61],
      name: "SSL handshake",
      unit: "ms",
      description: "Time spent completing a SSL handshake."
    },
    ttfb_ms: {
      color: [253, 231, 76],
      name: "Server response",
      unit: "ms",
      description:
        "Waiting (TTFB), latency of a round trip to the server in addition to the time spent waiting for the server to deliver the response."
    },
    download_ms: {
      color: [91, 192, 235],
      name: "Content download",
      unit: "ms",
      description: "Time spent receiving the response data."
    }
  },

  periods: ["day", "week", "month", "year"]
};
