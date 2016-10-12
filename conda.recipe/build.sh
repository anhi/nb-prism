"${PYTHON}" setup.py install
"${PREFIX}/bin/jupyter-nbextension" install nb-prism --py --sys-prefix
