PLURALS_XML=http://unicode.org/cldr/trac/export/11042/trunk/common/supplemental/plurals.xml

OUT_DIR=tmp/common/supplemental

index.js: $(OUT_DIR)/plurals.xml bin/export
	@./bin/export tmp > $@

$(OUT_DIR)/plurals.xml:
	@mkdir -p $(OUT_DIR)
	@curl -o $@ $(PLURALS_XML)
