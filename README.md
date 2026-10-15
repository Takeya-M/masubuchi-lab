# Masubuchi Lab website

Responsive navy/gray website. Plain HTML and CSS; no installation or build needed.

## Repository and GitHub Pages
1. Create a public GitHub repository called masubuchi-lab; select Add a README.
2. Extract the supplied ZIP on your computer. Open the extracted folder.
3. In GitHub choose Add file > Upload files. Upload the CONTENTS of this folder, including assets, so index.html is at the repository root. Do not upload the ZIP or an enclosing folder. Replace the initial README with this one. Commit the changes.
4. In Settings > Pages, select Deploy from a branch, main, /(root), then Save.
5. Wait for the deployment to finish. Pages settings will display your website link. For this repository the address will be https://Takeya-M.github.io/masubuchi-lab/. 

## Organization
- index.html: home
- research.html: Research
- people.html: People
- publications.html: Publications
- join.html: Join Us
- assets/style.css: colors and responsive layout
- assets/navigation.js: mobile menu
- .nojekyll: disables Jekyll processing (if browser upload omits this hidden file, it can be created using Add file > Create new file; this site also works without it).

## Editing
Open a page in GitHub and use the pencil icon. Commit edits to main to publish updates. Use meaningful commit messages. All navigation uses relative links, so it works under a project URL and a future custom domain.

## Before public launch
Replace draft content with approved research descriptions, team names, publications, contact email, and recruitment status. Replace the concept illustration with a lab image if desired, including descriptive alternative text and an accurate caption. Remove the draft banner from all five pages only after review. No papers, member identities, or vacancies have been invented.

## Porkbun custom domain — later
Wait until the GitHub Pages address works and the exact domain and username are confirmed. Verify domain ownership in GitHub account Settings > Pages using the TXT record GitHub supplies. Add the chosen domain in the repository Settings > Pages > Custom domain before changing routing records at Porkbun. For a root domain, GitHub currently lists four A records: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153. A www CNAME should point to Takeya-M.github.io, without the repository path. Check existing records before replacing conflicting website records; preserve email records. Once DNS and the certificate are ready, enable Enforce HTTPS. GitHub notes that DNS and HTTPS availability can each take up to 24 hours. Exact Porkbun instructions should be tailored to the confirmed domain and current records. No CNAME is included in this starter.

Official references:
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Your confirmed details
- GitHub: Takeya-M
- Suggested repository: Takeya-M/masubuchi-lab
- Initial site address after deployment: https://takeya-m.github.io/masubuchi-lab/
- Planned custom domain: masubuchilab.org
- Affiliation: International Research Center for Medical Sciences (IRCMS), Kumamoto University, Kumamoto, Japan

## Exact domain setup, after the initial site works
1. In your GitHub account Settings > Pages, add masubuchilab.org for verification. Copy the TXT record name and value supplied by GitHub.
2. In Porkbun Domain Management, locate masubuchilab.org and open its DNS records. Add GitHub's TXT record, then verify the domain in GitHub.
3. In the masubuchi-lab repository Settings > Pages, enter masubuchilab.org as the custom domain and save. GitHub creates the CNAME file for branch publishing; retain this file during future updates.
4. In Porkbun DNS, add these records. A blank Host means the root domain at Porkbun:

| Type | Host | Answer / value |
| --- | --- | --- |
| A | (blank) | 185.199.108.153 |
| A | (blank) | 185.199.109.153 |
| A | (blank) | 185.199.110.153 |
| A | (blank) | 185.199.111.153 |
| CNAME | www | takeya-m.github.io |

Review existing root and www website records for conflicts before making changes. Preserve MX and email-related TXT records and the GitHub verification TXT. Do not add a repository path to the www CNAME.
5. Wait for the DNS check and certificate, then enable Enforce HTTPS in GitHub Pages. Test both https://masubuchilab.org and https://www.masubuchilab.org.

Porkbun DNS guide: https://kb.porkbun.com/article/68-how-to-edit-dns-records

These are prepared instructions; no GitHub repository, deployment, or DNS changes have been performed by this local build.
