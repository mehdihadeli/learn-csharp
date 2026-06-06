# Networking, URIs, and HttpClient

.NET networking APIs let applications identify remote resources, resolve hosts, open connections, and exchange HTTP messages. Even if you never work directly with sockets, you will almost certainly work with URIs and HTTP.

Original Microsoft Learn references: [System.Uri supplementary remarks](https://learn.microsoft.com/en-us/dotnet/fundamentals/runtime-libraries/system-uri) and [Guidelines for using HttpClient](https://learn.microsoft.com/en-us/dotnet/fundamentals/networking/http/httpclient-guidelines).

## A practical mental model

```mermaid
flowchart LR
    A["URI"] --> B["Identifies a resource"]
    B --> C["HttpClient"]
    C --> D["Request"]
    D --> E["Response"]
```

The URI tells you where the resource is. `HttpClient` is the higher-level tool that sends and receives HTTP messages.

## URIs are not the same as file paths

A URI identifies a resource with a scheme such as `https`, `http`, `ftp`, or `mailto`.

```csharp
Uri docsUri = new("https://learn.microsoft.com/dotnet/");

Console.WriteLine(docsUri.Scheme);
Console.WriteLine(docsUri.Host);
Console.WriteLine(docsUri.AbsolutePath);
```

This matters because applications often receive remote addresses as strings. Turning those strings into `Uri` values helps validate and inspect them more safely.

## `HttpClient` is the main HTTP API

`HttpClient` sends HTTP requests and receives responses.

```csharp
using HttpClient client = new();

string content = await client.GetStringAsync("https://example.com");
Console.WriteLine(content.Length);
```

That small example hides a lot of infrastructure, but it captures the main idea: create a request, await the response, and consume the result.

## Requests and responses

Sometimes you need more control than `GetStringAsync` provides.

```csharp
using HttpClient client = new();

HttpRequestMessage request = new(HttpMethod.Get, "https://api.example.com/products");
request.Headers.Add("User-Agent", "learn-csharp-sample");

using HttpResponseMessage response = await client.SendAsync(request);
response.EnsureSuccessStatusCode();

string json = await response.Content.ReadAsStringAsync();
```

This structure becomes important when you need headers, authentication, status-code inspection, or different HTTP methods.

## Why `HttpClient` lifetime matters

One of the most common mistakes in .NET networking is treating `HttpClient` as if it should be created and disposed for every single request in production code. In modern applications, reusing clients or using `IHttpClientFactory` is usually the better design.

That matters because network connections, handlers, DNS refresh behavior, and socket reuse all live below the surface.

The simple rule is:

- small samples can use a local `HttpClient`
- larger applications should usually centralize creation and configuration

## JSON over HTTP

HTTP and JSON often appear together.

```csharp
using System.Net.Http.Json;

using HttpClient client = new();

Product[]? products = await client.GetFromJsonAsync<Product[]>(
    "https://api.example.com/products");

public sealed record Product(int Id, string Name);
```

This is one of the most practical bridges between networking and the serialization material elsewhere in the repo.

## DNS, hosts, and ports

Networking also depends on address resolution and ports.

- DNS translates host names to network addresses
- ports distinguish services on the same machine
- schemes such as `https` imply expected protocol behavior

You do not need socket-level details to understand why `https://example.com:8443` differs from `https://example.com`.

## Timeouts and cancellation

Network operations may hang, fail, or take longer than expected. That makes cancellation and timeout handling part of normal design, not optional polish.

```csharp
using HttpClient client = new()
{
    Timeout = TimeSpan.FromSeconds(10)
};

using CancellationTokenSource cts = new(TimeSpan.FromSeconds(5));
string page = await client.GetStringAsync("https://example.com", cts.Token);
```

## Common mistakes

- Treating unvalidated strings as safe remote addresses.
- Ignoring non-success status codes.
- Creating networking code with no timeout or cancellation story.
- Recreating `HttpClient` blindly in larger production code.
- Mixing transport concerns and business logic in one large method.

## Practical guidance

- Parse and inspect remote addresses with `Uri` when possible.
- Use `HttpClient` for HTTP rather than lower-level APIs unless you have a specific reason.
- Handle status codes, cancellation, and timeouts deliberately.
- Use `IHttpClientFactory` or shared clients in application code that makes repeated requests.
- Keep serialization, networking, and domain logic separate enough to test and reason about them.

## Summary

- URIs identify resources and `HttpClient` exchanges HTTP messages with them
- request and response objects expose status, headers, and content explicitly
- networking code must account for failure, cancellation, and configuration
- `HttpClient` lifetime is a real design concern in production applications

## Practice

Write a small sample that validates a `Uri`, sends a GET request, and prints the response status code.

As a second exercise, sketch how you would separate an API client method from the code that parses and uses the returned data.
