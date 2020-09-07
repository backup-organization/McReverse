/*
 * Auto-generated by Frida. Please modify to match the signature of _ZN5boost9container15destroy_alloc_nINS0_3dtl24static_storage_allocatorIN6nonstd8variants7variantINS5_9monostateEN3mce10TexturePtrENS8_13ClientTextureENS8_13ServerTextureENS5_6detail2TXINSC_2S4EEENSD_INSC_2S5EEENSD_INSC_2S6EEENSD_INSC_2S7EEENSD_INSC_2S8EEENSD_INSC_2S9EEENSD_INSC_3S10EEENSD_INSC_3S11EEENSD_INSC_3S12EEENSD_INSC_3S13EEENSD_INSC_3S14EEENSD_INSC_3S15EEEEELj8EEEPS12_jEENS2_33disable_if_trivially_destructibleIT0_vE4typeERT_S16_T1_.
 * This stub is currently auto-generated from manpages when available.
 *
 * For full API reference, see: https://frida.re/docs/javascript-api/
 */

{
  /**
   * Called synchronously when about to call _ZN5boost9container15destroy_alloc_nINS0_3dtl24static_storage_allocatorIN6nonstd8variants7variantINS5_9monostateEN3mce10TexturePtrENS8_13ClientTextureENS8_13ServerTextureENS5_6detail2TXINSC_2S4EEENSD_INSC_2S5EEENSD_INSC_2S6EEENSD_INSC_2S7EEENSD_INSC_2S8EEENSD_INSC_2S9EEENSD_INSC_3S10EEENSD_INSC_3S11EEENSD_INSC_3S12EEENSD_INSC_3S13EEENSD_INSC_3S14EEENSD_INSC_3S15EEEEELj8EEEPS12_jEENS2_33disable_if_trivially_destructibleIT0_vE4typeERT_S16_T1_.
   *
   * @this {object} - Object allowing you to store state for use in onLeave.
   * @param {function} log - Call this function with a string to be presented to the user.
   * @param {array} args - Function arguments represented as an array of NativePointer objects.
   * For example use args[0].readUtf8String() if the first argument is a pointer to a C string encoded as UTF-8.
   * It is also possible to modify arguments by assigning a NativePointer object to an element of this array.
   * @param {object} state - Object allowing you to keep state across function calls.
   * Only one JavaScript function will execute at a time, so do not worry about race-conditions.
   * However, do not use this to store function arguments across onEnter/onLeave, but instead
   * use "this" which is an object for keeping state local to an invocation.
   */
  onEnter: function (log, args, state) {
    log('_ZN5boost9container15destroy_alloc_nINS0_3dtl24static_storage_allocatorIN6nonstd8variants7variantINS5_9monostateEN3mce10TexturePtrENS8_13ClientTextureENS8_13ServerTextureENS5_6detail2TXINSC_2S4EEENSD_INSC_2S5EEENSD_INSC_2S6EEENSD_INSC_2S7EEENSD_INSC_2S8EEENSD_INSC_2S9EEENSD_INSC_3S10EEENSD_INSC_3S11EEENSD_INSC_3S12EEENSD_INSC_3S13EEENSD_INSC_3S14EEENSD_INSC_3S15EEEEELj8EEEPS12_jEENS2_33disable_if_trivially_destructibleIT0_vE4typeERT_S16_T1_()');
  },

  /**
   * Called synchronously when about to return from _ZN5boost9container15destroy_alloc_nINS0_3dtl24static_storage_allocatorIN6nonstd8variants7variantINS5_9monostateEN3mce10TexturePtrENS8_13ClientTextureENS8_13ServerTextureENS5_6detail2TXINSC_2S4EEENSD_INSC_2S5EEENSD_INSC_2S6EEENSD_INSC_2S7EEENSD_INSC_2S8EEENSD_INSC_2S9EEENSD_INSC_3S10EEENSD_INSC_3S11EEENSD_INSC_3S12EEENSD_INSC_3S13EEENSD_INSC_3S14EEENSD_INSC_3S15EEEEELj8EEEPS12_jEENS2_33disable_if_trivially_destructibleIT0_vE4typeERT_S16_T1_.
   *
   * See onEnter for details.
   *
   * @this {object} - Object allowing you to access state stored in onEnter.
   * @param {function} log - Call this function with a string to be presented to the user.
   * @param {NativePointer} retval - Return value represented as a NativePointer object.
   * @param {object} state - Object allowing you to keep state across function calls.
   */
  onLeave: function (log, retval, state) {
  }
}
