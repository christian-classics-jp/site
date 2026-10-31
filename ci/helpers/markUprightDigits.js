const markUprightDigits = (html) => html.replace(/(^|>)([^<]+)/g, (_, open, text) =>
  open + text.replace(/(?<![\w:.,#&/\-–])(\d{1,2})(?![\w:.,;/\-–])/g, '<span class="tcy">$1</span>')
)

module.exports = markUprightDigits
