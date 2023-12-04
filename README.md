## blog part of astro_blik

A repository that displays entries with <a href="https://www.blender-ikkinomi.com/blog/first/">**blog**</a> in the tags is now available here.

<a href="https://www.blender-ikkinomi.com">BLENDER IKKINOMI</a>

If you add entries as .md or .mdx files under /src/content/blog/, it will function as a blog site.
You can also redistribute and publish your original design by changing the css and tailwindcss descriptions in various places.

The setup procedure is as follows

## Setup Instructions

Clone the astro_blik_public repository.

```sh

git clone https://github.com/imosan/astro_blik_public.git

```
Enter the cloned directory.
```sh

cd astro_blik_public

```
Install all packages.
```sh

npm install

```
If pnpm,
```sh

pnpm install

```
Start locally.
```sh

npm run dev

```
At the end, open the displayed URL in your browser. Typically, it is <a href='http://localhost:4321'>localhost:4321</a>.


## Deploy to vercel

Execute the vercel command.

```sh

vercel

```
Answer the following choices.
```

Vercel CLI 32.5.5
? Set up and deploy “/mnt/c/Development/Firebase/astro_blik_public”? [Y/n] Y
? Which scope do you want to deploy to? xxxx
? Link to existing project? [y/N] n
? In which directory is your code located? ./
? Want to modify these settings? [y/N] N

```
When the build finishes, the deployed URL will appear as Preview: https://xxx.vercel.app, which can be accessed.


The following is the author's deployment using the above procedure.

https://astro-blik-public-m8v6hsy55-imosans-projects.vercel.app/


It is amazing how seamless and sophisticated vercel is, acting as if it is a part of github.

The vercel blob is still under preparation, but once it is up and running, it is likely to revolutionize the CMS world with the creation of services that handle everything from templates to deployment in a single step.
