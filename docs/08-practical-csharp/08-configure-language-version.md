# Configure Language Version

Language version configuration controls which C# syntax and compiler features a project is allowed to use. This is practical because teams need consistency, compatibility, and predictable builds across machines and environments.

## Why it matters

New C# features are exciting, but a project should not adopt them carelessly. The chosen language version affects:

- which syntax compiles
- whether preview features are allowed
- how consistent builds are across machines
- whether the codebase stays compatible with its intended environment

## The usual default

In most modern .NET projects, the SDK chooses a default language version that matches the target framework and compiler support.

That default is often the safest option because it keeps the project aligned with the environment it targets.

## Setting the version explicitly

If a project needs a specific language version, it can be set in the project file.

```xml
<PropertyGroup>
  <LangVersion>14.0</LangVersion>
</PropertyGroup>
```

Preview features can be enabled like this:

```xml
<PropertyGroup>
  <LangVersion>preview</LangVersion>
</PropertyGroup>
```

## A mental model

```mermaid
flowchart LR
    A["Project file settings"] --> B["Compiler language rules"]
    B --> C["Allowed syntax and features"]
```

This is why language version configuration is a build and tooling topic, not only a syntax topic.

## When explicit configuration helps

Explicit language version configuration can help when:

- a team wants reproducible behavior across machines
- a codebase must stay on a known supported feature set
- preview features are being tested deliberately
- build pipelines need predictable compiler behavior

## Why `latest` is risky

Using `latest` sounds convenient, but it can produce inconsistent results if developers or build agents have different SDK versions installed.

That makes `latest` a weak choice for reproducible long-lived projects.

An explicit version or the SDK default is usually more stable.

## Preview needs caution

Preview features are useful for experimentation, early learning, and deliberate evaluation. But they may change before final release.

That means `preview` should usually be chosen intentionally, not casually, especially in production-oriented repositories.

## Practical guidance

Good language version decisions usually consider:

- target framework compatibility
- team build consistency
- whether the feature need is real or only curiosity
- whether preview adoption is acceptable for the project

## Common beginner mistakes

- Forcing a newer language version without understanding the target environment.
- Using `latest` and expecting perfectly reproducible builds.
- Enabling preview features casually in stable long-lived code.
- Treating language version as unrelated to build and tooling behavior.

## Summary

- language version settings control what C# syntax the compiler accepts
- the SDK default is often the safest choice
- explicit versions help with consistency and predictability
- `preview` should be used deliberately
- language version configuration is a practical project-level decision, not only a syntax preference

## Practice

Inspect a project file and decide whether it should rely on the SDK default language version or specify one explicitly.

As a second exercise, explain why `preview` and `latest` solve different problems and why one may be much riskier than the other in a team project.
