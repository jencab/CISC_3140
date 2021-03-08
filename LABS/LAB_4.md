<b> Part 1: Connecting to BC's Web Lab Linux Server using SSH </b><br>

 Pre-Work <br>
 1.  If you don’t have an SSH Client or a terminal environment to start you can download Putty, a free open-source terminal emulator. <br>
 2.  You will also need to know your credentials to be able to log in. To find this search 'linux login' in your primary email and you should find your login information in an email sent to you.<br>
 
 Connecting to the BC server
 1. Load Putty. We will only focus on the Session Logging in page, it should look like this. <br> 
 <img src= "https://user-images.githubusercontent.com/70915926/110363735-eaad7380-8010-11eb-9ca3-ec09332f4b15.png" width="50%"/>
 2. In the Host Name field you can use any of the following IP Addresses. <br>
 `146.245.252.25` <br>
 `146.245.252.29` <br>
 `146.245.252.26` <br>
 `146.245.252.30` <br>
 `146.245.252.28` <br>
 `146.245.252.31` <br>
 `146.245.252.150` <br> <br>
 3. Open it and you should be greeted with a terminal that looks like this. <br>
 <img src= "https://user-images.githubusercontent.com/70915926/110364795-3b719c00-8012-11eb-9433-235c614043e8.png" width="50%"/>
 4. Type in your username and password (the password will not display as you type it in). It will look like this if you have connected successfully. <br>
 <img src= "https://user-images.githubusercontent.com/70915926/110365386-f7cb6200-8012-11eb-9bb8-0a76e5f0971f.png" width="50%"/>

<b> Part 2: Some Linux Programs </b><br>
1. `curl` transfers data from or to a server. Syntax: `curl [options] [URL...]`<br>
If no option is specified curl will print the source code of the homepage of the URL inputed. <br>
These are some options curl provides.<br>
`-o` or `0` saves the result of the `curl` command <br>
`-C` resumes a download <br>
`-I` fetches only the HTTP headers of the specified resource. 
2. `wget` downloads files from the web. Syntax: `wget [options] [url]`
If no option is specified `wget` will download the resource to the current directory. If the files already exists `wget` will add a number at the end of the file name.
Some options you can use. <br>
`-i` reads URLs form a local or external file. <br>
`-O file` documents will not be written to the appropiate files, but will be joined and written to the specified file. <br>
`-S` print the headers sent by the HTTP servers and responses sent by FTP servers.
3. `convert` converts between image formats as well as resize an image, blur, crop, flip, etc. Syntax: `convert input-file [options] output-file` <br>
Some options you can use. <br>
`-auto-orient` automatically orient image <br>
`-black-threshold value` force all pixels below the threshold into black <br>
`-blur`reduce image noise and reduce detail levels
