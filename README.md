# Apaxy

Based on https://github.com/AdamWhitcroft/apaxy

* Moved files to /usr/share/apache2/apaxy and created an alias to be global accessible from any path with
``Options Indexes`` enabled.
* Removed required HTML from HEADER.html and README.html to be completely customizable by the user. 
* Responsive layout, even for very small devices.
* Remove external font dependency.
* Switch to scss.

## Docker

docker run --rm -p 8080:80 foobox/apaxy

After starting the docker container you can access the [local apaxy example](http://localhost:8080/)

## Troubleshooting

Make sure the options set in `.htaccess` files of Apaxy can actually be changed. This means that you need to allow to
override the used options in your apache configuration of the directory apaxy used with: `AllowOverride Indexes`

Find more information in the in the [apache documentation](https://httpd.apache.org/docs/2.4/de/mod/core.html).

## Credits

Apaxy owes its existence to the amazing [h5ai](http://larsjung.de/h5ai/) by [Lars Jung](https://twitter.com/lrsjng).
Had I not seen this, I would never have looked into making my own (probably way less useful) version.

[Faenza Icons](http://tiheum.deviantart.com/art/Faenza-Icons-173323228) are used in the `apaxy` theme.
