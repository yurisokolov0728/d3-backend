module.exports.getCompanies = async (req, res) => {
  try {
    res.status(200).json([
      {
        ticker_id: 'ARAMCO AB',
        ticker_name: 'saudi arabian oil co',
        industry_group: 'Oil&Gas',
      },
      {
        ticker_id: 'AMZN US',
        ticker_name: 'amazon.com inc',
        industry_group: 'Internet',
      },
    ])
  } catch (e) {
    const code = res.statusCode ? res.statusCode : 422
    return res.status(code).json({
      errors: { body: [e.message] },
    })
  }
}

module.exports.getCompany = async (req, res) => {
  try {
    const { company_id } = req.params
    res.status(200).json({
      data_type: 'company',
      data: [
        {
          data_type: 'peer map',
          data: [
            {
              ticker_name: 'apple inc',
              ticker_market_cap: 1971700000000,
              signals_average: -0.491,
              signals_count: 8443,
            },
            {
              ticker_name: 'tata consultancy svcs ltd',
              ticker_market_cap: 133855000000,
              signals_average: 0.822,
              signals_count: 2049,
            },
            {
              ticker_name: 'infosys ltd',
              ticker_market_cap: 62566227968,
              signals_average: 0.114,
              signals_count: 1929,
            },
            {
              ticker_name: 'intl business machines corp',
              ticker_market_cap: 105065000000,
              signals_average: 0.417,
              signals_count: 3516,
            },
            {
              ticker_name: 'accenture plc',
              ticker_market_cap: 151468000000,
              signals_average: 0.857,
              signals_count: 1598,
            },
          ],
        },
        {
          data_type: 'sector performance',
          data: [
            {
              topic: 'environmental',
              subtopic: 'environmental opportunities',
              company_sentiment: 0.89,
              nearest_neighbours_sentiment: 0.824,
            },
            {
              topic: 'environmental',
              subtopic: 'natural resources',
              company_sentiment: 0.309,
              nearest_neighbours_sentiment: 0.744,
            },
            {
              topic: 'social',
              subtopic: 'product liability',
              company_sentiment: -0.523,
              nearest_neighbours_sentiment: 0.379,
            },
            {
              topic: 'governance',
              subtopic: 'corporate behaviour',
              company_sentiment: -0.831,
              nearest_neighbours_sentiment: 0.202,
            },
            {
              topic: 'governance',
              subtopic: 'corporate governance',
              company_sentiment: -0.439,
              nearest_neighbours_sentiment: 0.497,
            },
            {
              topic: 'environmental',
              subtopic: 'climate change',
              company_sentiment: 0.697,
              nearest_neighbours_sentiment: 0.835,
            },
            {
              topic: 'environmental',
              subtopic: 'pollution and waste',
              company_sentiment: -0.012,
              nearest_neighbours_sentiment: 0.64,
            },
            {
              topic: 'social',
              subtopic: 'social opportunities',
              company_sentiment: -0.108,
              nearest_neighbours_sentiment: 0.733,
            },
            {
              topic: 'social',
              subtopic: 'human capital',
              company_sentiment: -0.289,
              nearest_neighbours_sentiment: 0.674,
            },
          ],
        },
      ],
      ticker: 'AAPL US',
    })
  } catch (e) {
    return res.status(422).json({
      errors: { body: ['Could not get', e.message] },
    })
  }
}

// data_time_from     "yy-mm-dd"
// data_time_to       "yy-mm-dd"
module.exports.getCompanyPeerMap = async (req, res) => {
  try {
    const { company_id } = req.params

    switch (company_id) {
      case 'ARAMCO AB':
        res.status(200).json({
          data_type: 'peer map',
          data: [
            {
              ticker_name: 'apple inc',
              ticker_market_cap: 1971700000000,
              signals_average: -0.491,
              signals_count: 8443,
            },
            {
              ticker_name: 'tata consultancy svcs ltd',
              ticker_market_cap: 133855000000,
              signals_average: 0.822,
              signals_count: 2049,
            },
            {
              ticker_name: 'infosys ltd',
              ticker_market_cap: 62566227968,
              signals_average: 0.114,
              signals_count: 1929,
            },
            {
              ticker_name: 'intl business machines corp',
              ticker_market_cap: 105065000000,
              signals_average: 0.417,
              signals_count: 3516,
            },
            {
              ticker_name: 'accenture plc',
              ticker_market_cap: 151468000000,
              signals_average: 0.857,
              signals_count: 1598,
            },
          ],
        })
        break
      case 'AMZN US':
        res.status(200).json({
          data_type: 'peer map',
          data: [
            {
              ticker_name: 'apple inc',
              ticker_market_cap: 1971700000000,
              signals_average: -0.191,
              signals_count: 8443,
            },
            {
              ticker_name: 'tata consultancy svcs ltd',
              ticker_market_cap: 133855000000,
              signals_average: 0.857,
              signals_count: 2049,
            },
            {
              ticker_name: 'infosys ltd',
              ticker_market_cap: 62566227968,
              signals_average: 0.114,
              signals_count: 1929,
            },
            {
              ticker_name: 'intl business machines corp',
              ticker_market_cap: 105065000000,
              signals_average: 0.917,
              signals_count: 3516,
            },
            {
              ticker_name: 'accenture plc',
              ticker_market_cap: 151468000000,
              signals_average: 0.557,
              signals_count: 1598,
            },
          ],
        })
        break
    }
  } catch (e) {
    return res.status(422).json({
      errors: { body: ['Could not get', e.message] },
    })
  }
}

