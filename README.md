# Coloraise README.md

Coloraise is a simple downloadable menu plugin that allows users to change colors on your web pages.

Go to the [Coloraise API Documentation](https://aduboisforge.com/coloraise/coloraise.html) to see this dowloadable menu in action (top right corner of page).

## Step 1: Intall files

Install files on your server and link them like so:

```
<link rel="stylesheet" href="/path/to/coloraise.css">
<script src="/path/to/coloraise.js"></script>
```

* make sure you also have jQuery, since it is a dependency.

## Step 2: Include empty `'coloraise' <div>`

Include following `div` on page where you want menu to show up.  Make sure that its parent container and positioning will actually allow it to show up on your page.

```
<div class="coloraise"></div>
```

## Step 3: Include classes

There are several classes included in the Coloraise plugin API which allows you to control what will and will not change colors on your page.

For instance adding the class `'color-change'` to a container element will allow the user to change the color all text inside that container and the background color of that container as well.

There several classes that affect groups of elements, and individual elements.  If you want to just allow users to change the background color of your page, or just the text, you can control that with the classes you include on your page.

All classes are explained in the [Coloraise Documentation Class Reference](https://aduboisforge.com/coloraise/coloraise.html#section5).

## Step 4: Customization

This step is completely optional, you can style the Coloraise plugin to match the color-scheme of your site by following this [Customization Guide](https://aduboisforge.com/coloraise/coloraise.html#section51). You can also move where the menu appears within it's parent container.

# License

Coloraise has been released under a  [Creative Commons ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/) license which means that you can remix and adapt this code and re-release it, as long as you 1) give credit to the creator and 2) keep the code free and open by releasing it under the same license:


## License

Coloraise licensed under Creative Commons
ShareAlike 4.0 International.
-Amy Dubois, 2019.
