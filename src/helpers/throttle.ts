export const throttle = (inputFunction, ms) => {
  let isThrottled = false
  let savedArguments
  let savedThis
  const wrapper = () => {
    if (isThrottled) {
      savedArguments = arguments
      savedThis = this
      return
    }

    inputFunction.apply(this, arguments)
    isThrottled = true

    setTimeout(function () {
      isThrottled = false
      if (savedArguments) {
        wrapper.apply(savedThis, savedArguments)
        savedThis = savedArguments = null
      }
    }, ms)
  }

  return wrapper
}