module.exports.getCompanySectorPerformance = async (req, res) => {
  try {
    const { company_id } = req.params
    res.status(200).json({
      data_type: 'sector performance',
      data: [
        {
          topic: 'environmental',
          subtopic: 'environmental opportunities',
          company_sentiment: 0.89,
          nearest_neighbours_sentiment: 0.824,
        },
        {
          topic: 'environmental',
          subtopic: 'natural resources',
          company_sentiment: 0.309,
          nearest_neighbours_sentiment: 0.744,
        },
        {
          topic: 'social',
          subtopic: 'product liability',
          company_sentiment: -0.523,
          nearest_neighbours_sentiment: 0.379,
        },
        {
          topic: 'governance',
          subtopic: 'corporate behaviour',
          company_sentiment: -0.831,
          nearest_neighbours_sentiment: 0.202,
        },
        {
          topic: 'governance',
          subtopic: 'corporate governance',
          company_sentiment: -0.439,
          nearest_neighbours_sentiment: 0.497,
        },
        {
          topic: 'environmental',
          subtopic: 'climate change',
          company_sentiment: 0.697,
          nearest_neighbours_sentiment: 0.835,
        },
        {
          topic: 'environmental',
          subtopic: 'pollution and waste',
          company_sentiment: -0.012,
          nearest_neighbours_sentiment: 0.64,
        },
        {
          topic: 'social',
          subtopic: 'social opportunities',
          company_sentiment: -0.108,
          nearest_neighbours_sentiment: 0.733,
        },
        {
          topic: 'social',
          subtopic: 'human capital',
          company_sentiment: -0.289,
          nearest_neighbours_sentiment: 0.674,
        },
      ],
    })
  } catch (e) {
    return res.status(422).json({
      errors: { body: ['Could not get', e.message] },
    })
  }
}

module.exports.getCompanySentimentScores = async (req, res) => {
  try {
    const { company_id } = req.params
    res.status(200).json({
      data_type: 'sentiment scores',
      data: [
        {
          sentiment_current: -0.593,
          sentiment_last: -0.6,
          sentiment_yoy: 0.006,
        },
      ],
    })
  } catch (e) {
    return res.status(422).json({
      errors: { body: ['Could not get', e.message] },
    })
  }
}

// top integer
// bottom integer
module.exports.getCompanyHeadlines = async (req, res) => {
  try {
    const { company_id } = req.params
    res.status(200).json({
      data_type: 'headlines',
      data: [
        {
          data_type: 'top headlines',
          data: [
            {
              headline:
                'Getting Tired of Your Original Apple Accessories or Want to Try a New One?',
              datetime: '2021-11-27T07:27:54',
              link:
                'https://medium.com/macoclock/getting-tired-of-your-original-apple-accessories-or-want-to-try-a-new-one-64709cd79233',
              headline_sentiment: 0.998720745245616,
            },
            {
              headline:
                "Apple's 2030 roadmap to carbon neutrality focuses on product design, supplier base",
              datetime: '2020-07-23T07:00:00',
              link:
                'https://www.supplychaindive.com/news/apple-carbon-neutrality-2030-climate-change/582188/',
              headline_sentiment: 0.998700224064492,
            },
            {
              headline: 'Apple 2021 Second Quarter Financial Reports',
              datetime: '2021-04-29T07:00:00',
              link:
                'https://hypebeast.com/2021/4/apple-q2-2021-financial-report',
              headline_sentiment: 0.998673588037491,
            },
          ],
        },
        {
          data_type: 'bottom headlines',
          data: [
            {
              headline:
                'Competition Commission of India orders probe against Apple over alleged ‘unfair’ App Store policies',
              datetime: '2022-01-01T02:12:16',
              link:
                'https://www.hindustantimes.com/business/competition-commission-of-india-orders-probe-against-apple-over-alleged-unfair-app-store-policies-101641002862409-amp.html',
              headline_sentiment: -0.997326891869307,
            },
            {
              headline:
                "Poland opens investigation into Apple's App Tracking Transparency feature",
              datetime: '2021-12-15T11:01:45',
              link:
                'https://www.imore.com/poland-opens-investigation-apples-app-tracking-transparency-feature',
              headline_sentiment: -0.997297659516335,
            },
            {
              headline:
                'FDIC fines Apple Bank $12.5M for AML compliance failures',
              datetime: '2021-02-02T08:00:00',
              link:
                'https://www.complianceweek.com/regulatory-enforcement/fdic-fines-apple-bank-125m-for-aml-compliance-failures/30002.article',
              headline_sentiment: -0.997182822227478,
            },
          ],
        },
      ],
    })
  } catch (e) {
    return res.status(422).json({
      errors: { body: ['Could not get', e.message] },
    })
  }
}

// top integer
// bottom integer
module.exports.getCompanySectorPerformers = async (req, res) => {
  try {
    const { company_id } = req.params
    res.status(200).json({
      data_type: 'sector performers',
      data: [
        {
          data_type: 'top performers',
          data: [
            {
              '300352 CH': 0.998670682311058,
              '3665 TT': 0.998648464679718,
              'LOXLEY TB': 0.998647613184793,
            },
          ],
        },
        {
          data_type: 'bottom performers',
          data: [
            {
              '1973 JP': -0.99479843378067,
              '200725 CH': -0.995766706764698,
              'PACT SS': -0.996495544910431,
            },
          ],
        },
      ],
    })
  } catch (e) {
    return res.status(422).json({
      errors: { body: ['Could not get', e.message] },
    })
  }
}

module.exports.getCompanyTopics = async (req, res) => {
  try {
    const { company_id } = req.params
    res.status(200).json(['environmental', 'governance', 'social'])
  } catch (e) {
    return res.status(422).json({
      errors: { body: ['Could not get', e.message] },
    })
  }
}

