# Tony Nguyen

**Senior Software Engineer** · Java · AWS · reliable systems at scale · tools for AI coding agents

**Worked with:** John Deere · AWS · SpaceX Starlink (Deere partnership) · Mobifone · open source at Apple, Stanford and CMU

[![LinkedIn](https://img.shields.io/badge/LinkedIn-tonynguyenit-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/tonynguyenit/)
[![Interactive CV](https://img.shields.io/badge/Interactive%20CV-ask%20my%20profile-2EA44F?logo=githubpages&logoColor=white)](https://tuannx.github.io/tuannx/)
[![Public PRs](https://img.shields.io/badge/GitHub-public%20pull%20requests-181717?logo=github)](https://github.com/pulls?q=is%3Apr+author%3Atuannx+is%3Apublic)

---

## Best projects

### Multi-region disaster recovery on AWS
**John Deere · 2026** · Team program; I built the equipment platform part.<br>
**Shipped:** three services running in a second AWS region.

- Aurora Global Database with AWS JDBC Wrapper failover, switchover scripts and AWS FIS fault tests
- Cross-region SQS listener takeover in a shared library, used by two services
- Valkey global datastore, Route 53 health checks, blue/green deploys with rollback gates

**Links:** [Public failover lab](https://github.com/tuannx/spring-boot-multi-region-ha) · [Live architecture map](https://tuannx.github.io/spring-boot-multi-region-ha/) · [Floci #6213: Aurora via AWS JDBC Wrapper](https://github.com/floci-io/floci/pull/6213)

### Faster platform for connected machines
**John Deere · 2025–2026** · Java 21, Hibernate, Valkey, Datadog.<br>
**Shipped (Jul to Oct 2026):** API p95 latency about 43% lower while traffic grew about 34%. CPU per request about 50% lower. Message service memory use 34% → 15%, with 23% fewer tasks. Gains coincided with the changes below (monthly data).

- Statement-count test harness; removed redundant `DISTINCT` and Hibernate hydration
- Authorization cache on Valkey, per-type `JAXBContext` cache (about 15% less CPU at fix time), JVM heap sized from task memory
- All services moved to JDK 21, JUnit 5 and AWS SDK v2
- 2024: Deere x SpaceX Starlink integration, the satellite registration flow for connected machines

**Public context** (employer code is private): Deere calls [Operations Center "the digital twin of a farm"](https://www.deere.com/en-us/our-company/technology-and-innovation/connectivity-and-digitalization) and aims for 1.5M connected machines and 500M engaged acres by 2026 · [Deere and SpaceX Starlink partnership (2024)](https://www.deere.com/en-us/john-deere-news/john-deere-partnership-with-spacex)

### Arcade Agent
**Architecture analysis library and MCP server for AI coding agents.**<br>
**Shipped:** 23 merged pull requests and a GitHub Action.

- Kotlin parser, polyglot parsing, async analysis pipeline
- Architecture drift reports in CI

**Links:** [Repository](https://github.com/arcade-agent/arcade-agent) · [My merged PRs](https://github.com/arcade-agent/arcade-agent/pulls?q=is%3Apr+author%3Atuannx+is%3Amerged) · [arcade-agent-action](https://github.com/tuannx/arcade-agent-action)

### AI Kit Data
**NHTSA VIN decoder at the edge, on Cloudflare Workers.**<br>
**Shipped:** live API, drop-in compatible with NHTSA vPIC, listed in public-apis.

- Decodes VINs offline; every data update is checked against the live API and NHTSA's own SQL
- OpenAPI 3.1 docs, batch page, `llms.txt` for agents

**Links:** [Live site](https://data.ai-kit.net) · [API docs](https://data.ai-kit.net/docs) · [Repository](https://github.com/AIKitLLC/nhtsa-edge-api) · [public-apis #8432](https://github.com/public-apis/public-apis/pull/8432)

---

## Merged upstream

| Project | Pull request | What changed |
| --- | --- | --- |
| Apple ServiceTalk | [#3677](https://github.com/apple/servicetalk/pull/3677) | Keep demand across overlapping subscription switches |
| Stanford CoreNLP | [#1530](https://github.com/stanfordnlp/CoreNLP/pull/1530) | Remove an O(N²) copy in `CoreLabel` and `ArrayCoreMap` |
| CMU Fray | [#446](https://github.com/cmu-pasta/fray/pull/446) | Report replay schedule divergence |
| Embabel Agent | [#1832](https://github.com/embabel/embabel-agent/pull/1832), [#1812](https://github.com/embabel/embabel-agent/pull/1812) | MCP end-to-end tests, RAG ordering fix |
| Floci | [#1951](https://github.com/floci-io/floci/pull/1951), [#6213](https://github.com/floci-io/floci/pull/6213) | Terraform RDS, RabbitMQ and Aurora JDBC compatibility |
| Underthesea | [#1053](https://github.com/undertheseanlp/underthesea/pull/1053) | Lazy-load the translation backend |

---

## Experience

| Years | Where | Role |
| --- | --- | --- |
| 2021 – now | John Deere | Senior Software Engineer (via Volt, 2021–2022) |
| 2011 – 2017 | FTL JSC | Deputy CEO and tech lead · high-transaction services for Mobifone |
| 2008 – 2020 | FTL, eXo Platform, Tuan123, Xvolve | Full-stack and tech lead |

**Stack:** Java 21 · Spring Boot · Hibernate · AWS (Aurora, SQS, SNS, ECS, Route 53) · Terraform · Datadog · OpenTelemetry · React · TypeScript · MCP

**Education:** M.S. Computer Science, Maharishi University of Management (2022) · B.S., Hanoi University of Technology (2010)
