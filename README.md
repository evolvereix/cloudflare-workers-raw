<br>
<h1>Raw<sup><em> for Cloudflare Workers</em></sup></h1>

<br>

<h2>Usage</h2>

</h3>GitHub Raw file</h3>

Proxy `https://raw.githubusercontent.com`

```
https://raw.evolvereix.com/evolvereix/surge/main/surge-list/reject.list
https://raw.evolvereix.com/evolvereix/surge/main/surge-list/blocked.list
https://raw.evolvereix.com/evolvereix/surge/main/surge-list/cn.list
https://raw.evolvereix.com/evolvereix/surge/main/surge-list/stream.list
https://raw.evolvereix.com/evolvereix/surge/main/surge-list/apple.list
https://raw.evolvereix.com/evolvereix/surge/main/surge-list/apple.list
```

<h2>Develop</h2>

<h4>Prepare</h4>

1. Pnpm >= 8.0.0
2. Node.js >= 16.13.0

<h3>Step</h3>

1. Clone the project

```bash
git clone git@github.com:evolvereix/cloudflare-workers-raw.git
```

2. Installation project dependencies

```bash
pnpm install
```

3. Run the local service

```bash
pnpm run start
```

<h2>Deploy</h2>

1. Sign in to your Cloudflare account

```bash
wrangler login
```

2. deploy the project

```bash
wrangler publish
```
