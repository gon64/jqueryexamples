# installation
## install composer
`sudo apt install composer`
## add jquery component
As there's a file `composer.json` with the next content...:
```json
{
    "require": {
        "components/jquery": "^3.6"
    }
}
```
we just need to run `composer update` in order to install the jQuery library. It can be found at `vendor/components/jquery/` 

The jquery libray already has been included in the html this way:

```html
<script src="vendor/components/jquery/jquery.min.js"></script>
```
