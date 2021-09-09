import maskit from './maskit'
import dynamicMask from './dynamic-mask'

export default function (value, mask, masked = true, tokens) {
  if (!mask) { return value }
  return Array.isArray(mask)
    ? dynamicMask(maskit, mask, tokens)(value, mask, masked, tokens)
    : maskit(value, mask, masked, tokens)
}
