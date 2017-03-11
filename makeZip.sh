#!/bin/sh
NAME=freon@Veske
cd $NAME
zip -r $NAME.zip *
cd ..
mv $NAME/$NAME.zip .
