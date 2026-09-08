# Foundation

This is an independent public snapshot of a locally adapted design-system workspace. The neutral foundation came from [Wanted Montage](https://github.com/wanteddev/montage-web) at revision `bfced87f96dfb21c8ea80074c551b64b9ed1530b`. It is not an official Wanted release and does not automatically track upstream updates.

The current source, types, tests, and `docs/data` are the operational reference. Generic tokens, components, accessibility behavior, and typography belong in the foundation. Put consumer-specific branding, business vocabulary, and page recipes in a consumer extension. Reusable local composition guidance lives in `guidance/`; optional generic components live in `packages/local-design`.

## License

Preserve `LICENSE.md`, including Wanted Lab's copyright notice, when redistributing substantial portions. See `THIRD_PARTY_NOTICES.md` for scope and `MODIFICATIONS.md` for changes. Attribution does not imply endorsement.

## Package identifiers and consumers

`@wanteddev/*` names remain internal `workspace:*` identifiers to preserve source imports. All included packages are private and must not be published under that scope. Install and build locally; there is no dependency on Wanted's private registry.

The snapshot excludes private brand extensions, the original documentation web application, MCP server, and separate content/deck template repositories. A slide or social-content workflow may reuse the visual foundation, but this repository does not supply those templates or export a PPT file.

## Decision precedence

Use current local code and platform/design guidance, then component types and tests, then consumer extension decisions. An extension may narrow usage but must not silently redefine a foundation token or component.
