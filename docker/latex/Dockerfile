FROM blang/latex:ctanfull
COPY ./ /workdir
WORKDIR /workdir
RUN mkdir /book && chmod 777 /book
CMD ["pdflatex", "-output-directory=./scrivo/book", "./scrivo/markdown/bozza.tex"]
