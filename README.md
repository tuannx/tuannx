# Hi, I'm Tony Nguyen

Senior Software Engineer. I build reliable Java and AWS systems at scale, and tools for AI coding agents.

[LinkedIn](https://www.linkedin.com/in/tonynguyenit/) · [My public pull requests](https://github.com/pulls?q=is%3Apr+author%3Atuannx+is%3Apublic)

## Best projects

### 1. Multi-region disaster recovery on AWS · John Deere · 2026

Team program; I implemented the equipment platform part.

- Aurora Global Database with AWS Advanced JDBC Wrapper failover, switchover scripts and AWS FIS fault tests.
- Cross-region SQS listener takeover in a shared library, now used by two services.
- Transaction-aware failover retry for safe reads only.
- Valkey global datastore, Route 53 health checks and latency routing, blue/green deploys with rollback gates.
- **Done:** three services run in a second AWS region.

Public lab of the same pattern: [Spring Boot Multi-Region HA](https://github.com/tuannx/spring-boot-multi-region-ha), a runnable failover demo with a [live architecture map](https://tuannx.github.io/spring-boot-multi-region-ha/). Upstream: [Floci #6213](https://github.com/floci-io/floci/pull/6213), Aurora PostgreSQL through the AWS JDBC Wrapper.

### 2. Performance of a high-traffic platform · John Deere · 2025–2026

- Added a statement-count test harness and removed extra queries (redundant `DISTINCT`, Hibernate hydration).
- Moved the authorization cache to Valkey. Cached `JAXBContext` per type.
- Sized the JVM heap from task memory instead of a fixed value.
- In the same months, API p95 latency, CPU per request and memory use went down while traffic grew (monthly data, not an A/B test).
- Upgraded all services to JDK 21, current Spring, JUnit 5 and AWS SDK v2.

### 3. AI agent tooling

- **[Arcade Agent](https://github.com/arcade-agent/arcade-agent):** architecture analysis library and MCP server for coding agents. [23 merged PRs](https://github.com/arcade-agent/arcade-agent/pulls?q=is%3Apr+author%3Atuannx+is%3Amerged): Kotlin parser, polyglot parsing, async pipeline, CI drift reports. I also built the [GitHub Action](https://github.com/tuannx/arcade-agent-action).
- **At John Deere:** an internal MCP server with LLM feedback logging and an architecture-regression gate in CI.

### 4. AI Kit Data · public US data at the edge

[nhtsa-edge-api](https://github.com/AIKitLLC/nhtsa-edge-api) decodes VINs offline on Cloudflare Workers. It is drop-in compatible with the NHTSA vPIC API. Each data update is checked against the live API and NHTSA's own SQL. Live at [data.ai-kit.net](https://data.ai-kit.net), listed in [public-apis](https://github.com/public-apis/public-apis/pull/8432).

## Open source (merged)

- [Apple ServiceTalk #3677](https://github.com/apple/servicetalk/pull/3677): keep demand across overlapping subscription switches.
- [Stanford CoreNLP #1530](https://github.com/stanfordnlp/CoreNLP/pull/1530): remove an O(N²) copy in `CoreLabel` and `ArrayCoreMap`.
- [CMU Fray #446](https://github.com/cmu-pasta/fray/pull/446): report replay schedule divergence.
- [Embabel Agent #1832](https://github.com/embabel/embabel-agent/pull/1832), [#1812](https://github.com/embabel/embabel-agent/pull/1812): MCP end-to-end tests, RAG ordering fix.
- [Floci #1951](https://github.com/floci-io/floci/pull/1951): Terraform RDS and RabbitMQ compatibility.
- [Underthesea #1053](https://github.com/undertheseanlp/underthesea/pull/1053): lazy-load the translation backend.

## Experience

- **2021 – now · John Deere:** Senior Software Engineer (via Volt, 2021–2022).
- **2011 – 2017 · FTL JSC:** Deputy CEO and tech lead. High-transaction services for Mobifone.
- **2008 – 2020:** full-stack and tech lead roles in banking, games and real estate (FTL, eXo Platform, Tuan123, Xvolve).

**Stack:** Java 21, Spring Boot, Hibernate, AWS (Aurora, SQS, SNS, ECS, Route 53), Terraform, Datadog, OpenTelemetry, React, TypeScript, MCP.

**Education:** M.S. Computer Science, Maharishi University of Management (2022) · B.S., Hanoi University of Technology (2010).