module.exports.getCompanySubTopics = async (req, res) => {
  try {
    const { company_id } = req.params
    res
      .status(200)
      .json([
        'climate change',
        'corporate behaviour',
        'corporate governance',
        'environmental opportunities',
        'human capital',
        'natural resources',
        'pollution and waste',
        'product liability',
        'social opportunities',
      ])
  } catch (e) {
    return res.status(422).json({
      errors: { body: ['Could not get', e.message] },
    })
  }
}
module.exports.getCompanyCategories = async (req, res) => {
  try {
    const { company_id } = req.params
    res
      .status(200)
      .json([
        'activists',
        'affordable and clean energy',
        'anti-competitive',
        'biodiversity',
        'business ethics',
        'carbon emissions',
        'chemical safety',
        'clean water and sanitation',
        'climate action',
        'code-of-conduct',
        'controversial',
        'corporate behaviour',
        'corporate governance',
        'corporate ownership',
        'corporate pay',
        'corruption',
        'data security',
        'deception',
        'defamation',
        'deforestation',
        'discrimination',
        'economic growth',
        'electronic waste',
        'emissions',
        'environmental',
        'environmental impact',
        'environmental opportunities',
        'exploit',
        'firearms',
        'gambling',
        'governance',
        'green energy',
        'greenhouse gas',
        'health and safety',
        'hostility',
        'human capital',
        'human rights',
        'intellectual property',
        'kick back',
        'labour standards',
        'launder',
        'life on land',
        'natural disasters',
        'natural resources',
        'negligence',
        'no poverty',
        'partnerships for the goals',
        'peace, justice and strong institutions',
        'political risk',
        'pollution and waste',
        'product liability',
        'product safety',
        'profit',
        'prosecution',
        'protests',
        'quality education',
        'recycling',
        'responsible consumption and production',
        'social',
        'staff health-care',
        'supply chain',
        'sustainable cities and communities',
        'tax transparency',
        'toxic emissions',
        'zero hunger',
      ])
  } catch (e) {
    return res.status(422).json({
      errors: { body: ['Could not get', e.message] },
    })
  }
}

module.exports.getCompanyTopicSubtopics = async (req, res) => {
  try {
    const { company_id, topic_name } = req.params
    let r
    if (topic_name === 'environmental') {
      r = [
        'climate change',
        'environmental opportunities',
        'natural resources',
        'pollution and waste',
      ]
    } else if (topic_name === 'governance') {
      r = [
        'climate change 1',
        'environmental opportunities 1',
        'natural resources 1',
        'pollution and waste 1',
      ]
    } else {
      r = [
        'climate change 2',
        'environmental opportunities 2',
        'natural resources 2',
        'pollution and waste 2',
      ]
    }
    res.status(200).json(r)
  } catch (e) {
    return res.status(422).json({
      errors: { body: ['Could not get', e.message] },
    })
  }
}

module.exports.getCompanyTopicCategories = async (req, res) => {
  try {
    const { company_id } = req.params
    res
      .status(200)
      .json([
        'affordable and clean energy',
        'biodiversity',
        'carbon emissions',
        'clean water and sanitation',
        'climate action',
        'deforestation',
        'electronic waste',
        'emissions',
        'environmental',
        'environmental impact',
        'environmental opportunities',
        'green energy',
        'greenhouse gas',
        'life on land',
        'natural disasters',
        'natural resources',
        'pollution and waste',
        'recycling',
        'responsible consumption and production',
        'sustainable cities and communities',
        'toxic emissions',
      ])
  } catch (e) {
    return res.status(422).json({
      errors: { body: ['Could not get', e.message] },
    })
  }
}

module.exports.getCompanyTopicSubtopicCategories = async (req, res) => {
  try {
    const { company_id } = req.params
    res
      .status(200)
      .json([
        'affordable and clean energy',
        'carbon emissions',
        'clean water and sanitation',
        'climate action',
        'emissions',
        'environmental',
        'environmental impact',
        'greenhouse gas',
        'natural disasters',
      ])
  } catch (e) {
    return res.status(422).json({
      errors: { body: ['Could not get', e.message] },
    })
  }
}

module.exports.getCompanySubtopicCategories = async (req, res) => {
  try {
    const { company_id } = req.params
    res
      .status(200)
      .json([
        'affordable and clean energy',
        'carbon emissions',
        'clean water and sanitation',
        'climate action',
        'emissions',
        'environmental',
        'environmental impact',
        'greenhouse gas',
        'natural disasters',
      ])
  } catch (e) {
    return res.status(422).json({
      errors: { body: ['Could not get', e.message] },
    })
  }
}

// topics string
// subtopics string
// last_days integer
// limit integer
module.exports.getCompanyNews = async (req, res) => {
  try {
    const { company_id } = req.params
    res.status(200).json({
      data_type: 'news',
      data: [
        {
          headline: 'German competition watchdog launches Apple investigation',
          sentence:
            "REUTERS/Dado Ruvic/Illustration\n\nBERLIN, June 21 (Reuters) - Apple (AAPL.O) became the fourth major digital company to face closer scrutiny from Germany's antitrust watchdog on Monday after the cartel office said it had launched an investigation into whether the tech giant is exploiting its market position.",
          datetime: '2021-06-21T07:00:00',
          link:
            'https://www.reuters.com/technology/german-antitrust-watchdog-launches-proceedings-against-apple-2021-06-21/',
          source: 'Reuters',
        },
        {
          headline:
            'Apple Stock News: US Regulatory Threats Are Weighing On AAPL Stock',
          sentence:
            'As the U.S. government looks to rein in Big Tech, antitrust and regulatory concerns have been weighing on Apple stock.',
          datetime: '2021-06-21T07:00:00',
          link:
            'https://www.investors.com/news/technology/apple-stock-news-us-regulatory-threats-are-weighing-on-aapl-stock/',
          source: "Investor's Business Daily",
        },
        {
          headline:
            "Closure looms for Hong Kong's pro-democracy Apple Daily after raids",
          sentence:
            "The jewel in Lai's Next Digital (0282.HK) media business, Apple Daily is a popular tabloid founded 26 years ago that mixes pro-democracy discourse with celebrity gossip and critical reports on China's Communist leaders.",
          datetime: '2021-06-21T07:00:00',
          link:
            'https://www.reuters.com/world/asia-pacific/hong-kongs-apple-daily-board-may-stop-publication-this-week-memo-2021-06-21/',
          source: 'Reuters',
        },
        {
          headline:
            "Closure looms for Hong Kong's pro-democracy Apple Daily after raids",
          sentence:
            'Editor-in-Chief Ryan Law and Chief Executive Officer Cheung Kim-hung were charged with conspiracy to commit collusion with a foreign country and denied bail on Saturday.',
          datetime: '2021-06-21T07:00:00',
          link:
            'https://www.reuters.com/world/asia-pacific/hong-kongs-apple-daily-board-may-stop-publication-this-week-memo-2021-06-21/',
          source: 'Reuters',
        },
      ],
    })
  } catch (e) {
    return res.status(422).json({
      errors: { body: ['Could not get', e.message] },
    })
  }
}

