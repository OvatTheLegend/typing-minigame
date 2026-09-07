export const COMMON_WORDS: string[] = [
  "algorithm", "binary", "buffer", "bytecode", "cache", "callback", "compiler",
  "component", "constant", "database", "debugger", "dynamic", "element", "engine",
  "event", "execute", "export", "function", "gateway", "handler", "hardware",
  "import", "index", "instance", "interface", "kernel", "latency", "library",
  "memory", "module", "network", "node", "object", "package", "packet",
  "pipeline", "pointer", "process", "protocol", "query", "queue", "react",
  "runtime", "sandbox", "schema", "script", "server", "session", "socket",
  "source", "stack", "state", "stream", "syntax", "system", "terminal",
  "thread", "token", "variable", "vector", "virtual", "widget", "window",
  "access", "action", "active", "address", "allocate", "array", "async",
  "atomic", "backup", "branch", "bridge", "build", "bundle", "channel",
  "client", "cloud", "cluster", "command", "commit", "compute", "config",
  "connect", "console", "context", "control", "convert", "cookie", "crypto",
  "cursor", "daemon", "decode", "default", "delete", "deploy", "device",
  "digital", "direct", "display", "domain", "driver", "effect", "encode",
  "endpoint", "entry", "error", "escape", "eval", "expire", "factor",
  "feature", "fetch", "fiber", "field", "filter", "flush", "format",
  "frame", "future", "global", "graphic", "handle", "hash", "header",
  "heap", "helper", "hook", "host", "hyper", "input", "insert",
  "inspect", "invoke", "iterate", "json", "layout", "length", "link",
  "listen", "loader", "logic", "matrix", "method", "metric", "micro",
  "model", "mount", "native", "nested", "null", "number", "output",
  "override", "param", "parse", "patch", "payload", "perform", "plugin",
  "policy", "portal", "prefix", "promise", "proxy", "pulse", "random",
  "raster", "reduce", "refactor", "render", "request", "resolve", "resource",
  "result", "return", "route", "router", "safety", "scalar", "scope",
  "search", "secure", "segment", "select", "signal", "simple", "socket",
  "spawn", "spider", "split", "static", "status", "storage", "string",
  "struct", "style", "switch", "symbol", "target", "task", "template",
  "tenant", "timer", "trace", "track", "traffic", "transit", "trigger",
  "tunnel", "type", "update", "upload", "utility", "valid", "value",
  "vault", "vendor", "version", "viewer", "worker", "wrapper", "yield"
];

export default function generateWords(count: number = 50) {
    const result : string[] = [];
    for (let i = 0; i < count; i++){
      const randomIndex = Math.floor(Math.random() * COMMON_WORDS.length);
      result.push(COMMON_WORDS[randomIndex]);
    }
    return result;
}