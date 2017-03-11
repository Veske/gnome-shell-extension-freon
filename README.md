gnome-shell-extension-freon
====================================

Freon is forked from [gnome-shell-extension-freon](https://github.com/UshakovVasilii/gnome-shell-extension-freon). Freon is an extension for displaying CPU temperature, disk temperature, video card temperature (NVIDIA/Catalyst/AMDGPU/Bumblebee&NVIDIA), voltage and fan RPM in GNOME Shell.

This fork of Freon includes support for showing AMDGPU temperatures also.

### Installation from git

    git clone https://github.com/Veske/gnome-shell-extension-freon
    cd gnome-shell-extension-freon
    mkdir -p ~/.local/share/gnome-shell/extensions
    cp -r freon@Veske ~/.local/share/gnome-shell/extensions/.
restart GNOME Shell (`Alt+F2`, `r`, `Enter`) and enable the extension through gnome-tweak-tool.
