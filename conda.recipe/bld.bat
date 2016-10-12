"%PYTHON%" setup.py install
"%PREFIX%\Scripts\jupyter-nbextension.exe" install nb-prism --py --sys-prefix
if errorlevel 1 exit 1
