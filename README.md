# Hi, I'm Tony Nguyen

Open-source contributor focused on JVM applications, AI agent tooling, and reliable infrastructure.

I work on reproducible bug reports, focused fixes, and integration tests that exercise real protocols.

## Selected upstream contributions

| Project | Contribution | Status |
| --- | --- | --- |
| [Floci](https://github.com/floci-io/floci) | [Restore Terraform RDS and RabbitMQ compatibility](https://github.com/floci-io/floci/pull/1951) | Merged |
| [Embabel Agent](https://github.com/embabel/embabel-agent) | [In-process MCP protocol end-to-end tests](https://github.com/embabel/embabel-agent/pull/1832) | Merged |
| [Embabel Agent](https://github.com/embabel/embabel-agent) | [Correct RAG result ordering, metadata, and latency logging](https://github.com/embabel/embabel-agent/pull/1812) | Merged |
| [Embabel Agent](https://github.com/embabel/embabel-agent) | [Unit coverage for uncovered utilities](https://github.com/embabel/embabel-agent/pull/1823) | Merged |

[Browse my public pull requests](https://github.com/pulls?q=is%3Apr+author%3Atuannx+is%3Apublic)

## Project spotlight

### [Spring Boot Multi-Region HA](https://github.com/tuannx/spring-boot-multi-region-ha)

A local development stack for exploring AWS multi-region high availability with Spring Boot, Docker Compose, an Aurora Global Database mock, and AWS JDBC Driver failover.

## Exploring

[Optional embedded SQS for JVM integration tests](https://github.com/floci-io/floci/pull/3617) — a draft Floci prototype that reuses its SQS engine and handlers, with per-instance in-memory state and an explicit lifecycle. Test-focused; not a production runtime or a replacement for Docker/standalone.

## How I contribute

- Reproduce the problem and make the expected behavior explicit.
- Keep patches focused, with regression tests and clear compatibility boundaries.
- Validate integrations end to end and document what remains unverified.

Interested in JVM testing, AWS compatibility, or AI agent tooling? Collaborate with me through the issues and pull requests linked above.

---

<sub>Layout inspired by [DenverCoder1's profile](https://github.com/DenverCoder1/DenverCoder1), adapted into a lightweight, contribution-first README. Contribution statuses last checked on September 14, 2026.</sub>
