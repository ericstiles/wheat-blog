Title: Searching For Files On Multiple Extensions
Date: June 10 2013 17:30:00 GMT-0500 (CST)
Categories: bash, regex
Email: stiles.eric@gmail.com

Recently I was asked to search for all images we were using on website.  Pretty straightforward request... but yet 
another opportunity to learn something new and improve my skills.

# The Solution

I started with a standard list of image extensions

 * jpg
 * jpeg
 * gif
 * tiff
 
Great!  Taking into account case sensitive searches I've got 

    find . -iname "*.jpg" > file.txt
    find . -iname "*.JPG" >> file.txt
    find . -iname "*.jpeg" >> file.txt
    find . -iname "*.JPEG" >> file.txt
    ... so on and so forth ...

Well now.  This is repetitive and painfully inefficient as I get the complete path of the image.  So let's try 
something a little different and start to utilize some standard patterns.

    find . -iname "*(jpg\|JPG\|jpeg\|JPEG\)" > file.txt
   
So now I'm down to one line and on my way, but I've still got the complete path that I need to deal with.  It's at 
this point that I realize something I missed in my approach.  Though highly unlikely the following extensions are all 
valid jpg image extensions and need to be considered.
 
 * jpg
 * jpG
 * jPg
 * jPG
 * Jpg
 * JpG
 * JPg
 * JPG
 
Multiply this by each extension and my one line of code becomes pretty convoluted and lengthy, 
not too mention confusing as I could easily miss a variation of the extension.
 
So let's get a little crazy with regex

    find -regex '.*\.\([jJ][pP][gG]\|[jJ][pP][eE][gG]\|[pP][nN][gG]\|[bB][mM][pP]\|[gG][iI][fF]\|[tT][iI][fF][fF]\)' > 
    file.txt

With two minor tweaks I have and adding the **basename** comand to remove retrieve just the filename I have the 
final command

 * add [eE]? to make the 'e' optional
 * add {2} after the [fF] rather than have two [fF]

## Here It Is

    find -regex '.*\.\([jJ][pP][eE]?[gG]\|[pP][nN][gG]\|[bB][mM][pP]\|[gG][iI][fF]\|[tT][iI][fF]{2}\)' -exec basename {} \; > file.txt

...And we're there.

# Alternatives Or A Better Approach

I'm sure there are alternatives where some may be better approaches than what I've demonstrated here.  It's all about
 getting the job done efficiently as a balancing act with getting the job done as requested.