// topics string
// subtopics string
// last_days integer
module.exports.getCompanyScores = async (req, res) => {
  try {
    const { company_id } = req.params
    res.status(200).json({
      data_type: 'scores',
      data: [
        {
          ticker_id: 'ARAMCO AB',
          ticker_name: 'apple inc',
          score: 0.36005422040268,
        },
        {
          ticker_id: 'AMZN US',
          ticker_name: 'apple inc',
          score: -0.56005422040268,
        },
      ],
    })
  } catch (e) {
    return res.status(422).json({
      errors: { body: ['Could not get', e.message] },
    })
  }
}

module.exports.getCompanyCumulativeScores = async (req, res) => {
  console.log('problem')
  try {
    const { company_id } = req.params
    switch (company_id) {
      case 'ARAMCO AB':
        res.status(200).json([
          {
            topic: 'environmental',
            topic_datas: [
              {
                ticker_id: 'AAPL US',
                day: '2019-10-01',
                score: 0.991516351699829,
                cumulative_score: 0.991516351699829,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-10-03',
                score: -0.983162999153137,
                cumulative_score: 0.00835335254669201,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-10-09',
                score: 0.59426829133715,
                cumulative_score: 0.602621643883842,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-10-11',
                score: 0.809589445590973,
                cumulative_score: 1.41221108947481,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-10-14',
                score: 0.997989535331726,
                cumulative_score: 2.41020062480654,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-10-17',
                score: 0.991599917411804,
                cumulative_score: 3.40180054221834,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-10-25',
                score: 0.900664041439692,
                cumulative_score: 4.30246458365804,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-02',
                score: -0.976625561714172,
                cumulative_score: 3.32583902194386,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-08',
                score: 0.50483050942421,
                cumulative_score: 3.83066953136807,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-12',
                score: -0.983162999153137,
                cumulative_score: 2.84750653221494,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-15',
                score: 0.998643100261688,
                cumulative_score: 3.84614963247663,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-19',
                score: 0.997212946414948,
                cumulative_score: 4.84336257889157,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-20',
                score: 0.997969124998365,
                cumulative_score: 5.84133170388994,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-24',
                score: -0.911016225814819,
                cumulative_score: 4.93031547807512,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-25',
                score: 0.998623132705688,
                cumulative_score: 5.92893861078081,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-26',
                score: 0.99506676197052,
                cumulative_score: 6.92400537275133,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-01',
                score: 0.99686324596405,
                cumulative_score: 7.92086861871538,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-02',
                score: -0.996840476989746,
                cumulative_score: 6.92402814172563,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-04',
                score: 0.993328471978505,
                cumulative_score: 7.91735661370414,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-05',
                score: 0.997821539640427,
                cumulative_score: 8.91517815334456,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-06',
                score: 0.99347597360611,
                cumulative_score: 9.90865412695067,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-12',
                score: 0.988054931163788,
                cumulative_score: 10.8967090581145,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-16',
                score: -0.997202038764954,
                cumulative_score: 9.89950701934951,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-01-03',
                score: 0.988144854704539,
                cumulative_score: 10.887651874054,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-01-15',
                score: 0.00386720895767206,
                cumulative_score: 10.8915190830117,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-01-17',
                score: 0.992020264267921,
                cumulative_score: 11.8835393472796,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-01-27',
                score: 0.998399913311005,
                cumulative_score: 12.8819392605906,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-02-24',
                score: -0.985572814941406,
                cumulative_score: 11.8963664456492,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-02-28',
                score: 0.997829806804657,
                cumulative_score: 12.8941962524539,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-03-03',
                score: -0.913052618503571,
                cumulative_score: 11.9811436339503,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-03-06',
                score: -0.906897604465485,
                cumulative_score: 11.0742460294848,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-03-21',
                score: 0.997157692909241,
                cumulative_score: 12.0714037223941,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-03-27',
                score: -0.952573224902153,
                cumulative_score: 11.1188304974919,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-04-07',
                score: 0.997147768735886,
                cumulative_score: 12.1159782662278,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-04-10',
                score: 0.998095452785492,
                cumulative_score: 13.1140737190133,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-04-24',
                score: 0.997432053089142,
                cumulative_score: 14.1115057721024,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-05-25',
                score: -0.971314966678619,
                cumulative_score: 13.1401908054238,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-06-03',
                score: 0.99225240945816,
                cumulative_score: 14.132443214882,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-06-18',
                score: -0.993460893630981,
                cumulative_score: 13.138982321251,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-06-22',
                score: 0.95579053958257,
                cumulative_score: 14.0947728608336,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-06-26',
                score: 0.998119533061981,
                cumulative_score: 15.0928923938956,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-06-30',
                score: 0.998465716838837,
                cumulative_score: 16.0913581107344,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-07-21',
                score: 0.99482582560901,
                cumulative_score: 17.0861839363434,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-07-23',
                score: 0.998694612429692,
                cumulative_score: 18.0848785487731,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-07-24',
                score: 0.998295264111625,
                cumulative_score: 19.0831738128847,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-07-27',
                score: 0.986626341938972,
                cumulative_score: 20.0698001548237,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-07-29',
                score: 0.997264823317528,
                cumulative_score: 21.0670649781412,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-07-31',
                score: 0.996940160791079,
                cumulative_score: 22.0640051389323,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-08-04',
                score: 0.99468058347702,
                cumulative_score: 23.0586857224093,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-08-13',
                score: 0.998632073402405,
                cumulative_score: 24.0573177958117,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-08-14',
                score: 0.995045781135559,
                cumulative_score: 25.0523635769473,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-09-03',
                score: 0.861027300357819,
                cumulative_score: 25.9133908773051,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-09-11',
                score: -0.980208337306976,
                cumulative_score: 24.9331825399981,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-09-15',
                score: 0.989967584609985,
                cumulative_score: 25.9231501246081,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-09-19',
                score: -0.982024908065796,
                cumulative_score: 24.9411252165423,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-09-30',
                score: 0.998207539319992,
                cumulative_score: 25.9393327558623,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-10-05',
                score: 0.996839761734009,
                cumulative_score: 26.9361725175963,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-10-08',
                score: -0.991259038448334,
                cumulative_score: 25.944913479148,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-10-12',
                score: 0.998126775026321,
                cumulative_score: 26.9430402541743,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-10-13',
                score: 0.997998674710592,
                cumulative_score: 27.9410389288849,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-10-18',
                score: 0.994014084339142,
                cumulative_score: 28.935053013224,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-10-20',
                score: 0.994694709777832,
                cumulative_score: 29.9297477230019,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-10-27',
                score: 0.844213371093457,
                cumulative_score: 30.7739610940953,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-10-28',
                score: 0.940767228603363,
                cumulative_score: 31.7147283226987,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-11-10',
                score: 0.997409164905548,
                cumulative_score: 32.7121374876042,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-11-14',
                score: 0.997871845960617,
                cumulative_score: 33.7100093335649,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-11-26',
                score: 0.604177737236023,
                cumulative_score: 34.3141870708009,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-12-04',
                score: 0.992402881383896,
                cumulative_score: 35.3065899521848,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-12-08',
                score: 0.998537302017212,
                cumulative_score: 36.305127254202,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-12-12',
                score: 0.998617211977641,
                cumulative_score: 37.3037444661796,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-12-16',
                score: 0.99409806728363,
                cumulative_score: 38.2978425334633,
              },
            ],
          },
          {
            topic: 'governance',
            topic_datas: [
              {
                ticker_id: 'AAPL US',
                day: '2019-10-01',
                score: 0.991516351699829,
                cumulative_score: 0.991516351699829,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-10-03',
                score: -0.983162999153137,
                cumulative_score: -0.10835335254669201,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-10-09',
                score: 0.59426829133715,
                cumulative_score: -0.102621643883842,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-10-11',
                score: 0.809589445590973,
                cumulative_score: -0.01221108947481,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-10-14',
                score: 0.997989535331726,
                cumulative_score: -0.41020062480654,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-10-17',
                score: 0.991599917411804,
                cumulative_score: -1.40180054221834,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-10-25',
                score: 0.900664041439692,
                cumulative_score: -1.30246458365804,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-02',
                score: -0.976625561714172,
                cumulative_score: -1.32583902194386,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-08',
                score: 0.50483050942421,
                cumulative_score: -1.83066953136807,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-12',
                score: -0.983162999153137,
                cumulative_score: -1.84750653221494,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-15',
                score: 0.998643100261688,
                cumulative_score: -1.84614963247663,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-19',
                score: 0.997212946414948,
                cumulative_score: -1.84336257889157,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-20',
                score: 0.997969124998365,
                cumulative_score: -1.84133170388994,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-24',
                score: -0.911016225814819,
                cumulative_score: -1.93031547807512,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-25',
                score: 0.998623132705688,
                cumulative_score: -2.92893861078081,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-26',
                score: 0.99506676197052,
                cumulative_score: -2.92400537275133,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-01',
                score: 0.99686324596405,
                cumulative_score: -1.92086861871538,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-02',
                score: -0.996840476989746,
                cumulative_score: -1.92402814172563,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-04',
                score: 0.993328471978505,
                cumulative_score: -1.91735661370414,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-05',
                score: 0.997821539640427,
                cumulative_score: -1.91517815334456,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-06',
                score: 0.99347597360611,
                cumulative_score: -1.90865412695067,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-12',
                score: 0.988054931163788,
                cumulative_score: -1.8967090581145,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-16',
                score: -0.997202038764954,
                cumulative_score: -1.89950701934951,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-01-03',
                score: 0.988144854704539,
                cumulative_score: -1.887651874054,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-01-15',
                score: 0.00386720895767206,
                cumulative_score: -0.8915190830117,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-01-17',
                score: 0.992020264267921,
                cumulative_score: -1.8835393472796,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-01-27',
                score: 0.998399913311005,
                cumulative_score: -2.8819392605906,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-02-24',
                score: -0.985572814941406,
                cumulative_score: -1.8963664456492,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-02-28',
                score: 0.997829806804657,
                cumulative_score: -2.8941962524539,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-03-03',
                score: -0.913052618503571,
                cumulative_score: -1.9811436339503,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-03-06',
                score: -0.906897604465485,
                cumulative_score: -1.0742460294848,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-03-21',
                score: 0.997157692909241,
                cumulative_score: -2.0714037223941,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-03-27',
                score: -0.952573224902153,
                cumulative_score: -1.1188304974919,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-04-07',
                score: 0.997147768735886,
                cumulative_score: -2.1159782662278,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-04-10',
                score: 0.998095452785492,
                cumulative_score: -3.1140737190133,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-04-24',
                score: 0.997432053089142,
                cumulative_score: -4.1115057721024,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-05-25',
                score: -0.971314966678619,
                cumulative_score: -3.1401908054238,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-06-03',
                score: 0.99225240945816,
                cumulative_score: -4.132443214882,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-06-18',
                score: -0.993460893630981,
                cumulative_score: -3.138982321251,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-06-22',
                score: 0.95579053958257,
                cumulative_score: -4.0947728608336,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-06-26',
                score: 0.998119533061981,
                cumulative_score: -5.0928923938956,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-06-30',
                score: 0.998465716838837,
                cumulative_score: -6.0913581107344,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-07-21',
                score: 0.99482582560901,
                cumulative_score: -7.0861839363434,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-07-23',
                score: 0.998694612429692,
                cumulative_score: -8.0848785487731,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-07-24',
                score: 0.998295264111625,
                cumulative_score: -9.0831738128847,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-07-27',
                score: 0.986626341938972,
                cumulative_score: -10.0698001548237,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-07-29',
                score: 0.997264823317528,
                cumulative_score: -11.0670649781412,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-07-31',
                score: 0.996940160791079,
                cumulative_score: -12.0640051389323,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-08-04',
                score: 0.99468058347702,
                cumulative_score: -13.0586857224093,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-08-13',
                score: 0.998632073402405,
                cumulative_score: -14.0573177958117,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-08-14',
                score: 0.995045781135559,
                cumulative_score: -15.0523635769473,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-09-03',
                score: 0.861027300357819,
                cumulative_score: -15.9133908773051,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-09-11',
                score: -0.980208337306976,
                cumulative_score: -14.9331825399981,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-09-15',
                score: 0.989967584609985,
                cumulative_score: -15.9231501246081,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-09-19',
                score: -0.982024908065796,
                cumulative_score: -14.9411252165423,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-09-30',
                score: 0.998207539319992,
                cumulative_score: -15.9393327558623,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-10-05',
                score: 0.996839761734009,
                cumulative_score: -16.9361725175963,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-10-08',
                score: -0.991259038448334,
                cumulative_score: -15.944913479148,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-10-12',
                score: 0.998126775026321,
                cumulative_score: -16.9430402541743,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-10-13',
                score: 0.997998674710592,
                cumulative_score: -17.9410389288849,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-10-18',
                score: 0.994014084339142,
                cumulative_score: -18.935053013224,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-10-20',
                score: 0.994694709777832,
                cumulative_score: -19.9297477230019,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-10-27',
                score: 0.844213371093457,
                cumulative_score: -20.7739610940953,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-10-28',
                score: 0.940767228603363,
                cumulative_score: -21.7147283226987,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-11-10',
                score: 0.997409164905548,
                cumulative_score: -22.7121374876042,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-11-14',
                score: 0.997871845960617,
                cumulative_score: -23.7100093335649,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-11-26',
                score: 0.604177737236023,
                cumulative_score: -24.3141870708009,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-12-04',
                score: 0.992402881383896,
                cumulative_score: -25.3065899521848,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-12-08',
                score: 0.998537302017212,
                cumulative_score: -26.305127254202,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-12-12',
                score: 0.998617211977641,
                cumulative_score: -27.3037444661796,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-12-16',
                score: 0.99409806728363,
                cumulative_score: -28.2978425334633,
              },
            ],
          },
          {
            topic: 'social',
            topic_datas: [
              {
                ticker_id: 'AAPL US',
                day: '2019-10-01',
                score: 0.991516351699829,
                cumulative_score: 0.991516351699829,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-10-03',
                score: -0.983162999153137,
                cumulative_score: -0.00835335254669201,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-10-09',
                score: 0.59426829133715,
                cumulative_score: -0.602621643883842,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-10-11',
                score: 0.809589445590973,
                cumulative_score: -1.41221108947481,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-10-14',
                score: 0.997989535331726,
                cumulative_score: -1.41020062480654,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-10-17',
                score: 0.991599917411804,
                cumulative_score: -2.40180054221834,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-10-25',
                score: 0.900664041439692,
                cumulative_score: -4.30246458365804,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-02',
                score: -0.976625561714172,
                cumulative_score: -3.32583902194386,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-08',
                score: 0.50483050942421,
                cumulative_score: -3.83066953136807,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-12',
                score: -0.983162999153137,
                cumulative_score: -2.84750653221494,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-15',
                score: 0.998643100261688,
                cumulative_score: -3.84614963247663,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-19',
                score: 0.997212946414948,
                cumulative_score: -4.84336257889157,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-20',
                score: 0.997969124998365,
                cumulative_score: -5.84133170388994,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-24',
                score: -0.911016225814819,
                cumulative_score: -4.93031547807512,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-25',
                score: 0.998623132705688,
                cumulative_score: -5.92893861078081,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-26',
                score: 0.99506676197052,
                cumulative_score: -6.92400537275133,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-01',
                score: 0.99686324596405,
                cumulative_score: -7.92086861871538,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-02',
                score: -0.996840476989746,
                cumulative_score: -6.92402814172563,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-04',
                score: 0.993328471978505,
                cumulative_score: -7.91735661370414,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-05',
                score: 0.997821539640427,
                cumulative_score: -8.91517815334456,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-06',
                score: 0.99347597360611,
                cumulative_score: -9.90865412695067,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-12',
                score: 0.988054931163788,
                cumulative_score: -10.8967090581145,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-16',
                score: -0.997202038764954,
                cumulative_score: -9.89950701934951,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-01-03',
                score: 0.988144854704539,
                cumulative_score: -10.887651874054,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-01-15',
                score: 0.00386720895767206,
                cumulative_score: -10.8915190830117,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-01-17',
                score: 0.992020264267921,
                cumulative_score: -11.8835393472796,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-01-27',
                score: 0.998399913311005,
                cumulative_score: -12.8819392605906,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-02-24',
                score: -0.985572814941406,
                cumulative_score: -11.8963664456492,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-02-28',
                score: 0.997829806804657,
                cumulative_score: -12.8941962524539,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-03-03',
                score: -0.913052618503571,
                cumulative_score: -11.9811436339503,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-03-06',
                score: -0.906897604465485,
                cumulative_score: -11.0742460294848,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-03-21',
                score: 0.997157692909241,
                cumulative_score: -12.0714037223941,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-03-27',
                score: -0.952573224902153,
                cumulative_score: -11.1188304974919,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-04-07',
                score: 0.997147768735886,
                cumulative_score: -12.1159782662278,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-04-10',
                score: 0.998095452785492,
                cumulative_score: -13.1140737190133,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-04-24',
                score: 0.997432053089142,
                cumulative_score: -14.1115057721024,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-05-25',
                score: -0.971314966678619,
                cumulative_score: -13.1401908054238,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-06-03',
                score: 0.99225240945816,
                cumulative_score: -14.132443214882,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-06-18',
                score: -0.993460893630981,
                cumulative_score: -13.138982321251,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-06-22',
                score: 0.95579053958257,
                cumulative_score: -14.0947728608336,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-06-26',
                score: 0.998119533061981,
                cumulative_score: -15.0928923938956,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-06-30',
                score: 0.998465716838837,
                cumulative_score: -16.0913581107344,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-07-21',
                score: 0.99482582560901,
                cumulative_score: -17.0861839363434,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-07-23',
                score: 0.998694612429692,
                cumulative_score: -18.0848785487731,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-07-24',
                score: 0.998295264111625,
                cumulative_score: -19.0831738128847,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-07-27',
                score: 0.986626341938972,
                cumulative_score: -20.0698001548237,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-07-29',
                score: 0.997264823317528,
                cumulative_score: -21.0670649781412,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-07-31',
                score: 0.996940160791079,
                cumulative_score: -22.0640051389323,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-08-04',
                score: 0.99468058347702,
                cumulative_score: -23.0586857224093,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-08-13',
                score: 0.998632073402405,
                cumulative_score: -24.0573177958117,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-08-14',
                score: 0.995045781135559,
                cumulative_score: -25.0523635769473,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-09-03',
                score: 0.861027300357819,
                cumulative_score: -25.9133908773051,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-09-11',
                score: -0.980208337306976,
                cumulative_score: -24.9331825399981,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-09-15',
                score: 0.989967584609985,
                cumulative_score: -25.9231501246081,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-09-19',
                score: -0.982024908065796,
                cumulative_score: -24.9411252165423,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-09-30',
                score: 0.998207539319992,
                cumulative_score: -25.9393327558623,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-10-05',
                score: 0.996839761734009,
                cumulative_score: -26.9361725175963,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-10-08',
                score: -0.991259038448334,
                cumulative_score: -25.944913479148,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-10-12',
                score: 0.998126775026321,
                cumulative_score: -26.9430402541743,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-10-13',
                score: 0.997998674710592,
                cumulative_score: -27.9410389288849,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-10-18',
                score: 0.994014084339142,
                cumulative_score: -28.935053013224,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-10-20',
                score: 0.994694709777832,
                cumulative_score: -29.9297477230019,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-10-27',
                score: 0.844213371093457,
                cumulative_score: -30.7739610940953,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-10-28',
                score: 0.940767228603363,
                cumulative_score: -31.7147283226987,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-11-10',
                score: 0.997409164905548,
                cumulative_score: -32.7121374876042,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-11-14',
                score: 0.997871845960617,
                cumulative_score: -33.7100093335649,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-11-26',
                score: 0.604177737236023,
                cumulative_score: -34.3141870708009,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-12-04',
                score: 0.992402881383896,
                cumulative_score: -35.3065899521848,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-12-08',
                score: 0.998537302017212,
                cumulative_score: -36.305127254202,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-12-12',
                score: 0.998617211977641,
                cumulative_score: -37.3037444661796,
              },
            ],
          },
        ])
        break
      case 'AMZN US':
        res.status(200).json([
          {
            topic: 'environmental',
            topic_datas: [
              {
                ticker_id: 'AAPL US',
                day: '2019-10-01',
                score: 0.991516351699829,
                cumulative_score: 0.991516351699829,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-10-03',
                score: -0.983162999153137,
                cumulative_score: -0.00835335254669201,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-10-09',
                score: 0.59426829133715,
                cumulative_score: -0.602621643883842,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-10-11',
                score: 0.809589445590973,
                cumulative_score: -1.41221108947481,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-10-14',
                score: 0.997989535331726,
                cumulative_score: -1.41020062480654,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-10-17',
                score: 0.991599917411804,
                cumulative_score: -2.40180054221834,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-10-25',
                score: 0.900664041439692,
                cumulative_score: -4.30246458365804,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-02',
                score: -0.976625561714172,
                cumulative_score: -3.32583902194386,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-08',
                score: 0.50483050942421,
                cumulative_score: -3.83066953136807,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-12',
                score: -0.983162999153137,
                cumulative_score: -2.84750653221494,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-15',
                score: 0.998643100261688,
                cumulative_score: -3.84614963247663,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-19',
                score: 0.997212946414948,
                cumulative_score: -4.84336257889157,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-20',
                score: 0.997969124998365,
                cumulative_score: -5.84133170388994,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-24',
                score: -0.911016225814819,
                cumulative_score: -4.93031547807512,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-25',
                score: 0.998623132705688,
                cumulative_score: -5.92893861078081,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-26',
                score: 0.99506676197052,
                cumulative_score: -6.92400537275133,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-01',
                score: 0.99686324596405,
                cumulative_score: -7.92086861871538,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-02',
                score: -0.996840476989746,
                cumulative_score: -6.92402814172563,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-04',
                score: 0.993328471978505,
                cumulative_score: -7.91735661370414,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-05',
                score: 0.997821539640427,
                cumulative_score: -8.91517815334456,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-06',
                score: 0.99347597360611,
                cumulative_score: -9.90865412695067,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-12',
                score: 0.988054931163788,
                cumulative_score: -10.8967090581145,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-16',
                score: -0.997202038764954,
                cumulative_score: -9.89950701934951,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-01-03',
                score: 0.988144854704539,
                cumulative_score: -10.887651874054,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-01-15',
                score: 0.00386720895767206,
                cumulative_score: -10.8915190830117,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-01-17',
                score: 0.992020264267921,
                cumulative_score: -11.8835393472796,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-01-27',
                score: 0.998399913311005,
                cumulative_score: -12.8819392605906,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-02-24',
                score: -0.985572814941406,
                cumulative_score: -11.8963664456492,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-02-28',
                score: 0.997829806804657,
                cumulative_score: -12.8941962524539,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-03-03',
                score: -0.913052618503571,
                cumulative_score: -11.9811436339503,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-03-06',
                score: -0.906897604465485,
                cumulative_score: -11.0742460294848,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-03-21',
                score: 0.997157692909241,
                cumulative_score: -12.0714037223941,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-03-27',
                score: -0.952573224902153,
                cumulative_score: -11.1188304974919,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-04-07',
                score: 0.997147768735886,
                cumulative_score: -12.1159782662278,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-04-10',
                score: 0.998095452785492,
                cumulative_score: -13.1140737190133,
              },
            ],
          },
          {
            topic: 'governance',
            topic_datas: [
              {
                ticker_id: 'AAPL US',
                day: '2019-10-01',
                score: 0.991516351699829,
                cumulative_score: 0.991516351699829,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-10-03',
                score: -0.983162999153137,
                cumulative_score: 0.00835335254669201,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-10-09',
                score: 0.59426829133715,
                cumulative_score: 0.602621643883842,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-10-11',
                score: 0.809589445590973,
                cumulative_score: 1.41221108947481,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-10-14',
                score: 0.997989535331726,
                cumulative_score: 2.41020062480654,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-10-17',
                score: 0.991599917411804,
                cumulative_score: 3.40180054221834,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-10-25',
                score: 0.900664041439692,
                cumulative_score: 4.30246458365804,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-02',
                score: -0.976625561714172,
                cumulative_score: 3.32583902194386,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-08',
                score: 0.50483050942421,
                cumulative_score: 3.83066953136807,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-12',
                score: -0.983162999153137,
                cumulative_score: 2.84750653221494,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-15',
                score: 0.998643100261688,
                cumulative_score: 3.84614963247663,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-19',
                score: 0.997212946414948,
                cumulative_score: 4.84336257889157,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-20',
                score: 0.997969124998365,
                cumulative_score: 5.84133170388994,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-24',
                score: -0.911016225814819,
                cumulative_score: 4.93031547807512,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-25',
                score: 0.998623132705688,
                cumulative_score: 5.92893861078081,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-26',
                score: 0.99506676197052,
                cumulative_score: 6.92400537275133,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-01',
                score: 0.99686324596405,
                cumulative_score: 7.92086861871538,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-02',
                score: -0.996840476989746,
                cumulative_score: 6.92402814172563,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-04',
                score: 0.993328471978505,
                cumulative_score: 7.91735661370414,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-05',
                score: 0.997821539640427,
                cumulative_score: 8.91517815334456,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-06',
                score: 0.99347597360611,
                cumulative_score: 9.90865412695067,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-12',
                score: 0.988054931163788,
                cumulative_score: 10.8967090581145,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-16',
                score: -0.997202038764954,
                cumulative_score: 9.89950701934951,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-01-03',
                score: 0.988144854704539,
                cumulative_score: 10.887651874054,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-01-15',
                score: 0.00386720895767206,
                cumulative_score: 10.8915190830117,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-01-17',
                score: 0.992020264267921,
                cumulative_score: 11.8835393472796,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-01-27',
                score: 0.998399913311005,
                cumulative_score: 12.8819392605906,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-02-24',
                score: -0.985572814941406,
                cumulative_score: 11.8963664456492,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-02-28',
                score: 0.997829806804657,
                cumulative_score: 12.8941962524539,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-03-03',
                score: -0.913052618503571,
                cumulative_score: 11.9811436339503,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-03-06',
                score: -0.906897604465485,
                cumulative_score: 11.0742460294848,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-03-21',
                score: 0.997157692909241,
                cumulative_score: 12.0714037223941,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-03-27',
                score: -0.952573224902153,
                cumulative_score: 11.1188304974919,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-04-07',
                score: 0.997147768735886,
                cumulative_score: 12.1159782662278,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-04-10',
                score: 0.998095452785492,
                cumulative_score: 13.1140737190133,
              },
            ],
          },
          {
            topic: 'social',
            topic_datas: [
              {
                ticker_id: 'AAPL US',
                day: '2019-10-01',
                score: 0.991516351699829,
                cumulative_score: 0.991516351699829,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-10-03',
                score: -0.983162999153137,
                cumulative_score: -0.10835335254669201,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-10-09',
                score: 0.59426829133715,
                cumulative_score: -0.102621643883842,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-10-11',
                score: 0.809589445590973,
                cumulative_score: -0.01221108947481,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-10-14',
                score: 0.997989535331726,
                cumulative_score: -0.41020062480654,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-10-17',
                score: 0.991599917411804,
                cumulative_score: -1.40180054221834,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-10-25',
                score: 0.900664041439692,
                cumulative_score: -1.30246458365804,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-02',
                score: -0.976625561714172,
                cumulative_score: -1.32583902194386,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-08',
                score: 0.50483050942421,
                cumulative_score: -1.83066953136807,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-12',
                score: -0.983162999153137,
                cumulative_score: -1.84750653221494,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-15',
                score: 0.998643100261688,
                cumulative_score: -1.84614963247663,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-19',
                score: 0.997212946414948,
                cumulative_score: -1.84336257889157,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-20',
                score: 0.997969124998365,
                cumulative_score: -1.84133170388994,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-24',
                score: -0.911016225814819,
                cumulative_score: -1.93031547807512,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-25',
                score: 0.998623132705688,
                cumulative_score: -2.92893861078081,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-11-26',
                score: 0.99506676197052,
                cumulative_score: -2.92400537275133,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-01',
                score: 0.99686324596405,
                cumulative_score: -1.92086861871538,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-02',
                score: -0.996840476989746,
                cumulative_score: -1.92402814172563,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-04',
                score: 0.993328471978505,
                cumulative_score: -1.91735661370414,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-05',
                score: 0.997821539640427,
                cumulative_score: -1.91517815334456,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-06',
                score: 0.99347597360611,
                cumulative_score: -1.90865412695067,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-12',
                score: 0.988054931163788,
                cumulative_score: -1.8967090581145,
              },
              {
                ticker_id: 'AAPL US',
                day: '2019-12-16',
                score: -0.997202038764954,
                cumulative_score: -1.89950701934951,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-01-03',
                score: 0.988144854704539,
                cumulative_score: -1.887651874054,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-01-15',
                score: 0.00386720895767206,
                cumulative_score: -0.8915190830117,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-01-17',
                score: 0.992020264267921,
                cumulative_score: -1.8835393472796,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-01-27',
                score: 0.998399913311005,
                cumulative_score: -2.8819392605906,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-02-24',
                score: -0.985572814941406,
                cumulative_score: -1.8963664456492,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-02-28',
                score: 0.997829806804657,
                cumulative_score: -2.8941962524539,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-03-03',
                score: -0.913052618503571,
                cumulative_score: -1.9811436339503,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-03-06',
                score: -0.906897604465485,
                cumulative_score: -1.0742460294848,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-03-21',
                score: 0.997157692909241,
                cumulative_score: -2.0714037223941,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-03-27',
                score: -0.952573224902153,
                cumulative_score: -1.1188304974919,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-04-07',
                score: 0.997147768735886,
                cumulative_score: -2.1159782662278,
              },
              {
                ticker_id: 'AAPL US',
                day: '2020-04-10',
                score: 0.998095452785492,
                cumulative_score: -3.1140737190133,
              },
            ],
          },
        ])
        break
    }
  } catch (e) {
    return res.status(422).json({
      errors: { body: ['Could not get', e.message] },
    })
  }
}
