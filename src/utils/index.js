export const formatAddr = (addr) => {
  return `${addr.substr(0, 6)}...${addr.substr(-4)}`
}

export const titleCaseDir = (dir) => {

}

// regex
// go through links and remove {target=_blank}
export const targetLinkRemove = (string) => {
  let targetLinkRegEx = /{target=_blank}/
  if (string.match(targetLinkRegEx)) {
    let stringAltered = string.slice(0,(string.length-15))
    return stringAltered
  }
  return string
}

// remove paragraph spacing

// triple colon

//
