type ClassLike = {
  class: Packages.java.lang.Class<any>;
  [Symbol.hasInstance](v): boolean
 }
type isAny<T> = (T extends never ? true : false) extends false ? false : true;
type CombineTypes<A> = (
  A extends [infer B, ...infer Rest] ?
    isAny<B> extends true ?
      CombineTypes<Rest>
      : CombineTypes<Rest> extends never ? B : B & CombineTypes<Rest>
    : A extends [infer B] ?
      isAny<B> extends true ? never : B
  : never
)
type char   = number & {};
type byte   = number & {};
type short  = number & {};
type int    = number & {};
type long   = number | BigInt;
type float  = number & {};
type double = number & {};
type Function$$JS = Function;
declare module Packages {
  module sun {
    module text {
      module resources {
        module cldr {
          module ext {
            interface _FormatData_af$$static extends ClassLike {
              new(): FormatData_af;
            }
            let FormatData_af: _FormatData_af$$static;
            interface _FormatData_af {
              _getContents(): any[][];
            }
            interface FormatData_af extends CombineTypes<[_FormatData_af, java.util.ListResourceBundle]> {}
            interface _FormatData_af_NA$$static extends ClassLike {
              new(): FormatData_af_NA;
            }
            let FormatData_af_NA: _FormatData_af_NA$$static;
            interface _FormatData_af_NA {
              _getContents(): any[][];
            }
            interface FormatData_af_NA extends CombineTypes<[_FormatData_af_NA, java.util.ListResourceBundle]> {}
            interface _FormatData_agq$$static extends ClassLike {
              new(): FormatData_agq;
            }
            let FormatData_agq: _FormatData_agq$$static;
            interface _FormatData_agq {
              _getContents(): any[][];
            }
            interface FormatData_agq extends CombineTypes<[_FormatData_agq, java.util.ListResourceBundle]> {}
            interface _FormatData_ak$$static extends ClassLike {
              new(): FormatData_ak;
            }
            let FormatData_ak: _FormatData_ak$$static;
            interface _FormatData_ak {
              _getContents(): any[][];
            }
            interface FormatData_ak extends CombineTypes<[_FormatData_ak, java.util.ListResourceBundle]> {}
            interface _FormatData_am$$static extends ClassLike {
              new(): FormatData_am;
            }
            let FormatData_am: _FormatData_am$$static;
            interface _FormatData_am {
              _getContents(): any[][];
            }
            interface FormatData_am extends CombineTypes<[_FormatData_am, java.util.ListResourceBundle]> {}
            interface _FormatData_ar$$static extends ClassLike {
              new(): FormatData_ar;
            }
            let FormatData_ar: _FormatData_ar$$static;
            interface _FormatData_ar {
              _getContents(): any[][];
            }
            interface FormatData_ar extends CombineTypes<[_FormatData_ar, java.util.ListResourceBundle]> {}
            interface _FormatData_ar_AE$$static extends ClassLike {
              new(): FormatData_ar_AE;
            }
            let FormatData_ar_AE: _FormatData_ar_AE$$static;
            interface _FormatData_ar_AE {
              _getContents(): any[][];
            }
            interface FormatData_ar_AE extends CombineTypes<[_FormatData_ar_AE, java.util.ListResourceBundle]> {}
            interface _FormatData_ar_DZ$$static extends ClassLike {
              new(): FormatData_ar_DZ;
            }
            let FormatData_ar_DZ: _FormatData_ar_DZ$$static;
            interface _FormatData_ar_DZ {
              _getContents(): any[][];
            }
            interface FormatData_ar_DZ extends CombineTypes<[_FormatData_ar_DZ, java.util.ListResourceBundle]> {}
            interface _FormatData_ar_EH$$static extends ClassLike {
              new(): FormatData_ar_EH;
            }
            let FormatData_ar_EH: _FormatData_ar_EH$$static;
            interface _FormatData_ar_EH {
              _getContents(): any[][];
            }
            interface FormatData_ar_EH extends CombineTypes<[_FormatData_ar_EH, java.util.ListResourceBundle]> {}
            interface _FormatData_ar_IL$$static extends ClassLike {
              new(): FormatData_ar_IL;
            }
            let FormatData_ar_IL: _FormatData_ar_IL$$static;
            interface _FormatData_ar_IL {
              _getContents(): any[][];
            }
            interface FormatData_ar_IL extends CombineTypes<[_FormatData_ar_IL, java.util.ListResourceBundle]> {}
            interface _FormatData_ar_IQ$$static extends ClassLike {
              new(): FormatData_ar_IQ;
            }
            let FormatData_ar_IQ: _FormatData_ar_IQ$$static;
            interface _FormatData_ar_IQ {
              _getContents(): any[][];
            }
            interface FormatData_ar_IQ extends CombineTypes<[_FormatData_ar_IQ, java.util.ListResourceBundle]> {}
            interface _FormatData_ar_JO$$static extends ClassLike {
              new(): FormatData_ar_JO;
            }
            let FormatData_ar_JO: _FormatData_ar_JO$$static;
            interface _FormatData_ar_JO {
              _getContents(): any[][];
            }
            interface FormatData_ar_JO extends CombineTypes<[_FormatData_ar_JO, java.util.ListResourceBundle]> {}
            interface _FormatData_ar_KM$$static extends ClassLike {
              new(): FormatData_ar_KM;
            }
            let FormatData_ar_KM: _FormatData_ar_KM$$static;
            interface _FormatData_ar_KM {
              _getContents(): any[][];
            }
            interface FormatData_ar_KM extends CombineTypes<[_FormatData_ar_KM, java.util.ListResourceBundle]> {}
            interface _FormatData_ar_LB$$static extends ClassLike {
              new(): FormatData_ar_LB;
            }
            let FormatData_ar_LB: _FormatData_ar_LB$$static;
            interface _FormatData_ar_LB {
              _getContents(): any[][];
            }
            interface FormatData_ar_LB extends CombineTypes<[_FormatData_ar_LB, java.util.ListResourceBundle]> {}
            interface _FormatData_ar_LY$$static extends ClassLike {
              new(): FormatData_ar_LY;
            }
            let FormatData_ar_LY: _FormatData_ar_LY$$static;
            interface _FormatData_ar_LY {
              _getContents(): any[][];
            }
            interface FormatData_ar_LY extends CombineTypes<[_FormatData_ar_LY, java.util.ListResourceBundle]> {}
            interface _FormatData_ar_MA$$static extends ClassLike {
              new(): FormatData_ar_MA;
            }
            let FormatData_ar_MA: _FormatData_ar_MA$$static;
            interface _FormatData_ar_MA {
              _getContents(): any[][];
            }
            interface FormatData_ar_MA extends CombineTypes<[_FormatData_ar_MA, java.util.ListResourceBundle]> {}
            interface _FormatData_ar_MR$$static extends ClassLike {
              new(): FormatData_ar_MR;
            }
            let FormatData_ar_MR: _FormatData_ar_MR$$static;
            interface _FormatData_ar_MR {
              _getContents(): any[][];
            }
            interface FormatData_ar_MR extends CombineTypes<[_FormatData_ar_MR, java.util.ListResourceBundle]> {}
            interface _FormatData_ar_PS$$static extends ClassLike {
              new(): FormatData_ar_PS;
            }
            let FormatData_ar_PS: _FormatData_ar_PS$$static;
            interface _FormatData_ar_PS {
              _getContents(): any[][];
            }
            interface FormatData_ar_PS extends CombineTypes<[_FormatData_ar_PS, java.util.ListResourceBundle]> {}
            interface _FormatData_ar_SA$$static extends ClassLike {
              new(): FormatData_ar_SA;
            }
            let FormatData_ar_SA: _FormatData_ar_SA$$static;
            interface _FormatData_ar_SA {
              _getContents(): any[][];
            }
            interface FormatData_ar_SA extends CombineTypes<[_FormatData_ar_SA, java.util.ListResourceBundle]> {}
            interface _FormatData_ar_SO$$static extends ClassLike {
              new(): FormatData_ar_SO;
            }
            let FormatData_ar_SO: _FormatData_ar_SO$$static;
            interface _FormatData_ar_SO {
              _getContents(): any[][];
            }
            interface FormatData_ar_SO extends CombineTypes<[_FormatData_ar_SO, java.util.ListResourceBundle]> {}
            interface _FormatData_ar_SY$$static extends ClassLike {
              new(): FormatData_ar_SY;
            }
            let FormatData_ar_SY: _FormatData_ar_SY$$static;
            interface _FormatData_ar_SY {
              _getContents(): any[][];
            }
            interface FormatData_ar_SY extends CombineTypes<[_FormatData_ar_SY, java.util.ListResourceBundle]> {}
            interface _FormatData_ar_TN$$static extends ClassLike {
              new(): FormatData_ar_TN;
            }
            let FormatData_ar_TN: _FormatData_ar_TN$$static;
            interface _FormatData_ar_TN {
              _getContents(): any[][];
            }
            interface FormatData_ar_TN extends CombineTypes<[_FormatData_ar_TN, java.util.ListResourceBundle]> {}
            interface _FormatData_as$$static extends ClassLike {
              new(): FormatData_as;
            }
            let FormatData_as: _FormatData_as$$static;
            interface _FormatData_as {
              _getContents(): any[][];
            }
            interface FormatData_as extends CombineTypes<[_FormatData_as, java.util.ListResourceBundle]> {}
            interface _FormatData_asa$$static extends ClassLike {
              new(): FormatData_asa;
            }
            let FormatData_asa: _FormatData_asa$$static;
            interface _FormatData_asa {
              _getContents(): any[][];
            }
            interface FormatData_asa extends CombineTypes<[_FormatData_asa, java.util.ListResourceBundle]> {}
            interface _FormatData_ast$$static extends ClassLike {
              new(): FormatData_ast;
            }
            let FormatData_ast: _FormatData_ast$$static;
            interface _FormatData_ast {
              _getContents(): any[][];
            }
            interface FormatData_ast extends CombineTypes<[_FormatData_ast, java.util.ListResourceBundle]> {}
            interface _FormatData_az$$static extends ClassLike {
              new(): FormatData_az;
            }
            let FormatData_az: _FormatData_az$$static;
            interface _FormatData_az {
              _getContents(): any[][];
            }
            interface FormatData_az extends CombineTypes<[_FormatData_az, java.util.ListResourceBundle]> {}
            interface _FormatData_az_Cyrl$$static extends ClassLike {
              new(): FormatData_az_Cyrl;
            }
            let FormatData_az_Cyrl: _FormatData_az_Cyrl$$static;
            interface _FormatData_az_Cyrl {
              _getContents(): any[][];
            }
            interface FormatData_az_Cyrl extends CombineTypes<[_FormatData_az_Cyrl, java.util.ListResourceBundle]> {}
            interface _FormatData_bas$$static extends ClassLike {
              new(): FormatData_bas;
            }
            let FormatData_bas: _FormatData_bas$$static;
            interface _FormatData_bas {
              _getContents(): any[][];
            }
            interface FormatData_bas extends CombineTypes<[_FormatData_bas, java.util.ListResourceBundle]> {}
            interface _FormatData_be$$static extends ClassLike {
              new(): FormatData_be;
            }
            let FormatData_be: _FormatData_be$$static;
            interface _FormatData_be {
              _getContents(): any[][];
            }
            interface FormatData_be extends CombineTypes<[_FormatData_be, java.util.ListResourceBundle]> {}
            interface _FormatData_be_TARASK$$static extends ClassLike {
              new(): FormatData_be_TARASK;
            }
            let FormatData_be_TARASK: _FormatData_be_TARASK$$static;
            interface _FormatData_be_TARASK {
              _getContents(): any[][];
            }
            interface FormatData_be_TARASK extends CombineTypes<[_FormatData_be_TARASK, java.util.ListResourceBundle]> {}
            interface _FormatData_bem$$static extends ClassLike {
              new(): FormatData_bem;
            }
            let FormatData_bem: _FormatData_bem$$static;
            interface _FormatData_bem {
              _getContents(): any[][];
            }
            interface FormatData_bem extends CombineTypes<[_FormatData_bem, java.util.ListResourceBundle]> {}
            interface _FormatData_bez$$static extends ClassLike {
              new(): FormatData_bez;
            }
            let FormatData_bez: _FormatData_bez$$static;
            interface _FormatData_bez {
              _getContents(): any[][];
            }
            interface FormatData_bez extends CombineTypes<[_FormatData_bez, java.util.ListResourceBundle]> {}
            interface _FormatData_bg$$static extends ClassLike {
              new(): FormatData_bg;
            }
            let FormatData_bg: _FormatData_bg$$static;
            interface _FormatData_bg {
              _getContents(): any[][];
            }
            interface FormatData_bg extends CombineTypes<[_FormatData_bg, java.util.ListResourceBundle]> {}
            interface _FormatData_bgc$$static extends ClassLike {
              new(): FormatData_bgc;
            }
            let FormatData_bgc: _FormatData_bgc$$static;
            interface _FormatData_bgc {
              _getContents(): any[][];
            }
            interface FormatData_bgc extends CombineTypes<[_FormatData_bgc, java.util.ListResourceBundle]> {}
            interface _FormatData_bho$$static extends ClassLike {
              new(): FormatData_bho;
            }
            let FormatData_bho: _FormatData_bho$$static;
            interface _FormatData_bho {
              _getContents(): any[][];
            }
            interface FormatData_bho extends CombineTypes<[_FormatData_bho, java.util.ListResourceBundle]> {}
            interface _FormatData_bm$$static extends ClassLike {
              new(): FormatData_bm;
            }
            let FormatData_bm: _FormatData_bm$$static;
            interface _FormatData_bm {
              _getContents(): any[][];
            }
            interface FormatData_bm extends CombineTypes<[_FormatData_bm, java.util.ListResourceBundle]> {}
            interface _FormatData_bn$$static extends ClassLike {
              new(): FormatData_bn;
            }
            let FormatData_bn: _FormatData_bn$$static;
            interface _FormatData_bn {
              _getContents(): any[][];
            }
            interface FormatData_bn extends CombineTypes<[_FormatData_bn, java.util.ListResourceBundle]> {}
            interface _FormatData_bn_IN$$static extends ClassLike {
              new(): FormatData_bn_IN;
            }
            let FormatData_bn_IN: _FormatData_bn_IN$$static;
            interface _FormatData_bn_IN {
              _getContents(): any[][];
            }
            interface FormatData_bn_IN extends CombineTypes<[_FormatData_bn_IN, java.util.ListResourceBundle]> {}
            interface _FormatData_bo$$static extends ClassLike {
              new(): FormatData_bo;
            }
            let FormatData_bo: _FormatData_bo$$static;
            interface _FormatData_bo {
              _getContents(): any[][];
            }
            interface FormatData_bo extends CombineTypes<[_FormatData_bo, java.util.ListResourceBundle]> {}
            interface _FormatData_bo_IN$$static extends ClassLike {
              new(): FormatData_bo_IN;
            }
            let FormatData_bo_IN: _FormatData_bo_IN$$static;
            interface _FormatData_bo_IN {
              _getContents(): any[][];
            }
            interface FormatData_bo_IN extends CombineTypes<[_FormatData_bo_IN, java.util.ListResourceBundle]> {}
            interface _FormatData_br$$static extends ClassLike {
              new(): FormatData_br;
            }
            let FormatData_br: _FormatData_br$$static;
            interface _FormatData_br {
              _getContents(): any[][];
            }
            interface FormatData_br extends CombineTypes<[_FormatData_br, java.util.ListResourceBundle]> {}
            interface _FormatData_brx$$static extends ClassLike {
              new(): FormatData_brx;
            }
            let FormatData_brx: _FormatData_brx$$static;
            interface _FormatData_brx {
              _getContents(): any[][];
            }
            interface FormatData_brx extends CombineTypes<[_FormatData_brx, java.util.ListResourceBundle]> {}
            interface _FormatData_bs$$static extends ClassLike {
              new(): FormatData_bs;
            }
            let FormatData_bs: _FormatData_bs$$static;
            interface _FormatData_bs {
              _getContents(): any[][];
            }
            interface FormatData_bs extends CombineTypes<[_FormatData_bs, java.util.ListResourceBundle]> {}
            interface _FormatData_bs_Cyrl$$static extends ClassLike {
              new(): FormatData_bs_Cyrl;
            }
            let FormatData_bs_Cyrl: _FormatData_bs_Cyrl$$static;
            interface _FormatData_bs_Cyrl {
              _getContents(): any[][];
            }
            interface FormatData_bs_Cyrl extends CombineTypes<[_FormatData_bs_Cyrl, java.util.ListResourceBundle]> {}
            interface _FormatData_ca$$static extends ClassLike {
              new(): FormatData_ca;
            }
            let FormatData_ca: _FormatData_ca$$static;
            interface _FormatData_ca {
              _getContents(): any[][];
            }
            interface FormatData_ca extends CombineTypes<[_FormatData_ca, java.util.ListResourceBundle]> {}
            interface _FormatData_ccp$$static extends ClassLike {
              new(): FormatData_ccp;
            }
            let FormatData_ccp: _FormatData_ccp$$static;
            interface _FormatData_ccp {
              _getContents(): any[][];
            }
            interface FormatData_ccp extends CombineTypes<[_FormatData_ccp, java.util.ListResourceBundle]> {}
            interface _FormatData_ce$$static extends ClassLike {
              new(): FormatData_ce;
            }
            let FormatData_ce: _FormatData_ce$$static;
            interface _FormatData_ce {
              _getContents(): any[][];
            }
            interface FormatData_ce extends CombineTypes<[_FormatData_ce, java.util.ListResourceBundle]> {}
            interface _FormatData_ceb$$static extends ClassLike {
              new(): FormatData_ceb;
            }
            let FormatData_ceb: _FormatData_ceb$$static;
            interface _FormatData_ceb {
              _getContents(): any[][];
            }
            interface FormatData_ceb extends CombineTypes<[_FormatData_ceb, java.util.ListResourceBundle]> {}
            interface _FormatData_cgg$$static extends ClassLike {
              new(): FormatData_cgg;
            }
            let FormatData_cgg: _FormatData_cgg$$static;
            interface _FormatData_cgg {
              _getContents(): any[][];
            }
            interface FormatData_cgg extends CombineTypes<[_FormatData_cgg, java.util.ListResourceBundle]> {}
            interface _FormatData_chr$$static extends ClassLike {
              new(): FormatData_chr;
            }
            let FormatData_chr: _FormatData_chr$$static;
            interface _FormatData_chr {
              _getContents(): any[][];
            }
            interface FormatData_chr extends CombineTypes<[_FormatData_chr, java.util.ListResourceBundle]> {}
            interface _FormatData_ckb$$static extends ClassLike {
              new(): FormatData_ckb;
            }
            let FormatData_ckb: _FormatData_ckb$$static;
            interface _FormatData_ckb {
              _getContents(): any[][];
            }
            interface FormatData_ckb extends CombineTypes<[_FormatData_ckb, java.util.ListResourceBundle]> {}
            interface _FormatData_ckb_IR$$static extends ClassLike {
              new(): FormatData_ckb_IR;
            }
            let FormatData_ckb_IR: _FormatData_ckb_IR$$static;
            interface _FormatData_ckb_IR {
              _getContents(): any[][];
            }
            interface FormatData_ckb_IR extends CombineTypes<[_FormatData_ckb_IR, java.util.ListResourceBundle]> {}
            interface _FormatData_cs$$static extends ClassLike {
              new(): FormatData_cs;
            }
            let FormatData_cs: _FormatData_cs$$static;
            interface _FormatData_cs {
              _getContents(): any[][];
            }
            interface FormatData_cs extends CombineTypes<[_FormatData_cs, java.util.ListResourceBundle]> {}
            interface _FormatData_cv$$static extends ClassLike {
              new(): FormatData_cv;
            }
            let FormatData_cv: _FormatData_cv$$static;
            interface _FormatData_cv {
              _getContents(): any[][];
            }
            interface FormatData_cv extends CombineTypes<[_FormatData_cv, java.util.ListResourceBundle]> {}
            interface _FormatData_cy$$static extends ClassLike {
              new(): FormatData_cy;
            }
            let FormatData_cy: _FormatData_cy$$static;
            interface _FormatData_cy {
              _getContents(): any[][];
            }
            interface FormatData_cy extends CombineTypes<[_FormatData_cy, java.util.ListResourceBundle]> {}
            interface _FormatData_da$$static extends ClassLike {
              new(): FormatData_da;
            }
            let FormatData_da: _FormatData_da$$static;
            interface _FormatData_da {
              _getContents(): any[][];
            }
            interface FormatData_da extends CombineTypes<[_FormatData_da, java.util.ListResourceBundle]> {}
            interface _FormatData_dav$$static extends ClassLike {
              new(): FormatData_dav;
            }
            let FormatData_dav: _FormatData_dav$$static;
            interface _FormatData_dav {
              _getContents(): any[][];
            }
            interface FormatData_dav extends CombineTypes<[_FormatData_dav, java.util.ListResourceBundle]> {}
            interface _FormatData_de$$static extends ClassLike {
              new(): FormatData_de;
            }
            let FormatData_de: _FormatData_de$$static;
            interface _FormatData_de {
              _getContents(): any[][];
            }
            interface FormatData_de extends CombineTypes<[_FormatData_de, java.util.ListResourceBundle]> {}
            interface _FormatData_de_AT$$static extends ClassLike {
              new(): FormatData_de_AT;
            }
            let FormatData_de_AT: _FormatData_de_AT$$static;
            interface _FormatData_de_AT {
              _getContents(): any[][];
            }
            interface FormatData_de_AT extends CombineTypes<[_FormatData_de_AT, java.util.ListResourceBundle]> {}
            interface _FormatData_de_CH$$static extends ClassLike {
              new(): FormatData_de_CH;
            }
            let FormatData_de_CH: _FormatData_de_CH$$static;
            interface _FormatData_de_CH {
              _getContents(): any[][];
            }
            interface FormatData_de_CH extends CombineTypes<[_FormatData_de_CH, java.util.ListResourceBundle]> {}
            interface _FormatData_de_IT$$static extends ClassLike {
              new(): FormatData_de_IT;
            }
            let FormatData_de_IT: _FormatData_de_IT$$static;
            interface _FormatData_de_IT {
              _getContents(): any[][];
            }
            interface FormatData_de_IT extends CombineTypes<[_FormatData_de_IT, java.util.ListResourceBundle]> {}
            interface _FormatData_de_LI$$static extends ClassLike {
              new(): FormatData_de_LI;
            }
            let FormatData_de_LI: _FormatData_de_LI$$static;
            interface _FormatData_de_LI {
              _getContents(): any[][];
            }
            interface FormatData_de_LI extends CombineTypes<[_FormatData_de_LI, java.util.ListResourceBundle]> {}
            interface _FormatData_de_LU$$static extends ClassLike {
              new(): FormatData_de_LU;
            }
            let FormatData_de_LU: _FormatData_de_LU$$static;
            interface _FormatData_de_LU {
              _getContents(): any[][];
            }
            interface FormatData_de_LU extends CombineTypes<[_FormatData_de_LU, java.util.ListResourceBundle]> {}
            interface _FormatData_dje$$static extends ClassLike {
              new(): FormatData_dje;
            }
            let FormatData_dje: _FormatData_dje$$static;
            interface _FormatData_dje {
              _getContents(): any[][];
            }
            interface FormatData_dje extends CombineTypes<[_FormatData_dje, java.util.ListResourceBundle]> {}
            interface _FormatData_doi$$static extends ClassLike {
              new(): FormatData_doi;
            }
            let FormatData_doi: _FormatData_doi$$static;
            interface _FormatData_doi {
              _getContents(): any[][];
            }
            interface FormatData_doi extends CombineTypes<[_FormatData_doi, java.util.ListResourceBundle]> {}
            interface _FormatData_dsb$$static extends ClassLike {
              new(): FormatData_dsb;
            }
            let FormatData_dsb: _FormatData_dsb$$static;
            interface _FormatData_dsb {
              _getContents(): any[][];
            }
            interface FormatData_dsb extends CombineTypes<[_FormatData_dsb, java.util.ListResourceBundle]> {}
            interface _FormatData_dua$$static extends ClassLike {
              new(): FormatData_dua;
            }
            let FormatData_dua: _FormatData_dua$$static;
            interface _FormatData_dua {
              _getContents(): any[][];
            }
            interface FormatData_dua extends CombineTypes<[_FormatData_dua, java.util.ListResourceBundle]> {}
            interface _FormatData_dyo$$static extends ClassLike {
              new(): FormatData_dyo;
            }
            let FormatData_dyo: _FormatData_dyo$$static;
            interface _FormatData_dyo {
              _getContents(): any[][];
            }
            interface FormatData_dyo extends CombineTypes<[_FormatData_dyo, java.util.ListResourceBundle]> {}
            interface _FormatData_dz$$static extends ClassLike {
              new(): FormatData_dz;
            }
            let FormatData_dz: _FormatData_dz$$static;
            interface _FormatData_dz {
              _getContents(): any[][];
            }
            interface FormatData_dz extends CombineTypes<[_FormatData_dz, java.util.ListResourceBundle]> {}
            interface _FormatData_ebu$$static extends ClassLike {
              new(): FormatData_ebu;
            }
            let FormatData_ebu: _FormatData_ebu$$static;
            interface _FormatData_ebu {
              _getContents(): any[][];
            }
            interface FormatData_ebu extends CombineTypes<[_FormatData_ebu, java.util.ListResourceBundle]> {}
            interface _FormatData_ee$$static extends ClassLike {
              new(): FormatData_ee;
            }
            let FormatData_ee: _FormatData_ee$$static;
            interface _FormatData_ee {
              _getContents(): any[][];
            }
            interface FormatData_ee extends CombineTypes<[_FormatData_ee, java.util.ListResourceBundle]> {}
            interface _FormatData_ee_TG$$static extends ClassLike {
              new(): FormatData_ee_TG;
            }
            let FormatData_ee_TG: _FormatData_ee_TG$$static;
            interface _FormatData_ee_TG {
              _getContents(): any[][];
            }
            interface FormatData_ee_TG extends CombineTypes<[_FormatData_ee_TG, java.util.ListResourceBundle]> {}
            interface _FormatData_el$$static extends ClassLike {
              new(): FormatData_el;
            }
            let FormatData_el: _FormatData_el$$static;
            interface _FormatData_el {
              _getContents(): any[][];
            }
            interface FormatData_el extends CombineTypes<[_FormatData_el, java.util.ListResourceBundle]> {}
            interface _FormatData_el_POLYTON$$static extends ClassLike {
              new(): FormatData_el_POLYTON;
            }
            let FormatData_el_POLYTON: _FormatData_el_POLYTON$$static;
            interface _FormatData_el_POLYTON {
              _getContents(): any[][];
            }
            interface FormatData_el_POLYTON extends CombineTypes<[_FormatData_el_POLYTON, java.util.ListResourceBundle]> {}
            interface _FormatData_en_001$$static extends ClassLike {
              new(): FormatData_en_001;
            }
            let FormatData_en_001: _FormatData_en_001$$static;
            interface _FormatData_en_001 {
              _getContents(): any[][];
            }
            interface FormatData_en_001 extends CombineTypes<[_FormatData_en_001, java.util.ListResourceBundle]> {}
            interface _FormatData_en_150$$static extends ClassLike {
              new(): FormatData_en_150;
            }
            let FormatData_en_150: _FormatData_en_150$$static;
            interface _FormatData_en_150 {
              _getContents(): any[][];
            }
            interface FormatData_en_150 extends CombineTypes<[_FormatData_en_150, java.util.ListResourceBundle]> {}
            interface _FormatData_en_AE$$static extends ClassLike {
              new(): FormatData_en_AE;
            }
            let FormatData_en_AE: _FormatData_en_AE$$static;
            interface _FormatData_en_AE {
              _getContents(): any[][];
            }
            interface FormatData_en_AE extends CombineTypes<[_FormatData_en_AE, java.util.ListResourceBundle]> {}
            interface _FormatData_en_AI$$static extends ClassLike {
              new(): FormatData_en_AI;
            }
            let FormatData_en_AI: _FormatData_en_AI$$static;
            interface _FormatData_en_AI {
              _getContents(): any[][];
            }
            interface FormatData_en_AI extends CombineTypes<[_FormatData_en_AI, java.util.ListResourceBundle]> {}
            interface _FormatData_en_AT$$static extends ClassLike {
              new(): FormatData_en_AT;
            }
            let FormatData_en_AT: _FormatData_en_AT$$static;
            interface _FormatData_en_AT {
              _getContents(): any[][];
            }
            interface FormatData_en_AT extends CombineTypes<[_FormatData_en_AT, java.util.ListResourceBundle]> {}
            interface _FormatData_en_AU$$static extends ClassLike {
              new(): FormatData_en_AU;
            }
            let FormatData_en_AU: _FormatData_en_AU$$static;
            interface _FormatData_en_AU {
              _getContents(): any[][];
            }
            interface FormatData_en_AU extends CombineTypes<[_FormatData_en_AU, java.util.ListResourceBundle]> {}
            interface _FormatData_en_BE$$static extends ClassLike {
              new(): FormatData_en_BE;
            }
            let FormatData_en_BE: _FormatData_en_BE$$static;
            interface _FormatData_en_BE {
              _getContents(): any[][];
            }
            interface FormatData_en_BE extends CombineTypes<[_FormatData_en_BE, java.util.ListResourceBundle]> {}
            interface _FormatData_en_BI$$static extends ClassLike {
              new(): FormatData_en_BI;
            }
            let FormatData_en_BI: _FormatData_en_BI$$static;
            interface _FormatData_en_BI {
              _getContents(): any[][];
            }
            interface FormatData_en_BI extends CombineTypes<[_FormatData_en_BI, java.util.ListResourceBundle]> {}
            interface _FormatData_en_BW$$static extends ClassLike {
              new(): FormatData_en_BW;
            }
            let FormatData_en_BW: _FormatData_en_BW$$static;
            interface _FormatData_en_BW {
              _getContents(): any[][];
            }
            interface FormatData_en_BW extends CombineTypes<[_FormatData_en_BW, java.util.ListResourceBundle]> {}
            interface _FormatData_en_BZ$$static extends ClassLike {
              new(): FormatData_en_BZ;
            }
            let FormatData_en_BZ: _FormatData_en_BZ$$static;
            interface _FormatData_en_BZ {
              _getContents(): any[][];
            }
            interface FormatData_en_BZ extends CombineTypes<[_FormatData_en_BZ, java.util.ListResourceBundle]> {}
            interface _FormatData_en_CA$$static extends ClassLike {
              new(): FormatData_en_CA;
            }
            let FormatData_en_CA: _FormatData_en_CA$$static;
            interface _FormatData_en_CA {
              _getContents(): any[][];
            }
            interface FormatData_en_CA extends CombineTypes<[_FormatData_en_CA, java.util.ListResourceBundle]> {}
            interface _FormatData_en_CC$$static extends ClassLike {
              new(): FormatData_en_CC;
            }
            let FormatData_en_CC: _FormatData_en_CC$$static;
            interface _FormatData_en_CC {
              _getContents(): any[][];
            }
            interface FormatData_en_CC extends CombineTypes<[_FormatData_en_CC, java.util.ListResourceBundle]> {}
            interface _FormatData_en_CH$$static extends ClassLike {
              new(): FormatData_en_CH;
            }
            let FormatData_en_CH: _FormatData_en_CH$$static;
            interface _FormatData_en_CH {
              _getContents(): any[][];
            }
            interface FormatData_en_CH extends CombineTypes<[_FormatData_en_CH, java.util.ListResourceBundle]> {}
            interface _FormatData_en_CK$$static extends ClassLike {
              new(): FormatData_en_CK;
            }
            let FormatData_en_CK: _FormatData_en_CK$$static;
            interface _FormatData_en_CK {
              _getContents(): any[][];
            }
            interface FormatData_en_CK extends CombineTypes<[_FormatData_en_CK, java.util.ListResourceBundle]> {}
            interface _FormatData_en_CM$$static extends ClassLike {
              new(): FormatData_en_CM;
            }
            let FormatData_en_CM: _FormatData_en_CM$$static;
            interface _FormatData_en_CM {
              _getContents(): any[][];
            }
            interface FormatData_en_CM extends CombineTypes<[_FormatData_en_CM, java.util.ListResourceBundle]> {}
            interface _FormatData_en_CX$$static extends ClassLike {
              new(): FormatData_en_CX;
            }
            let FormatData_en_CX: _FormatData_en_CX$$static;
            interface _FormatData_en_CX {
              _getContents(): any[][];
            }
            interface FormatData_en_CX extends CombineTypes<[_FormatData_en_CX, java.util.ListResourceBundle]> {}
            interface _FormatData_en_DE$$static extends ClassLike {
              new(): FormatData_en_DE;
            }
            let FormatData_en_DE: _FormatData_en_DE$$static;
            interface _FormatData_en_DE {
              _getContents(): any[][];
            }
            interface FormatData_en_DE extends CombineTypes<[_FormatData_en_DE, java.util.ListResourceBundle]> {}
            interface _FormatData_en_DG$$static extends ClassLike {
              new(): FormatData_en_DG;
            }
            let FormatData_en_DG: _FormatData_en_DG$$static;
            interface _FormatData_en_DG {
              _getContents(): any[][];
            }
            interface FormatData_en_DG extends CombineTypes<[_FormatData_en_DG, java.util.ListResourceBundle]> {}
            interface _FormatData_en_DK$$static extends ClassLike {
              new(): FormatData_en_DK;
            }
            let FormatData_en_DK: _FormatData_en_DK$$static;
            interface _FormatData_en_DK {
              _getContents(): any[][];
            }
            interface FormatData_en_DK extends CombineTypes<[_FormatData_en_DK, java.util.ListResourceBundle]> {}
            interface _FormatData_en_FI$$static extends ClassLike {
              new(): FormatData_en_FI;
            }
            let FormatData_en_FI: _FormatData_en_FI$$static;
            interface _FormatData_en_FI {
              _getContents(): any[][];
            }
            interface FormatData_en_FI extends CombineTypes<[_FormatData_en_FI, java.util.ListResourceBundle]> {}
            interface _FormatData_en_FK$$static extends ClassLike {
              new(): FormatData_en_FK;
            }
            let FormatData_en_FK: _FormatData_en_FK$$static;
            interface _FormatData_en_FK {
              _getContents(): any[][];
            }
            interface FormatData_en_FK extends CombineTypes<[_FormatData_en_FK, java.util.ListResourceBundle]> {}
            interface _FormatData_en_GB$$static extends ClassLike {
              new(): FormatData_en_GB;
            }
            let FormatData_en_GB: _FormatData_en_GB$$static;
            interface _FormatData_en_GB {
              _getContents(): any[][];
            }
            interface FormatData_en_GB extends CombineTypes<[_FormatData_en_GB, java.util.ListResourceBundle]> {}
            interface _FormatData_en_GG$$static extends ClassLike {
              new(): FormatData_en_GG;
            }
            let FormatData_en_GG: _FormatData_en_GG$$static;
            interface _FormatData_en_GG {
              _getContents(): any[][];
            }
            interface FormatData_en_GG extends CombineTypes<[_FormatData_en_GG, java.util.ListResourceBundle]> {}
            interface _FormatData_en_GI$$static extends ClassLike {
              new(): FormatData_en_GI;
            }
            let FormatData_en_GI: _FormatData_en_GI$$static;
            interface _FormatData_en_GI {
              _getContents(): any[][];
            }
            interface FormatData_en_GI extends CombineTypes<[_FormatData_en_GI, java.util.ListResourceBundle]> {}
            interface _FormatData_en_HK$$static extends ClassLike {
              new(): FormatData_en_HK;
            }
            let FormatData_en_HK: _FormatData_en_HK$$static;
            interface _FormatData_en_HK {
              _getContents(): any[][];
            }
            interface FormatData_en_HK extends CombineTypes<[_FormatData_en_HK, java.util.ListResourceBundle]> {}
            interface _FormatData_en_IE$$static extends ClassLike {
              new(): FormatData_en_IE;
            }
            let FormatData_en_IE: _FormatData_en_IE$$static;
            interface _FormatData_en_IE {
              _getContents(): any[][];
            }
            interface FormatData_en_IE extends CombineTypes<[_FormatData_en_IE, java.util.ListResourceBundle]> {}
            interface _FormatData_en_IL$$static extends ClassLike {
              new(): FormatData_en_IL;
            }
            let FormatData_en_IL: _FormatData_en_IL$$static;
            interface _FormatData_en_IL {
              _getContents(): any[][];
            }
            interface FormatData_en_IL extends CombineTypes<[_FormatData_en_IL, java.util.ListResourceBundle]> {}
            interface _FormatData_en_IM$$static extends ClassLike {
              new(): FormatData_en_IM;
            }
            let FormatData_en_IM: _FormatData_en_IM$$static;
            interface _FormatData_en_IM {
              _getContents(): any[][];
            }
            interface FormatData_en_IM extends CombineTypes<[_FormatData_en_IM, java.util.ListResourceBundle]> {}
            interface _FormatData_en_IN$$static extends ClassLike {
              new(): FormatData_en_IN;
            }
            let FormatData_en_IN: _FormatData_en_IN$$static;
            interface _FormatData_en_IN {
              _getContents(): any[][];
            }
            interface FormatData_en_IN extends CombineTypes<[_FormatData_en_IN, java.util.ListResourceBundle]> {}
            interface _FormatData_en_IO$$static extends ClassLike {
              new(): FormatData_en_IO;
            }
            let FormatData_en_IO: _FormatData_en_IO$$static;
            interface _FormatData_en_IO {
              _getContents(): any[][];
            }
            interface FormatData_en_IO extends CombineTypes<[_FormatData_en_IO, java.util.ListResourceBundle]> {}
            interface _FormatData_en_JE$$static extends ClassLike {
              new(): FormatData_en_JE;
            }
            let FormatData_en_JE: _FormatData_en_JE$$static;
            interface _FormatData_en_JE {
              _getContents(): any[][];
            }
            interface FormatData_en_JE extends CombineTypes<[_FormatData_en_JE, java.util.ListResourceBundle]> {}
            interface _FormatData_en_KE$$static extends ClassLike {
              new(): FormatData_en_KE;
            }
            let FormatData_en_KE: _FormatData_en_KE$$static;
            interface _FormatData_en_KE {
              _getContents(): any[][];
            }
            interface FormatData_en_KE extends CombineTypes<[_FormatData_en_KE, java.util.ListResourceBundle]> {}
            interface _FormatData_en_MG$$static extends ClassLike {
              new(): FormatData_en_MG;
            }
            let FormatData_en_MG: _FormatData_en_MG$$static;
            interface _FormatData_en_MG {
              _getContents(): any[][];
            }
            interface FormatData_en_MG extends CombineTypes<[_FormatData_en_MG, java.util.ListResourceBundle]> {}
            interface _FormatData_en_MS$$static extends ClassLike {
              new(): FormatData_en_MS;
            }
            let FormatData_en_MS: _FormatData_en_MS$$static;
            interface _FormatData_en_MS {
              _getContents(): any[][];
            }
            interface FormatData_en_MS extends CombineTypes<[_FormatData_en_MS, java.util.ListResourceBundle]> {}
            interface _FormatData_en_MT$$static extends ClassLike {
              new(): FormatData_en_MT;
            }
            let FormatData_en_MT: _FormatData_en_MT$$static;
            interface _FormatData_en_MT {
              _getContents(): any[][];
            }
            interface FormatData_en_MT extends CombineTypes<[_FormatData_en_MT, java.util.ListResourceBundle]> {}
            interface _FormatData_en_MU$$static extends ClassLike {
              new(): FormatData_en_MU;
            }
            let FormatData_en_MU: _FormatData_en_MU$$static;
            interface _FormatData_en_MU {
              _getContents(): any[][];
            }
            interface FormatData_en_MU extends CombineTypes<[_FormatData_en_MU, java.util.ListResourceBundle]> {}
            interface _FormatData_en_MV$$static extends ClassLike {
              new(): FormatData_en_MV;
            }
            let FormatData_en_MV: _FormatData_en_MV$$static;
            interface _FormatData_en_MV {
              _getContents(): any[][];
            }
            interface FormatData_en_MV extends CombineTypes<[_FormatData_en_MV, java.util.ListResourceBundle]> {}
            interface _FormatData_en_NF$$static extends ClassLike {
              new(): FormatData_en_NF;
            }
            let FormatData_en_NF: _FormatData_en_NF$$static;
            interface _FormatData_en_NF {
              _getContents(): any[][];
            }
            interface FormatData_en_NF extends CombineTypes<[_FormatData_en_NF, java.util.ListResourceBundle]> {}
            interface _FormatData_en_NG$$static extends ClassLike {
              new(): FormatData_en_NG;
            }
            let FormatData_en_NG: _FormatData_en_NG$$static;
            interface _FormatData_en_NG {
              _getContents(): any[][];
            }
            interface FormatData_en_NG extends CombineTypes<[_FormatData_en_NG, java.util.ListResourceBundle]> {}
            interface _FormatData_en_NL$$static extends ClassLike {
              new(): FormatData_en_NL;
            }
            let FormatData_en_NL: _FormatData_en_NL$$static;
            interface _FormatData_en_NL {
              _getContents(): any[][];
            }
            interface FormatData_en_NL extends CombineTypes<[_FormatData_en_NL, java.util.ListResourceBundle]> {}
            interface _FormatData_en_NR$$static extends ClassLike {
              new(): FormatData_en_NR;
            }
            let FormatData_en_NR: _FormatData_en_NR$$static;
            interface _FormatData_en_NR {
              _getContents(): any[][];
            }
            interface FormatData_en_NR extends CombineTypes<[_FormatData_en_NR, java.util.ListResourceBundle]> {}
            interface _FormatData_en_NU$$static extends ClassLike {
              new(): FormatData_en_NU;
            }
            let FormatData_en_NU: _FormatData_en_NU$$static;
            interface _FormatData_en_NU {
              _getContents(): any[][];
            }
            interface FormatData_en_NU extends CombineTypes<[_FormatData_en_NU, java.util.ListResourceBundle]> {}
            interface _FormatData_en_NZ$$static extends ClassLike {
              new(): FormatData_en_NZ;
            }
            let FormatData_en_NZ: _FormatData_en_NZ$$static;
            interface _FormatData_en_NZ {
              _getContents(): any[][];
            }
            interface FormatData_en_NZ extends CombineTypes<[_FormatData_en_NZ, java.util.ListResourceBundle]> {}
            interface _FormatData_en_PK$$static extends ClassLike {
              new(): FormatData_en_PK;
            }
            let FormatData_en_PK: _FormatData_en_PK$$static;
            interface _FormatData_en_PK {
              _getContents(): any[][];
            }
            interface FormatData_en_PK extends CombineTypes<[_FormatData_en_PK, java.util.ListResourceBundle]> {}
            interface _FormatData_en_PN$$static extends ClassLike {
              new(): FormatData_en_PN;
            }
            let FormatData_en_PN: _FormatData_en_PN$$static;
            interface _FormatData_en_PN {
              _getContents(): any[][];
            }
            interface FormatData_en_PN extends CombineTypes<[_FormatData_en_PN, java.util.ListResourceBundle]> {}
            interface _FormatData_en_RW$$static extends ClassLike {
              new(): FormatData_en_RW;
            }
            let FormatData_en_RW: _FormatData_en_RW$$static;
            interface _FormatData_en_RW {
              _getContents(): any[][];
            }
            interface FormatData_en_RW extends CombineTypes<[_FormatData_en_RW, java.util.ListResourceBundle]> {}
            interface _FormatData_en_SC$$static extends ClassLike {
              new(): FormatData_en_SC;
            }
            let FormatData_en_SC: _FormatData_en_SC$$static;
            interface _FormatData_en_SC {
              _getContents(): any[][];
            }
            interface FormatData_en_SC extends CombineTypes<[_FormatData_en_SC, java.util.ListResourceBundle]> {}
            interface _FormatData_en_SE$$static extends ClassLike {
              new(): FormatData_en_SE;
            }
            let FormatData_en_SE: _FormatData_en_SE$$static;
            interface _FormatData_en_SE {
              _getContents(): any[][];
            }
            interface FormatData_en_SE extends CombineTypes<[_FormatData_en_SE, java.util.ListResourceBundle]> {}
            interface _FormatData_en_SG$$static extends ClassLike {
              new(): FormatData_en_SG;
            }
            let FormatData_en_SG: _FormatData_en_SG$$static;
            interface _FormatData_en_SG {
              _getContents(): any[][];
            }
            interface FormatData_en_SG extends CombineTypes<[_FormatData_en_SG, java.util.ListResourceBundle]> {}
            interface _FormatData_en_SH$$static extends ClassLike {
              new(): FormatData_en_SH;
            }
            let FormatData_en_SH: _FormatData_en_SH$$static;
            interface _FormatData_en_SH {
              _getContents(): any[][];
            }
            interface FormatData_en_SH extends CombineTypes<[_FormatData_en_SH, java.util.ListResourceBundle]> {}
            interface _FormatData_en_SI$$static extends ClassLike {
              new(): FormatData_en_SI;
            }
            let FormatData_en_SI: _FormatData_en_SI$$static;
            interface _FormatData_en_SI {
              _getContents(): any[][];
            }
            interface FormatData_en_SI extends CombineTypes<[_FormatData_en_SI, java.util.ListResourceBundle]> {}
            interface _FormatData_en_SX$$static extends ClassLike {
              new(): FormatData_en_SX;
            }
            let FormatData_en_SX: _FormatData_en_SX$$static;
            interface _FormatData_en_SX {
              _getContents(): any[][];
            }
            interface FormatData_en_SX extends CombineTypes<[_FormatData_en_SX, java.util.ListResourceBundle]> {}
            interface _FormatData_en_TK$$static extends ClassLike {
              new(): FormatData_en_TK;
            }
            let FormatData_en_TK: _FormatData_en_TK$$static;
            interface _FormatData_en_TK {
              _getContents(): any[][];
            }
            interface FormatData_en_TK extends CombineTypes<[_FormatData_en_TK, java.util.ListResourceBundle]> {}
            interface _FormatData_en_TV$$static extends ClassLike {
              new(): FormatData_en_TV;
            }
            let FormatData_en_TV: _FormatData_en_TV$$static;
            interface _FormatData_en_TV {
              _getContents(): any[][];
            }
            interface FormatData_en_TV extends CombineTypes<[_FormatData_en_TV, java.util.ListResourceBundle]> {}
            interface _FormatData_en_TZ$$static extends ClassLike {
              new(): FormatData_en_TZ;
            }
            let FormatData_en_TZ: _FormatData_en_TZ$$static;
            interface _FormatData_en_TZ {
              _getContents(): any[][];
            }
            interface FormatData_en_TZ extends CombineTypes<[_FormatData_en_TZ, java.util.ListResourceBundle]> {}
            interface _FormatData_en_UG$$static extends ClassLike {
              new(): FormatData_en_UG;
            }
            let FormatData_en_UG: _FormatData_en_UG$$static;
            interface _FormatData_en_UG {
              _getContents(): any[][];
            }
            interface FormatData_en_UG extends CombineTypes<[_FormatData_en_UG, java.util.ListResourceBundle]> {}
            interface _FormatData_en_ZA$$static extends ClassLike {
              new(): FormatData_en_ZA;
            }
            let FormatData_en_ZA: _FormatData_en_ZA$$static;
            interface _FormatData_en_ZA {
              _getContents(): any[][];
            }
            interface FormatData_en_ZA extends CombineTypes<[_FormatData_en_ZA, java.util.ListResourceBundle]> {}
            interface _FormatData_en_ZW$$static extends ClassLike {
              new(): FormatData_en_ZW;
            }
            let FormatData_en_ZW: _FormatData_en_ZW$$static;
            interface _FormatData_en_ZW {
              _getContents(): any[][];
            }
            interface FormatData_en_ZW extends CombineTypes<[_FormatData_en_ZW, java.util.ListResourceBundle]> {}
            interface _FormatData_eo$$static extends ClassLike {
              new(): FormatData_eo;
            }
            let FormatData_eo: _FormatData_eo$$static;
            interface _FormatData_eo {
              _getContents(): any[][];
            }
            interface FormatData_eo extends CombineTypes<[_FormatData_eo, java.util.ListResourceBundle]> {}
            interface _FormatData_es$$static extends ClassLike {
              new(): FormatData_es;
            }
            let FormatData_es: _FormatData_es$$static;
            interface _FormatData_es {
              _getContents(): any[][];
            }
            interface FormatData_es extends CombineTypes<[_FormatData_es, java.util.ListResourceBundle]> {}
            interface _FormatData_es_419$$static extends ClassLike {
              new(): FormatData_es_419;
            }
            let FormatData_es_419: _FormatData_es_419$$static;
            interface _FormatData_es_419 {
              _getContents(): any[][];
            }
            interface FormatData_es_419 extends CombineTypes<[_FormatData_es_419, java.util.ListResourceBundle]> {}
            interface _FormatData_es_AR$$static extends ClassLike {
              new(): FormatData_es_AR;
            }
            let FormatData_es_AR: _FormatData_es_AR$$static;
            interface _FormatData_es_AR {
              _getContents(): any[][];
            }
            interface FormatData_es_AR extends CombineTypes<[_FormatData_es_AR, java.util.ListResourceBundle]> {}
            interface _FormatData_es_BO$$static extends ClassLike {
              new(): FormatData_es_BO;
            }
            let FormatData_es_BO: _FormatData_es_BO$$static;
            interface _FormatData_es_BO {
              _getContents(): any[][];
            }
            interface FormatData_es_BO extends CombineTypes<[_FormatData_es_BO, java.util.ListResourceBundle]> {}
            interface _FormatData_es_CL$$static extends ClassLike {
              new(): FormatData_es_CL;
            }
            let FormatData_es_CL: _FormatData_es_CL$$static;
            interface _FormatData_es_CL {
              _getContents(): any[][];
            }
            interface FormatData_es_CL extends CombineTypes<[_FormatData_es_CL, java.util.ListResourceBundle]> {}
            interface _FormatData_es_CO$$static extends ClassLike {
              new(): FormatData_es_CO;
            }
            let FormatData_es_CO: _FormatData_es_CO$$static;
            interface _FormatData_es_CO {
              _getContents(): any[][];
            }
            interface FormatData_es_CO extends CombineTypes<[_FormatData_es_CO, java.util.ListResourceBundle]> {}
            interface _FormatData_es_CR$$static extends ClassLike {
              new(): FormatData_es_CR;
            }
            let FormatData_es_CR: _FormatData_es_CR$$static;
            interface _FormatData_es_CR {
              _getContents(): any[][];
            }
            interface FormatData_es_CR extends CombineTypes<[_FormatData_es_CR, java.util.ListResourceBundle]> {}
            interface _FormatData_es_DO$$static extends ClassLike {
              new(): FormatData_es_DO;
            }
            let FormatData_es_DO: _FormatData_es_DO$$static;
            interface _FormatData_es_DO {
              _getContents(): any[][];
            }
            interface FormatData_es_DO extends CombineTypes<[_FormatData_es_DO, java.util.ListResourceBundle]> {}
            interface _FormatData_es_EC$$static extends ClassLike {
              new(): FormatData_es_EC;
            }
            let FormatData_es_EC: _FormatData_es_EC$$static;
            interface _FormatData_es_EC {
              _getContents(): any[][];
            }
            interface FormatData_es_EC extends CombineTypes<[_FormatData_es_EC, java.util.ListResourceBundle]> {}
            interface _FormatData_es_GQ$$static extends ClassLike {
              new(): FormatData_es_GQ;
            }
            let FormatData_es_GQ: _FormatData_es_GQ$$static;
            interface _FormatData_es_GQ {
              _getContents(): any[][];
            }
            interface FormatData_es_GQ extends CombineTypes<[_FormatData_es_GQ, java.util.ListResourceBundle]> {}
            interface _FormatData_es_GT$$static extends ClassLike {
              new(): FormatData_es_GT;
            }
            let FormatData_es_GT: _FormatData_es_GT$$static;
            interface _FormatData_es_GT {
              _getContents(): any[][];
            }
            interface FormatData_es_GT extends CombineTypes<[_FormatData_es_GT, java.util.ListResourceBundle]> {}
            interface _FormatData_es_HN$$static extends ClassLike {
              new(): FormatData_es_HN;
            }
            let FormatData_es_HN: _FormatData_es_HN$$static;
            interface _FormatData_es_HN {
              _getContents(): any[][];
            }
            interface FormatData_es_HN extends CombineTypes<[_FormatData_es_HN, java.util.ListResourceBundle]> {}
            interface _FormatData_es_MX$$static extends ClassLike {
              new(): FormatData_es_MX;
            }
            let FormatData_es_MX: _FormatData_es_MX$$static;
            interface _FormatData_es_MX {
              _getContents(): any[][];
            }
            interface FormatData_es_MX extends CombineTypes<[_FormatData_es_MX, java.util.ListResourceBundle]> {}
            interface _FormatData_es_PA$$static extends ClassLike {
              new(): FormatData_es_PA;
            }
            let FormatData_es_PA: _FormatData_es_PA$$static;
            interface _FormatData_es_PA {
              _getContents(): any[][];
            }
            interface FormatData_es_PA extends CombineTypes<[_FormatData_es_PA, java.util.ListResourceBundle]> {}
            interface _FormatData_es_PE$$static extends ClassLike {
              new(): FormatData_es_PE;
            }
            let FormatData_es_PE: _FormatData_es_PE$$static;
            interface _FormatData_es_PE {
              _getContents(): any[][];
            }
            interface FormatData_es_PE extends CombineTypes<[_FormatData_es_PE, java.util.ListResourceBundle]> {}
            interface _FormatData_es_PH$$static extends ClassLike {
              new(): FormatData_es_PH;
            }
            let FormatData_es_PH: _FormatData_es_PH$$static;
            interface _FormatData_es_PH {
              _getContents(): any[][];
            }
            interface FormatData_es_PH extends CombineTypes<[_FormatData_es_PH, java.util.ListResourceBundle]> {}
            interface _FormatData_es_PR$$static extends ClassLike {
              new(): FormatData_es_PR;
            }
            let FormatData_es_PR: _FormatData_es_PR$$static;
            interface _FormatData_es_PR {
              _getContents(): any[][];
            }
            interface FormatData_es_PR extends CombineTypes<[_FormatData_es_PR, java.util.ListResourceBundle]> {}
            interface _FormatData_es_PY$$static extends ClassLike {
              new(): FormatData_es_PY;
            }
            let FormatData_es_PY: _FormatData_es_PY$$static;
            interface _FormatData_es_PY {
              _getContents(): any[][];
            }
            interface FormatData_es_PY extends CombineTypes<[_FormatData_es_PY, java.util.ListResourceBundle]> {}
            interface _FormatData_es_SV$$static extends ClassLike {
              new(): FormatData_es_SV;
            }
            let FormatData_es_SV: _FormatData_es_SV$$static;
            interface _FormatData_es_SV {
              _getContents(): any[][];
            }
            interface FormatData_es_SV extends CombineTypes<[_FormatData_es_SV, java.util.ListResourceBundle]> {}
            interface _FormatData_es_US$$static extends ClassLike {
              new(): FormatData_es_US;
            }
            let FormatData_es_US: _FormatData_es_US$$static;
            interface _FormatData_es_US {
              _getContents(): any[][];
            }
            interface FormatData_es_US extends CombineTypes<[_FormatData_es_US, java.util.ListResourceBundle]> {}
            interface _FormatData_es_UY$$static extends ClassLike {
              new(): FormatData_es_UY;
            }
            let FormatData_es_UY: _FormatData_es_UY$$static;
            interface _FormatData_es_UY {
              _getContents(): any[][];
            }
            interface FormatData_es_UY extends CombineTypes<[_FormatData_es_UY, java.util.ListResourceBundle]> {}
            interface _FormatData_es_VE$$static extends ClassLike {
              new(): FormatData_es_VE;
            }
            let FormatData_es_VE: _FormatData_es_VE$$static;
            interface _FormatData_es_VE {
              _getContents(): any[][];
            }
            interface FormatData_es_VE extends CombineTypes<[_FormatData_es_VE, java.util.ListResourceBundle]> {}
            interface _FormatData_et$$static extends ClassLike {
              new(): FormatData_et;
            }
            let FormatData_et: _FormatData_et$$static;
            interface _FormatData_et {
              _getContents(): any[][];
            }
            interface FormatData_et extends CombineTypes<[_FormatData_et, java.util.ListResourceBundle]> {}
            interface _FormatData_eu$$static extends ClassLike {
              new(): FormatData_eu;
            }
            let FormatData_eu: _FormatData_eu$$static;
            interface _FormatData_eu {
              _getContents(): any[][];
            }
            interface FormatData_eu extends CombineTypes<[_FormatData_eu, java.util.ListResourceBundle]> {}
            interface _FormatData_ewo$$static extends ClassLike {
              new(): FormatData_ewo;
            }
            let FormatData_ewo: _FormatData_ewo$$static;
            interface _FormatData_ewo {
              _getContents(): any[][];
            }
            interface FormatData_ewo extends CombineTypes<[_FormatData_ewo, java.util.ListResourceBundle]> {}
            interface _FormatData_fa$$static extends ClassLike {
              new(): FormatData_fa;
            }
            let FormatData_fa: _FormatData_fa$$static;
            interface _FormatData_fa {
              _getContents(): any[][];
            }
            interface FormatData_fa extends CombineTypes<[_FormatData_fa, java.util.ListResourceBundle]> {}
            interface _FormatData_fa_AF$$static extends ClassLike {
              new(): FormatData_fa_AF;
            }
            let FormatData_fa_AF: _FormatData_fa_AF$$static;
            interface _FormatData_fa_AF {
              _getContents(): any[][];
            }
            interface FormatData_fa_AF extends CombineTypes<[_FormatData_fa_AF, java.util.ListResourceBundle]> {}
            interface _FormatData_ff$$static extends ClassLike {
              new(): FormatData_ff;
            }
            let FormatData_ff: _FormatData_ff$$static;
            interface _FormatData_ff {
              _getContents(): any[][];
            }
            interface FormatData_ff extends CombineTypes<[_FormatData_ff, java.util.ListResourceBundle]> {}
            interface _FormatData_ff_Adlm$$static extends ClassLike {
              new(): FormatData_ff_Adlm;
            }
            let FormatData_ff_Adlm: _FormatData_ff_Adlm$$static;
            interface _FormatData_ff_Adlm {
              _getContents(): any[][];
            }
            interface FormatData_ff_Adlm extends CombineTypes<[_FormatData_ff_Adlm, java.util.ListResourceBundle]> {}
            interface _FormatData_ff_Adlm_GH$$static extends ClassLike {
              new(): FormatData_ff_Adlm_GH;
            }
            let FormatData_ff_Adlm_GH: _FormatData_ff_Adlm_GH$$static;
            interface _FormatData_ff_Adlm_GH {
              _getContents(): any[][];
            }
            interface FormatData_ff_Adlm_GH extends CombineTypes<[_FormatData_ff_Adlm_GH, java.util.ListResourceBundle]> {}
            interface _FormatData_ff_Adlm_GM$$static extends ClassLike {
              new(): FormatData_ff_Adlm_GM;
            }
            let FormatData_ff_Adlm_GM: _FormatData_ff_Adlm_GM$$static;
            interface _FormatData_ff_Adlm_GM {
              _getContents(): any[][];
            }
            interface FormatData_ff_Adlm_GM extends CombineTypes<[_FormatData_ff_Adlm_GM, java.util.ListResourceBundle]> {}
            interface _FormatData_ff_Adlm_LR$$static extends ClassLike {
              new(): FormatData_ff_Adlm_LR;
            }
            let FormatData_ff_Adlm_LR: _FormatData_ff_Adlm_LR$$static;
            interface _FormatData_ff_Adlm_LR {
              _getContents(): any[][];
            }
            interface FormatData_ff_Adlm_LR extends CombineTypes<[_FormatData_ff_Adlm_LR, java.util.ListResourceBundle]> {}
            interface _FormatData_ff_Adlm_MR$$static extends ClassLike {
              new(): FormatData_ff_Adlm_MR;
            }
            let FormatData_ff_Adlm_MR: _FormatData_ff_Adlm_MR$$static;
            interface _FormatData_ff_Adlm_MR {
              _getContents(): any[][];
            }
            interface FormatData_ff_Adlm_MR extends CombineTypes<[_FormatData_ff_Adlm_MR, java.util.ListResourceBundle]> {}
            interface _FormatData_ff_Adlm_SL$$static extends ClassLike {
              new(): FormatData_ff_Adlm_SL;
            }
            let FormatData_ff_Adlm_SL: _FormatData_ff_Adlm_SL$$static;
            interface _FormatData_ff_Adlm_SL {
              _getContents(): any[][];
            }
            interface FormatData_ff_Adlm_SL extends CombineTypes<[_FormatData_ff_Adlm_SL, java.util.ListResourceBundle]> {}
            interface _FormatData_ff_Latn_GH$$static extends ClassLike {
              new(): FormatData_ff_Latn_GH;
            }
            let FormatData_ff_Latn_GH: _FormatData_ff_Latn_GH$$static;
            interface _FormatData_ff_Latn_GH {
              _getContents(): any[][];
            }
            interface FormatData_ff_Latn_GH extends CombineTypes<[_FormatData_ff_Latn_GH, java.util.ListResourceBundle]> {}
            interface _FormatData_ff_Latn_GM$$static extends ClassLike {
              new(): FormatData_ff_Latn_GM;
            }
            let FormatData_ff_Latn_GM: _FormatData_ff_Latn_GM$$static;
            interface _FormatData_ff_Latn_GM {
              _getContents(): any[][];
            }
            interface FormatData_ff_Latn_GM extends CombineTypes<[_FormatData_ff_Latn_GM, java.util.ListResourceBundle]> {}
            interface _FormatData_ff_Latn_LR$$static extends ClassLike {
              new(): FormatData_ff_Latn_LR;
            }
            let FormatData_ff_Latn_LR: _FormatData_ff_Latn_LR$$static;
            interface _FormatData_ff_Latn_LR {
              _getContents(): any[][];
            }
            interface FormatData_ff_Latn_LR extends CombineTypes<[_FormatData_ff_Latn_LR, java.util.ListResourceBundle]> {}
            interface _FormatData_ff_Latn_MR$$static extends ClassLike {
              new(): FormatData_ff_Latn_MR;
            }
            let FormatData_ff_Latn_MR: _FormatData_ff_Latn_MR$$static;
            interface _FormatData_ff_Latn_MR {
              _getContents(): any[][];
            }
            interface FormatData_ff_Latn_MR extends CombineTypes<[_FormatData_ff_Latn_MR, java.util.ListResourceBundle]> {}
            interface _FormatData_ff_Latn_SL$$static extends ClassLike {
              new(): FormatData_ff_Latn_SL;
            }
            let FormatData_ff_Latn_SL: _FormatData_ff_Latn_SL$$static;
            interface _FormatData_ff_Latn_SL {
              _getContents(): any[][];
            }
            interface FormatData_ff_Latn_SL extends CombineTypes<[_FormatData_ff_Latn_SL, java.util.ListResourceBundle]> {}
            interface _FormatData_fi$$static extends ClassLike {
              new(): FormatData_fi;
            }
            let FormatData_fi: _FormatData_fi$$static;
            interface _FormatData_fi {
              _getContents(): any[][];
            }
            interface FormatData_fi extends CombineTypes<[_FormatData_fi, java.util.ListResourceBundle]> {}
            interface _FormatData_fil$$static extends ClassLike {
              new(): FormatData_fil;
            }
            let FormatData_fil: _FormatData_fil$$static;
            interface _FormatData_fil {
              _getContents(): any[][];
            }
            interface FormatData_fil extends CombineTypes<[_FormatData_fil, java.util.ListResourceBundle]> {}
            interface _FormatData_fo$$static extends ClassLike {
              new(): FormatData_fo;
            }
            let FormatData_fo: _FormatData_fo$$static;
            interface _FormatData_fo {
              _getContents(): any[][];
            }
            interface FormatData_fo extends CombineTypes<[_FormatData_fo, java.util.ListResourceBundle]> {}
            interface _FormatData_fr$$static extends ClassLike {
              new(): FormatData_fr;
            }
            let FormatData_fr: _FormatData_fr$$static;
            interface _FormatData_fr {
              _getContents(): any[][];
            }
            interface FormatData_fr extends CombineTypes<[_FormatData_fr, java.util.ListResourceBundle]> {}
            interface _FormatData_fr_BE$$static extends ClassLike {
              new(): FormatData_fr_BE;
            }
            let FormatData_fr_BE: _FormatData_fr_BE$$static;
            interface _FormatData_fr_BE {
              _getContents(): any[][];
            }
            interface FormatData_fr_BE extends CombineTypes<[_FormatData_fr_BE, java.util.ListResourceBundle]> {}
            interface _FormatData_fr_CA$$static extends ClassLike {
              new(): FormatData_fr_CA;
            }
            let FormatData_fr_CA: _FormatData_fr_CA$$static;
            interface _FormatData_fr_CA {
              _getContents(): any[][];
            }
            interface FormatData_fr_CA extends CombineTypes<[_FormatData_fr_CA, java.util.ListResourceBundle]> {}
            interface _FormatData_fr_CD$$static extends ClassLike {
              new(): FormatData_fr_CD;
            }
            let FormatData_fr_CD: _FormatData_fr_CD$$static;
            interface _FormatData_fr_CD {
              _getContents(): any[][];
            }
            interface FormatData_fr_CD extends CombineTypes<[_FormatData_fr_CD, java.util.ListResourceBundle]> {}
            interface _FormatData_fr_CH$$static extends ClassLike {
              new(): FormatData_fr_CH;
            }
            let FormatData_fr_CH: _FormatData_fr_CH$$static;
            interface _FormatData_fr_CH {
              _getContents(): any[][];
            }
            interface FormatData_fr_CH extends CombineTypes<[_FormatData_fr_CH, java.util.ListResourceBundle]> {}
            interface _FormatData_fr_CM$$static extends ClassLike {
              new(): FormatData_fr_CM;
            }
            let FormatData_fr_CM: _FormatData_fr_CM$$static;
            interface _FormatData_fr_CM {
              _getContents(): any[][];
            }
            interface FormatData_fr_CM extends CombineTypes<[_FormatData_fr_CM, java.util.ListResourceBundle]> {}
            interface _FormatData_fr_DJ$$static extends ClassLike {
              new(): FormatData_fr_DJ;
            }
            let FormatData_fr_DJ: _FormatData_fr_DJ$$static;
            interface _FormatData_fr_DJ {
              _getContents(): any[][];
            }
            interface FormatData_fr_DJ extends CombineTypes<[_FormatData_fr_DJ, java.util.ListResourceBundle]> {}
            interface _FormatData_fr_DZ$$static extends ClassLike {
              new(): FormatData_fr_DZ;
            }
            let FormatData_fr_DZ: _FormatData_fr_DZ$$static;
            interface _FormatData_fr_DZ {
              _getContents(): any[][];
            }
            interface FormatData_fr_DZ extends CombineTypes<[_FormatData_fr_DZ, java.util.ListResourceBundle]> {}
            interface _FormatData_fr_HT$$static extends ClassLike {
              new(): FormatData_fr_HT;
            }
            let FormatData_fr_HT: _FormatData_fr_HT$$static;
            interface _FormatData_fr_HT {
              _getContents(): any[][];
            }
            interface FormatData_fr_HT extends CombineTypes<[_FormatData_fr_HT, java.util.ListResourceBundle]> {}
            interface _FormatData_fr_LU$$static extends ClassLike {
              new(): FormatData_fr_LU;
            }
            let FormatData_fr_LU: _FormatData_fr_LU$$static;
            interface _FormatData_fr_LU {
              _getContents(): any[][];
            }
            interface FormatData_fr_LU extends CombineTypes<[_FormatData_fr_LU, java.util.ListResourceBundle]> {}
            interface _FormatData_fr_MA$$static extends ClassLike {
              new(): FormatData_fr_MA;
            }
            let FormatData_fr_MA: _FormatData_fr_MA$$static;
            interface _FormatData_fr_MA {
              _getContents(): any[][];
            }
            interface FormatData_fr_MA extends CombineTypes<[_FormatData_fr_MA, java.util.ListResourceBundle]> {}
            interface _FormatData_fr_ML$$static extends ClassLike {
              new(): FormatData_fr_ML;
            }
            let FormatData_fr_ML: _FormatData_fr_ML$$static;
            interface _FormatData_fr_ML {
              _getContents(): any[][];
            }
            interface FormatData_fr_ML extends CombineTypes<[_FormatData_fr_ML, java.util.ListResourceBundle]> {}
            interface _FormatData_fr_MR$$static extends ClassLike {
              new(): FormatData_fr_MR;
            }
            let FormatData_fr_MR: _FormatData_fr_MR$$static;
            interface _FormatData_fr_MR {
              _getContents(): any[][];
            }
            interface FormatData_fr_MR extends CombineTypes<[_FormatData_fr_MR, java.util.ListResourceBundle]> {}
            interface _FormatData_fr_RE$$static extends ClassLike {
              new(): FormatData_fr_RE;
            }
            let FormatData_fr_RE: _FormatData_fr_RE$$static;
            interface _FormatData_fr_RE {
              _getContents(): any[][];
            }
            interface FormatData_fr_RE extends CombineTypes<[_FormatData_fr_RE, java.util.ListResourceBundle]> {}
            interface _FormatData_fr_SN$$static extends ClassLike {
              new(): FormatData_fr_SN;
            }
            let FormatData_fr_SN: _FormatData_fr_SN$$static;
            interface _FormatData_fr_SN {
              _getContents(): any[][];
            }
            interface FormatData_fr_SN extends CombineTypes<[_FormatData_fr_SN, java.util.ListResourceBundle]> {}
            interface _FormatData_fr_SY$$static extends ClassLike {
              new(): FormatData_fr_SY;
            }
            let FormatData_fr_SY: _FormatData_fr_SY$$static;
            interface _FormatData_fr_SY {
              _getContents(): any[][];
            }
            interface FormatData_fr_SY extends CombineTypes<[_FormatData_fr_SY, java.util.ListResourceBundle]> {}
            interface _FormatData_fr_TD$$static extends ClassLike {
              new(): FormatData_fr_TD;
            }
            let FormatData_fr_TD: _FormatData_fr_TD$$static;
            interface _FormatData_fr_TD {
              _getContents(): any[][];
            }
            interface FormatData_fr_TD extends CombineTypes<[_FormatData_fr_TD, java.util.ListResourceBundle]> {}
            interface _FormatData_fr_TN$$static extends ClassLike {
              new(): FormatData_fr_TN;
            }
            let FormatData_fr_TN: _FormatData_fr_TN$$static;
            interface _FormatData_fr_TN {
              _getContents(): any[][];
            }
            interface FormatData_fr_TN extends CombineTypes<[_FormatData_fr_TN, java.util.ListResourceBundle]> {}
            interface _FormatData_fr_VU$$static extends ClassLike {
              new(): FormatData_fr_VU;
            }
            let FormatData_fr_VU: _FormatData_fr_VU$$static;
            interface _FormatData_fr_VU {
              _getContents(): any[][];
            }
            interface FormatData_fr_VU extends CombineTypes<[_FormatData_fr_VU, java.util.ListResourceBundle]> {}
            interface _FormatData_frr$$static extends ClassLike {
              new(): FormatData_frr;
            }
            let FormatData_frr: _FormatData_frr$$static;
            interface _FormatData_frr {
              _getContents(): any[][];
            }
            interface FormatData_frr extends CombineTypes<[_FormatData_frr, java.util.ListResourceBundle]> {}
            interface _FormatData_fur$$static extends ClassLike {
              new(): FormatData_fur;
            }
            let FormatData_fur: _FormatData_fur$$static;
            interface _FormatData_fur {
              _getContents(): any[][];
            }
            interface FormatData_fur extends CombineTypes<[_FormatData_fur, java.util.ListResourceBundle]> {}
            interface _FormatData_fy$$static extends ClassLike {
              new(): FormatData_fy;
            }
            let FormatData_fy: _FormatData_fy$$static;
            interface _FormatData_fy {
              _getContents(): any[][];
            }
            interface FormatData_fy extends CombineTypes<[_FormatData_fy, java.util.ListResourceBundle]> {}
            interface _FormatData_ga$$static extends ClassLike {
              new(): FormatData_ga;
            }
            let FormatData_ga: _FormatData_ga$$static;
            interface _FormatData_ga {
              _getContents(): any[][];
            }
            interface FormatData_ga extends CombineTypes<[_FormatData_ga, java.util.ListResourceBundle]> {}
            interface _FormatData_gd$$static extends ClassLike {
              new(): FormatData_gd;
            }
            let FormatData_gd: _FormatData_gd$$static;
            interface _FormatData_gd {
              _getContents(): any[][];
            }
            interface FormatData_gd extends CombineTypes<[_FormatData_gd, java.util.ListResourceBundle]> {}
            interface _FormatData_gl$$static extends ClassLike {
              new(): FormatData_gl;
            }
            let FormatData_gl: _FormatData_gl$$static;
            interface _FormatData_gl {
              _getContents(): any[][];
            }
            interface FormatData_gl extends CombineTypes<[_FormatData_gl, java.util.ListResourceBundle]> {}
            interface _FormatData_gsw$$static extends ClassLike {
              new(): FormatData_gsw;
            }
            let FormatData_gsw: _FormatData_gsw$$static;
            interface _FormatData_gsw {
              _getContents(): any[][];
            }
            interface FormatData_gsw extends CombineTypes<[_FormatData_gsw, java.util.ListResourceBundle]> {}
            interface _FormatData_gu$$static extends ClassLike {
              new(): FormatData_gu;
            }
            let FormatData_gu: _FormatData_gu$$static;
            interface _FormatData_gu {
              _getContents(): any[][];
            }
            interface FormatData_gu extends CombineTypes<[_FormatData_gu, java.util.ListResourceBundle]> {}
            interface _FormatData_guz$$static extends ClassLike {
              new(): FormatData_guz;
            }
            let FormatData_guz: _FormatData_guz$$static;
            interface _FormatData_guz {
              _getContents(): any[][];
            }
            interface FormatData_guz extends CombineTypes<[_FormatData_guz, java.util.ListResourceBundle]> {}
            interface _FormatData_gv$$static extends ClassLike {
              new(): FormatData_gv;
            }
            let FormatData_gv: _FormatData_gv$$static;
            interface _FormatData_gv {
              _getContents(): any[][];
            }
            interface FormatData_gv extends CombineTypes<[_FormatData_gv, java.util.ListResourceBundle]> {}
            interface _FormatData_ha$$static extends ClassLike {
              new(): FormatData_ha;
            }
            let FormatData_ha: _FormatData_ha$$static;
            interface _FormatData_ha {
              _getContents(): any[][];
            }
            interface FormatData_ha extends CombineTypes<[_FormatData_ha, java.util.ListResourceBundle]> {}
            interface _FormatData_ha_GH$$static extends ClassLike {
              new(): FormatData_ha_GH;
            }
            let FormatData_ha_GH: _FormatData_ha_GH$$static;
            interface _FormatData_ha_GH {
              _getContents(): any[][];
            }
            interface FormatData_ha_GH extends CombineTypes<[_FormatData_ha_GH, java.util.ListResourceBundle]> {}
            interface _FormatData_haw$$static extends ClassLike {
              new(): FormatData_haw;
            }
            let FormatData_haw: _FormatData_haw$$static;
            interface _FormatData_haw {
              _getContents(): any[][];
            }
            interface FormatData_haw extends CombineTypes<[_FormatData_haw, java.util.ListResourceBundle]> {}
            interface _FormatData_he$$static extends ClassLike {
              new(): FormatData_he;
            }
            let FormatData_he: _FormatData_he$$static;
            interface _FormatData_he {
              _getContents(): any[][];
            }
            interface FormatData_he extends CombineTypes<[_FormatData_he, java.util.ListResourceBundle]> {}
            interface _FormatData_hi$$static extends ClassLike {
              new(): FormatData_hi;
            }
            let FormatData_hi: _FormatData_hi$$static;
            interface _FormatData_hi {
              _getContents(): any[][];
            }
            interface FormatData_hi extends CombineTypes<[_FormatData_hi, java.util.ListResourceBundle]> {}
            interface _FormatData_hi_Latn$$static extends ClassLike {
              new(): FormatData_hi_Latn;
            }
            let FormatData_hi_Latn: _FormatData_hi_Latn$$static;
            interface _FormatData_hi_Latn {
              _getContents(): any[][];
            }
            interface FormatData_hi_Latn extends CombineTypes<[_FormatData_hi_Latn, java.util.ListResourceBundle]> {}
            interface _FormatData_hr$$static extends ClassLike {
              new(): FormatData_hr;
            }
            let FormatData_hr: _FormatData_hr$$static;
            interface _FormatData_hr {
              _getContents(): any[][];
            }
            interface FormatData_hr extends CombineTypes<[_FormatData_hr, java.util.ListResourceBundle]> {}
            interface _FormatData_hr_BA$$static extends ClassLike {
              new(): FormatData_hr_BA;
            }
            let FormatData_hr_BA: _FormatData_hr_BA$$static;
            interface _FormatData_hr_BA {
              _getContents(): any[][];
            }
            interface FormatData_hr_BA extends CombineTypes<[_FormatData_hr_BA, java.util.ListResourceBundle]> {}
            interface _FormatData_hsb$$static extends ClassLike {
              new(): FormatData_hsb;
            }
            let FormatData_hsb: _FormatData_hsb$$static;
            interface _FormatData_hsb {
              _getContents(): any[][];
            }
            interface FormatData_hsb extends CombineTypes<[_FormatData_hsb, java.util.ListResourceBundle]> {}
            interface _FormatData_hu$$static extends ClassLike {
              new(): FormatData_hu;
            }
            let FormatData_hu: _FormatData_hu$$static;
            interface _FormatData_hu {
              _getContents(): any[][];
            }
            interface FormatData_hu extends CombineTypes<[_FormatData_hu, java.util.ListResourceBundle]> {}
            interface _FormatData_hy$$static extends ClassLike {
              new(): FormatData_hy;
            }
            let FormatData_hy: _FormatData_hy$$static;
            interface _FormatData_hy {
              _getContents(): any[][];
            }
            interface FormatData_hy extends CombineTypes<[_FormatData_hy, java.util.ListResourceBundle]> {}
            interface _FormatData_ia$$static extends ClassLike {
              new(): FormatData_ia;
            }
            let FormatData_ia: _FormatData_ia$$static;
            interface _FormatData_ia {
              _getContents(): any[][];
            }
            interface FormatData_ia extends CombineTypes<[_FormatData_ia, java.util.ListResourceBundle]> {}
            interface _FormatData_id$$static extends ClassLike {
              new(): FormatData_id;
            }
            let FormatData_id: _FormatData_id$$static;
            interface _FormatData_id {
              _getContents(): any[][];
            }
            interface FormatData_id extends CombineTypes<[_FormatData_id, java.util.ListResourceBundle]> {}
            interface _FormatData_ig$$static extends ClassLike {
              new(): FormatData_ig;
            }
            let FormatData_ig: _FormatData_ig$$static;
            interface _FormatData_ig {
              _getContents(): any[][];
            }
            interface FormatData_ig extends CombineTypes<[_FormatData_ig, java.util.ListResourceBundle]> {}
            interface _FormatData_ii$$static extends ClassLike {
              new(): FormatData_ii;
            }
            let FormatData_ii: _FormatData_ii$$static;
            interface _FormatData_ii {
              _getContents(): any[][];
            }
            interface FormatData_ii extends CombineTypes<[_FormatData_ii, java.util.ListResourceBundle]> {}
            interface _FormatData_is$$static extends ClassLike {
              new(): FormatData_is;
            }
            let FormatData_is: _FormatData_is$$static;
            interface _FormatData_is {
              _getContents(): any[][];
            }
            interface FormatData_is extends CombineTypes<[_FormatData_is, java.util.ListResourceBundle]> {}
            interface _FormatData_it$$static extends ClassLike {
              new(): FormatData_it;
            }
            let FormatData_it: _FormatData_it$$static;
            interface _FormatData_it {
              _getContents(): any[][];
            }
            interface FormatData_it extends CombineTypes<[_FormatData_it, java.util.ListResourceBundle]> {}
            interface _FormatData_it_CH$$static extends ClassLike {
              new(): FormatData_it_CH;
            }
            let FormatData_it_CH: _FormatData_it_CH$$static;
            interface _FormatData_it_CH {
              _getContents(): any[][];
            }
            interface FormatData_it_CH extends CombineTypes<[_FormatData_it_CH, java.util.ListResourceBundle]> {}
            interface _FormatData_ja$$static extends ClassLike {
              new(): FormatData_ja;
            }
            let FormatData_ja: _FormatData_ja$$static;
            interface _FormatData_ja {
              _getContents(): any[][];
            }
            interface FormatData_ja extends CombineTypes<[_FormatData_ja, java.util.ListResourceBundle]> {}
            interface _FormatData_jgo$$static extends ClassLike {
              new(): FormatData_jgo;
            }
            let FormatData_jgo: _FormatData_jgo$$static;
            interface _FormatData_jgo {
              _getContents(): any[][];
            }
            interface FormatData_jgo extends CombineTypes<[_FormatData_jgo, java.util.ListResourceBundle]> {}
            interface _FormatData_jmc$$static extends ClassLike {
              new(): FormatData_jmc;
            }
            let FormatData_jmc: _FormatData_jmc$$static;
            interface _FormatData_jmc {
              _getContents(): any[][];
            }
            interface FormatData_jmc extends CombineTypes<[_FormatData_jmc, java.util.ListResourceBundle]> {}
            interface _FormatData_jv$$static extends ClassLike {
              new(): FormatData_jv;
            }
            let FormatData_jv: _FormatData_jv$$static;
            interface _FormatData_jv {
              _getContents(): any[][];
            }
            interface FormatData_jv extends CombineTypes<[_FormatData_jv, java.util.ListResourceBundle]> {}
            interface _FormatData_ka$$static extends ClassLike {
              new(): FormatData_ka;
            }
            let FormatData_ka: _FormatData_ka$$static;
            interface _FormatData_ka {
              _getContents(): any[][];
            }
            interface FormatData_ka extends CombineTypes<[_FormatData_ka, java.util.ListResourceBundle]> {}
            interface _FormatData_kab$$static extends ClassLike {
              new(): FormatData_kab;
            }
            let FormatData_kab: _FormatData_kab$$static;
            interface _FormatData_kab {
              _getContents(): any[][];
            }
            interface FormatData_kab extends CombineTypes<[_FormatData_kab, java.util.ListResourceBundle]> {}
            interface _FormatData_kam$$static extends ClassLike {
              new(): FormatData_kam;
            }
            let FormatData_kam: _FormatData_kam$$static;
            interface _FormatData_kam {
              _getContents(): any[][];
            }
            interface FormatData_kam extends CombineTypes<[_FormatData_kam, java.util.ListResourceBundle]> {}
            interface _FormatData_kde$$static extends ClassLike {
              new(): FormatData_kde;
            }
            let FormatData_kde: _FormatData_kde$$static;
            interface _FormatData_kde {
              _getContents(): any[][];
            }
            interface FormatData_kde extends CombineTypes<[_FormatData_kde, java.util.ListResourceBundle]> {}
            interface _FormatData_kea$$static extends ClassLike {
              new(): FormatData_kea;
            }
            let FormatData_kea: _FormatData_kea$$static;
            interface _FormatData_kea {
              _getContents(): any[][];
            }
            interface FormatData_kea extends CombineTypes<[_FormatData_kea, java.util.ListResourceBundle]> {}
            interface _FormatData_kgp$$static extends ClassLike {
              new(): FormatData_kgp;
            }
            let FormatData_kgp: _FormatData_kgp$$static;
            interface _FormatData_kgp {
              _getContents(): any[][];
            }
            interface FormatData_kgp extends CombineTypes<[_FormatData_kgp, java.util.ListResourceBundle]> {}
            interface _FormatData_khq$$static extends ClassLike {
              new(): FormatData_khq;
            }
            let FormatData_khq: _FormatData_khq$$static;
            interface _FormatData_khq {
              _getContents(): any[][];
            }
            interface FormatData_khq extends CombineTypes<[_FormatData_khq, java.util.ListResourceBundle]> {}
            interface _FormatData_ki$$static extends ClassLike {
              new(): FormatData_ki;
            }
            let FormatData_ki: _FormatData_ki$$static;
            interface _FormatData_ki {
              _getContents(): any[][];
            }
            interface FormatData_ki extends CombineTypes<[_FormatData_ki, java.util.ListResourceBundle]> {}
            interface _FormatData_kk$$static extends ClassLike {
              new(): FormatData_kk;
            }
            let FormatData_kk: _FormatData_kk$$static;
            interface _FormatData_kk {
              _getContents(): any[][];
            }
            interface FormatData_kk extends CombineTypes<[_FormatData_kk, java.util.ListResourceBundle]> {}
            interface _FormatData_kkj$$static extends ClassLike {
              new(): FormatData_kkj;
            }
            let FormatData_kkj: _FormatData_kkj$$static;
            interface _FormatData_kkj {
              _getContents(): any[][];
            }
            interface FormatData_kkj extends CombineTypes<[_FormatData_kkj, java.util.ListResourceBundle]> {}
            interface _FormatData_kl$$static extends ClassLike {
              new(): FormatData_kl;
            }
            let FormatData_kl: _FormatData_kl$$static;
            interface _FormatData_kl {
              _getContents(): any[][];
            }
            interface FormatData_kl extends CombineTypes<[_FormatData_kl, java.util.ListResourceBundle]> {}
            interface _FormatData_kln$$static extends ClassLike {
              new(): FormatData_kln;
            }
            let FormatData_kln: _FormatData_kln$$static;
            interface _FormatData_kln {
              _getContents(): any[][];
            }
            interface FormatData_kln extends CombineTypes<[_FormatData_kln, java.util.ListResourceBundle]> {}
            interface _FormatData_km$$static extends ClassLike {
              new(): FormatData_km;
            }
            let FormatData_km: _FormatData_km$$static;
            interface _FormatData_km {
              _getContents(): any[][];
            }
            interface FormatData_km extends CombineTypes<[_FormatData_km, java.util.ListResourceBundle]> {}
            interface _FormatData_kn$$static extends ClassLike {
              new(): FormatData_kn;
            }
            let FormatData_kn: _FormatData_kn$$static;
            interface _FormatData_kn {
              _getContents(): any[][];
            }
            interface FormatData_kn extends CombineTypes<[_FormatData_kn, java.util.ListResourceBundle]> {}
            interface _FormatData_ko$$static extends ClassLike {
              new(): FormatData_ko;
            }
            let FormatData_ko: _FormatData_ko$$static;
            interface _FormatData_ko {
              _getContents(): any[][];
            }
            interface FormatData_ko extends CombineTypes<[_FormatData_ko, java.util.ListResourceBundle]> {}
            interface _FormatData_kok$$static extends ClassLike {
              new(): FormatData_kok;
            }
            let FormatData_kok: _FormatData_kok$$static;
            interface _FormatData_kok {
              _getContents(): any[][];
            }
            interface FormatData_kok extends CombineTypes<[_FormatData_kok, java.util.ListResourceBundle]> {}
            interface _FormatData_ks$$static extends ClassLike {
              new(): FormatData_ks;
            }
            let FormatData_ks: _FormatData_ks$$static;
            interface _FormatData_ks {
              _getContents(): any[][];
            }
            interface FormatData_ks extends CombineTypes<[_FormatData_ks, java.util.ListResourceBundle]> {}
            interface _FormatData_ks_Deva$$static extends ClassLike {
              new(): FormatData_ks_Deva;
            }
            let FormatData_ks_Deva: _FormatData_ks_Deva$$static;
            interface _FormatData_ks_Deva {
              _getContents(): any[][];
            }
            interface FormatData_ks_Deva extends CombineTypes<[_FormatData_ks_Deva, java.util.ListResourceBundle]> {}
            interface _FormatData_ksb$$static extends ClassLike {
              new(): FormatData_ksb;
            }
            let FormatData_ksb: _FormatData_ksb$$static;
            interface _FormatData_ksb {
              _getContents(): any[][];
            }
            interface FormatData_ksb extends CombineTypes<[_FormatData_ksb, java.util.ListResourceBundle]> {}
            interface _FormatData_ksf$$static extends ClassLike {
              new(): FormatData_ksf;
            }
            let FormatData_ksf: _FormatData_ksf$$static;
            interface _FormatData_ksf {
              _getContents(): any[][];
            }
            interface FormatData_ksf extends CombineTypes<[_FormatData_ksf, java.util.ListResourceBundle]> {}
            interface _FormatData_ksh$$static extends ClassLike {
              new(): FormatData_ksh;
            }
            let FormatData_ksh: _FormatData_ksh$$static;
            interface _FormatData_ksh {
              _getContents(): any[][];
            }
            interface FormatData_ksh extends CombineTypes<[_FormatData_ksh, java.util.ListResourceBundle]> {}
            interface _FormatData_ku$$static extends ClassLike {
              new(): FormatData_ku;
            }
            let FormatData_ku: _FormatData_ku$$static;
            interface _FormatData_ku {
              _getContents(): any[][];
            }
            interface FormatData_ku extends CombineTypes<[_FormatData_ku, java.util.ListResourceBundle]> {}
            interface _FormatData_kw$$static extends ClassLike {
              new(): FormatData_kw;
            }
            let FormatData_kw: _FormatData_kw$$static;
            interface _FormatData_kw {
              _getContents(): any[][];
            }
            interface FormatData_kw extends CombineTypes<[_FormatData_kw, java.util.ListResourceBundle]> {}
            interface _FormatData_ky$$static extends ClassLike {
              new(): FormatData_ky;
            }
            let FormatData_ky: _FormatData_ky$$static;
            interface _FormatData_ky {
              _getContents(): any[][];
            }
            interface FormatData_ky extends CombineTypes<[_FormatData_ky, java.util.ListResourceBundle]> {}
            interface _FormatData_lag$$static extends ClassLike {
              new(): FormatData_lag;
            }
            let FormatData_lag: _FormatData_lag$$static;
            interface _FormatData_lag {
              _getContents(): any[][];
            }
            interface FormatData_lag extends CombineTypes<[_FormatData_lag, java.util.ListResourceBundle]> {}
            interface _FormatData_lb$$static extends ClassLike {
              new(): FormatData_lb;
            }
            let FormatData_lb: _FormatData_lb$$static;
            interface _FormatData_lb {
              _getContents(): any[][];
            }
            interface FormatData_lb extends CombineTypes<[_FormatData_lb, java.util.ListResourceBundle]> {}
            interface _FormatData_lg$$static extends ClassLike {
              new(): FormatData_lg;
            }
            let FormatData_lg: _FormatData_lg$$static;
            interface _FormatData_lg {
              _getContents(): any[][];
            }
            interface FormatData_lg extends CombineTypes<[_FormatData_lg, java.util.ListResourceBundle]> {}
            interface _FormatData_lkt$$static extends ClassLike {
              new(): FormatData_lkt;
            }
            let FormatData_lkt: _FormatData_lkt$$static;
            interface _FormatData_lkt {
              _getContents(): any[][];
            }
            interface FormatData_lkt extends CombineTypes<[_FormatData_lkt, java.util.ListResourceBundle]> {}
            interface _FormatData_ln$$static extends ClassLike {
              new(): FormatData_ln;
            }
            let FormatData_ln: _FormatData_ln$$static;
            interface _FormatData_ln {
              _getContents(): any[][];
            }
            interface FormatData_ln extends CombineTypes<[_FormatData_ln, java.util.ListResourceBundle]> {}
            interface _FormatData_lo$$static extends ClassLike {
              new(): FormatData_lo;
            }
            let FormatData_lo: _FormatData_lo$$static;
            interface _FormatData_lo {
              _getContents(): any[][];
            }
            interface FormatData_lo extends CombineTypes<[_FormatData_lo, java.util.ListResourceBundle]> {}
            interface _FormatData_lrc$$static extends ClassLike {
              new(): FormatData_lrc;
            }
            let FormatData_lrc: _FormatData_lrc$$static;
            interface _FormatData_lrc {
              _getContents(): any[][];
            }
            interface FormatData_lrc extends CombineTypes<[_FormatData_lrc, java.util.ListResourceBundle]> {}
            interface _FormatData_lrc_IQ$$static extends ClassLike {
              new(): FormatData_lrc_IQ;
            }
            let FormatData_lrc_IQ: _FormatData_lrc_IQ$$static;
            interface _FormatData_lrc_IQ {
              _getContents(): any[][];
            }
            interface FormatData_lrc_IQ extends CombineTypes<[_FormatData_lrc_IQ, java.util.ListResourceBundle]> {}
            interface _FormatData_lt$$static extends ClassLike {
              new(): FormatData_lt;
            }
            let FormatData_lt: _FormatData_lt$$static;
            interface _FormatData_lt {
              _getContents(): any[][];
            }
            interface FormatData_lt extends CombineTypes<[_FormatData_lt, java.util.ListResourceBundle]> {}
            interface _FormatData_lu$$static extends ClassLike {
              new(): FormatData_lu;
            }
            let FormatData_lu: _FormatData_lu$$static;
            interface _FormatData_lu {
              _getContents(): any[][];
            }
            interface FormatData_lu extends CombineTypes<[_FormatData_lu, java.util.ListResourceBundle]> {}
            interface _FormatData_luo$$static extends ClassLike {
              new(): FormatData_luo;
            }
            let FormatData_luo: _FormatData_luo$$static;
            interface _FormatData_luo {
              _getContents(): any[][];
            }
            interface FormatData_luo extends CombineTypes<[_FormatData_luo, java.util.ListResourceBundle]> {}
            interface _FormatData_luy$$static extends ClassLike {
              new(): FormatData_luy;
            }
            let FormatData_luy: _FormatData_luy$$static;
            interface _FormatData_luy {
              _getContents(): any[][];
            }
            interface FormatData_luy extends CombineTypes<[_FormatData_luy, java.util.ListResourceBundle]> {}
            interface _FormatData_lv$$static extends ClassLike {
              new(): FormatData_lv;
            }
            let FormatData_lv: _FormatData_lv$$static;
            interface _FormatData_lv {
              _getContents(): any[][];
            }
            interface FormatData_lv extends CombineTypes<[_FormatData_lv, java.util.ListResourceBundle]> {}
            interface _FormatData_mai$$static extends ClassLike {
              new(): FormatData_mai;
            }
            let FormatData_mai: _FormatData_mai$$static;
            interface _FormatData_mai {
              _getContents(): any[][];
            }
            interface FormatData_mai extends CombineTypes<[_FormatData_mai, java.util.ListResourceBundle]> {}
            interface _FormatData_mas$$static extends ClassLike {
              new(): FormatData_mas;
            }
            let FormatData_mas: _FormatData_mas$$static;
            interface _FormatData_mas {
              _getContents(): any[][];
            }
            interface FormatData_mas extends CombineTypes<[_FormatData_mas, java.util.ListResourceBundle]> {}
            interface _FormatData_mer$$static extends ClassLike {
              new(): FormatData_mer;
            }
            let FormatData_mer: _FormatData_mer$$static;
            interface _FormatData_mer {
              _getContents(): any[][];
            }
            interface FormatData_mer extends CombineTypes<[_FormatData_mer, java.util.ListResourceBundle]> {}
            interface _FormatData_mfe$$static extends ClassLike {
              new(): FormatData_mfe;
            }
            let FormatData_mfe: _FormatData_mfe$$static;
            interface _FormatData_mfe {
              _getContents(): any[][];
            }
            interface FormatData_mfe extends CombineTypes<[_FormatData_mfe, java.util.ListResourceBundle]> {}
            interface _FormatData_mg$$static extends ClassLike {
              new(): FormatData_mg;
            }
            let FormatData_mg: _FormatData_mg$$static;
            interface _FormatData_mg {
              _getContents(): any[][];
            }
            interface FormatData_mg extends CombineTypes<[_FormatData_mg, java.util.ListResourceBundle]> {}
            interface _FormatData_mgh$$static extends ClassLike {
              new(): FormatData_mgh;
            }
            let FormatData_mgh: _FormatData_mgh$$static;
            interface _FormatData_mgh {
              _getContents(): any[][];
            }
            interface FormatData_mgh extends CombineTypes<[_FormatData_mgh, java.util.ListResourceBundle]> {}
            interface _FormatData_mgo$$static extends ClassLike {
              new(): FormatData_mgo;
            }
            let FormatData_mgo: _FormatData_mgo$$static;
            interface _FormatData_mgo {
              _getContents(): any[][];
            }
            interface FormatData_mgo extends CombineTypes<[_FormatData_mgo, java.util.ListResourceBundle]> {}
            interface _FormatData_mi$$static extends ClassLike {
              new(): FormatData_mi;
            }
            let FormatData_mi: _FormatData_mi$$static;
            interface _FormatData_mi {
              _getContents(): any[][];
            }
            interface FormatData_mi extends CombineTypes<[_FormatData_mi, java.util.ListResourceBundle]> {}
            interface _FormatData_mk$$static extends ClassLike {
              new(): FormatData_mk;
            }
            let FormatData_mk: _FormatData_mk$$static;
            interface _FormatData_mk {
              _getContents(): any[][];
            }
            interface FormatData_mk extends CombineTypes<[_FormatData_mk, java.util.ListResourceBundle]> {}
            interface _FormatData_ml$$static extends ClassLike {
              new(): FormatData_ml;
            }
            let FormatData_ml: _FormatData_ml$$static;
            interface _FormatData_ml {
              _getContents(): any[][];
            }
            interface FormatData_ml extends CombineTypes<[_FormatData_ml, java.util.ListResourceBundle]> {}
            interface _FormatData_mn$$static extends ClassLike {
              new(): FormatData_mn;
            }
            let FormatData_mn: _FormatData_mn$$static;
            interface _FormatData_mn {
              _getContents(): any[][];
            }
            interface FormatData_mn extends CombineTypes<[_FormatData_mn, java.util.ListResourceBundle]> {}
            interface _FormatData_mni$$static extends ClassLike {
              new(): FormatData_mni;
            }
            let FormatData_mni: _FormatData_mni$$static;
            interface _FormatData_mni {
              _getContents(): any[][];
            }
            interface FormatData_mni extends CombineTypes<[_FormatData_mni, java.util.ListResourceBundle]> {}
            interface _FormatData_mr$$static extends ClassLike {
              new(): FormatData_mr;
            }
            let FormatData_mr: _FormatData_mr$$static;
            interface _FormatData_mr {
              _getContents(): any[][];
            }
            interface FormatData_mr extends CombineTypes<[_FormatData_mr, java.util.ListResourceBundle]> {}
            interface _FormatData_ms$$static extends ClassLike {
              new(): FormatData_ms;
            }
            let FormatData_ms: _FormatData_ms$$static;
            interface _FormatData_ms {
              _getContents(): any[][];
            }
            interface FormatData_ms extends CombineTypes<[_FormatData_ms, java.util.ListResourceBundle]> {}
            interface _FormatData_ms_BN$$static extends ClassLike {
              new(): FormatData_ms_BN;
            }
            let FormatData_ms_BN: _FormatData_ms_BN$$static;
            interface _FormatData_ms_BN {
              _getContents(): any[][];
            }
            interface FormatData_ms_BN extends CombineTypes<[_FormatData_ms_BN, java.util.ListResourceBundle]> {}
            interface _FormatData_ms_ID$$static extends ClassLike {
              new(): FormatData_ms_ID;
            }
            let FormatData_ms_ID: _FormatData_ms_ID$$static;
            interface _FormatData_ms_ID {
              _getContents(): any[][];
            }
            interface FormatData_ms_ID extends CombineTypes<[_FormatData_ms_ID, java.util.ListResourceBundle]> {}
            interface _FormatData_mt$$static extends ClassLike {
              new(): FormatData_mt;
            }
            let FormatData_mt: _FormatData_mt$$static;
            interface _FormatData_mt {
              _getContents(): any[][];
            }
            interface FormatData_mt extends CombineTypes<[_FormatData_mt, java.util.ListResourceBundle]> {}
            interface _FormatData_mua$$static extends ClassLike {
              new(): FormatData_mua;
            }
            let FormatData_mua: _FormatData_mua$$static;
            interface _FormatData_mua {
              _getContents(): any[][];
            }
            interface FormatData_mua extends CombineTypes<[_FormatData_mua, java.util.ListResourceBundle]> {}
            interface _FormatData_my$$static extends ClassLike {
              new(): FormatData_my;
            }
            let FormatData_my: _FormatData_my$$static;
            interface _FormatData_my {
              _getContents(): any[][];
            }
            interface FormatData_my extends CombineTypes<[_FormatData_my, java.util.ListResourceBundle]> {}
            interface _FormatData_mzn$$static extends ClassLike {
              new(): FormatData_mzn;
            }
            let FormatData_mzn: _FormatData_mzn$$static;
            interface _FormatData_mzn {
              _getContents(): any[][];
            }
            interface FormatData_mzn extends CombineTypes<[_FormatData_mzn, java.util.ListResourceBundle]> {}
            interface _FormatData_naq$$static extends ClassLike {
              new(): FormatData_naq;
            }
            let FormatData_naq: _FormatData_naq$$static;
            interface _FormatData_naq {
              _getContents(): any[][];
            }
            interface FormatData_naq extends CombineTypes<[_FormatData_naq, java.util.ListResourceBundle]> {}
            interface _FormatData_nb$$static extends ClassLike {
              new(): FormatData_nb;
            }
            let FormatData_nb: _FormatData_nb$$static;
            interface _FormatData_nb {
              _getContents(): any[][];
            }
            interface FormatData_nb extends CombineTypes<[_FormatData_nb, java.util.ListResourceBundle]> {}
            interface _FormatData_nd$$static extends ClassLike {
              new(): FormatData_nd;
            }
            let FormatData_nd: _FormatData_nd$$static;
            interface _FormatData_nd {
              _getContents(): any[][];
            }
            interface FormatData_nd extends CombineTypes<[_FormatData_nd, java.util.ListResourceBundle]> {}
            interface _FormatData_nds$$static extends ClassLike {
              new(): FormatData_nds;
            }
            let FormatData_nds: _FormatData_nds$$static;
            interface _FormatData_nds {
              _getContents(): any[][];
            }
            interface FormatData_nds extends CombineTypes<[_FormatData_nds, java.util.ListResourceBundle]> {}
            interface _FormatData_ne$$static extends ClassLike {
              new(): FormatData_ne;
            }
            let FormatData_ne: _FormatData_ne$$static;
            interface _FormatData_ne {
              _getContents(): any[][];
            }
            interface FormatData_ne extends CombineTypes<[_FormatData_ne, java.util.ListResourceBundle]> {}
            interface _FormatData_ne_IN$$static extends ClassLike {
              new(): FormatData_ne_IN;
            }
            let FormatData_ne_IN: _FormatData_ne_IN$$static;
            interface _FormatData_ne_IN {
              _getContents(): any[][];
            }
            interface FormatData_ne_IN extends CombineTypes<[_FormatData_ne_IN, java.util.ListResourceBundle]> {}
            interface _FormatData_nl$$static extends ClassLike {
              new(): FormatData_nl;
            }
            let FormatData_nl: _FormatData_nl$$static;
            interface _FormatData_nl {
              _getContents(): any[][];
            }
            interface FormatData_nl extends CombineTypes<[_FormatData_nl, java.util.ListResourceBundle]> {}
            interface _FormatData_nl_BE$$static extends ClassLike {
              new(): FormatData_nl_BE;
            }
            let FormatData_nl_BE: _FormatData_nl_BE$$static;
            interface _FormatData_nl_BE {
              _getContents(): any[][];
            }
            interface FormatData_nl_BE extends CombineTypes<[_FormatData_nl_BE, java.util.ListResourceBundle]> {}
            interface _FormatData_nmg$$static extends ClassLike {
              new(): FormatData_nmg;
            }
            let FormatData_nmg: _FormatData_nmg$$static;
            interface _FormatData_nmg {
              _getContents(): any[][];
            }
            interface FormatData_nmg extends CombineTypes<[_FormatData_nmg, java.util.ListResourceBundle]> {}
            interface _FormatData_nn$$static extends ClassLike {
              new(): FormatData_nn;
            }
            let FormatData_nn: _FormatData_nn$$static;
            interface _FormatData_nn {
              _getContents(): any[][];
            }
            interface FormatData_nn extends CombineTypes<[_FormatData_nn, java.util.ListResourceBundle]> {}
            interface _FormatData_nnh$$static extends ClassLike {
              new(): FormatData_nnh;
            }
            let FormatData_nnh: _FormatData_nnh$$static;
            interface _FormatData_nnh {
              _getContents(): any[][];
            }
            interface FormatData_nnh extends CombineTypes<[_FormatData_nnh, java.util.ListResourceBundle]> {}
            interface _FormatData_no$$static extends ClassLike {
              new(): FormatData_no;
            }
            let FormatData_no: _FormatData_no$$static;
            interface _FormatData_no {
              _getContents(): any[][];
            }
            interface FormatData_no extends CombineTypes<[_FormatData_no, java.util.ListResourceBundle]> {}
            interface _FormatData_nus$$static extends ClassLike {
              new(): FormatData_nus;
            }
            let FormatData_nus: _FormatData_nus$$static;
            interface _FormatData_nus {
              _getContents(): any[][];
            }
            interface FormatData_nus extends CombineTypes<[_FormatData_nus, java.util.ListResourceBundle]> {}
            interface _FormatData_nyn$$static extends ClassLike {
              new(): FormatData_nyn;
            }
            let FormatData_nyn: _FormatData_nyn$$static;
            interface _FormatData_nyn {
              _getContents(): any[][];
            }
            interface FormatData_nyn extends CombineTypes<[_FormatData_nyn, java.util.ListResourceBundle]> {}
            interface _FormatData_oc$$static extends ClassLike {
              new(): FormatData_oc;
            }
            let FormatData_oc: _FormatData_oc$$static;
            interface _FormatData_oc {
              _getContents(): any[][];
            }
            interface FormatData_oc extends CombineTypes<[_FormatData_oc, java.util.ListResourceBundle]> {}
            interface _FormatData_oc_ES$$static extends ClassLike {
              new(): FormatData_oc_ES;
            }
            let FormatData_oc_ES: _FormatData_oc_ES$$static;
            interface _FormatData_oc_ES {
              _getContents(): any[][];
            }
            interface FormatData_oc_ES extends CombineTypes<[_FormatData_oc_ES, java.util.ListResourceBundle]> {}
            interface _FormatData_om$$static extends ClassLike {
              new(): FormatData_om;
            }
            let FormatData_om: _FormatData_om$$static;
            interface _FormatData_om {
              _getContents(): any[][];
            }
            interface FormatData_om extends CombineTypes<[_FormatData_om, java.util.ListResourceBundle]> {}
            interface _FormatData_om_KE$$static extends ClassLike {
              new(): FormatData_om_KE;
            }
            let FormatData_om_KE: _FormatData_om_KE$$static;
            interface _FormatData_om_KE {
              _getContents(): any[][];
            }
            interface FormatData_om_KE extends CombineTypes<[_FormatData_om_KE, java.util.ListResourceBundle]> {}
            interface _FormatData_or$$static extends ClassLike {
              new(): FormatData_or;
            }
            let FormatData_or: _FormatData_or$$static;
            interface _FormatData_or {
              _getContents(): any[][];
            }
            interface FormatData_or extends CombineTypes<[_FormatData_or, java.util.ListResourceBundle]> {}
            interface _FormatData_os$$static extends ClassLike {
              new(): FormatData_os;
            }
            let FormatData_os: _FormatData_os$$static;
            interface _FormatData_os {
              _getContents(): any[][];
            }
            interface FormatData_os extends CombineTypes<[_FormatData_os, java.util.ListResourceBundle]> {}
            interface _FormatData_pa$$static extends ClassLike {
              new(): FormatData_pa;
            }
            let FormatData_pa: _FormatData_pa$$static;
            interface _FormatData_pa {
              _getContents(): any[][];
            }
            interface FormatData_pa extends CombineTypes<[_FormatData_pa, java.util.ListResourceBundle]> {}
            interface _FormatData_pa_Arab$$static extends ClassLike {
              new(): FormatData_pa_Arab;
            }
            let FormatData_pa_Arab: _FormatData_pa_Arab$$static;
            interface _FormatData_pa_Arab {
              _getContents(): any[][];
            }
            interface FormatData_pa_Arab extends CombineTypes<[_FormatData_pa_Arab, java.util.ListResourceBundle]> {}
            interface _FormatData_pcm$$static extends ClassLike {
              new(): FormatData_pcm;
            }
            let FormatData_pcm: _FormatData_pcm$$static;
            interface _FormatData_pcm {
              _getContents(): any[][];
            }
            interface FormatData_pcm extends CombineTypes<[_FormatData_pcm, java.util.ListResourceBundle]> {}
            interface _FormatData_pis$$static extends ClassLike {
              new(): FormatData_pis;
            }
            let FormatData_pis: _FormatData_pis$$static;
            interface _FormatData_pis {
              _getContents(): any[][];
            }
            interface FormatData_pis extends CombineTypes<[_FormatData_pis, java.util.ListResourceBundle]> {}
            interface _FormatData_pl$$static extends ClassLike {
              new(): FormatData_pl;
            }
            let FormatData_pl: _FormatData_pl$$static;
            interface _FormatData_pl {
              _getContents(): any[][];
            }
            interface FormatData_pl extends CombineTypes<[_FormatData_pl, java.util.ListResourceBundle]> {}
            interface _FormatData_ps$$static extends ClassLike {
              new(): FormatData_ps;
            }
            let FormatData_ps: _FormatData_ps$$static;
            interface _FormatData_ps {
              _getContents(): any[][];
            }
            interface FormatData_ps extends CombineTypes<[_FormatData_ps, java.util.ListResourceBundle]> {}
            interface _FormatData_ps_PK$$static extends ClassLike {
              new(): FormatData_ps_PK;
            }
            let FormatData_ps_PK: _FormatData_ps_PK$$static;
            interface _FormatData_ps_PK {
              _getContents(): any[][];
            }
            interface FormatData_ps_PK extends CombineTypes<[_FormatData_ps_PK, java.util.ListResourceBundle]> {}
            interface _FormatData_pt$$static extends ClassLike {
              new(): FormatData_pt;
            }
            let FormatData_pt: _FormatData_pt$$static;
            interface _FormatData_pt {
              _getContents(): any[][];
            }
            interface FormatData_pt extends CombineTypes<[_FormatData_pt, java.util.ListResourceBundle]> {}
            interface _FormatData_pt_MO$$static extends ClassLike {
              new(): FormatData_pt_MO;
            }
            let FormatData_pt_MO: _FormatData_pt_MO$$static;
            interface _FormatData_pt_MO {
              _getContents(): any[][];
            }
            interface FormatData_pt_MO extends CombineTypes<[_FormatData_pt_MO, java.util.ListResourceBundle]> {}
            interface _FormatData_pt_PT$$static extends ClassLike {
              new(): FormatData_pt_PT;
            }
            let FormatData_pt_PT: _FormatData_pt_PT$$static;
            interface _FormatData_pt_PT {
              _getContents(): any[][];
            }
            interface FormatData_pt_PT extends CombineTypes<[_FormatData_pt_PT, java.util.ListResourceBundle]> {}
            interface _FormatData_qu$$static extends ClassLike {
              new(): FormatData_qu;
            }
            let FormatData_qu: _FormatData_qu$$static;
            interface _FormatData_qu {
              _getContents(): any[][];
            }
            interface FormatData_qu extends CombineTypes<[_FormatData_qu, java.util.ListResourceBundle]> {}
            interface _FormatData_qu_BO$$static extends ClassLike {
              new(): FormatData_qu_BO;
            }
            let FormatData_qu_BO: _FormatData_qu_BO$$static;
            interface _FormatData_qu_BO {
              _getContents(): any[][];
            }
            interface FormatData_qu_BO extends CombineTypes<[_FormatData_qu_BO, java.util.ListResourceBundle]> {}
            interface _FormatData_raj$$static extends ClassLike {
              new(): FormatData_raj;
            }
            let FormatData_raj: _FormatData_raj$$static;
            interface _FormatData_raj {
              _getContents(): any[][];
            }
            interface FormatData_raj extends CombineTypes<[_FormatData_raj, java.util.ListResourceBundle]> {}
            interface _FormatData_rm$$static extends ClassLike {
              new(): FormatData_rm;
            }
            let FormatData_rm: _FormatData_rm$$static;
            interface _FormatData_rm {
              _getContents(): any[][];
            }
            interface FormatData_rm extends CombineTypes<[_FormatData_rm, java.util.ListResourceBundle]> {}
            interface _FormatData_rn$$static extends ClassLike {
              new(): FormatData_rn;
            }
            let FormatData_rn: _FormatData_rn$$static;
            interface _FormatData_rn {
              _getContents(): any[][];
            }
            interface FormatData_rn extends CombineTypes<[_FormatData_rn, java.util.ListResourceBundle]> {}
            interface _FormatData_ro$$static extends ClassLike {
              new(): FormatData_ro;
            }
            let FormatData_ro: _FormatData_ro$$static;
            interface _FormatData_ro {
              _getContents(): any[][];
            }
            interface FormatData_ro extends CombineTypes<[_FormatData_ro, java.util.ListResourceBundle]> {}
            interface _FormatData_ro_MD$$static extends ClassLike {
              new(): FormatData_ro_MD;
            }
            let FormatData_ro_MD: _FormatData_ro_MD$$static;
            interface _FormatData_ro_MD {
              _getContents(): any[][];
            }
            interface FormatData_ro_MD extends CombineTypes<[_FormatData_ro_MD, java.util.ListResourceBundle]> {}
            interface _FormatData_rof$$static extends ClassLike {
              new(): FormatData_rof;
            }
            let FormatData_rof: _FormatData_rof$$static;
            interface _FormatData_rof {
              _getContents(): any[][];
            }
            interface FormatData_rof extends CombineTypes<[_FormatData_rof, java.util.ListResourceBundle]> {}
            interface _FormatData_ru$$static extends ClassLike {
              new(): FormatData_ru;
            }
            let FormatData_ru: _FormatData_ru$$static;
            interface _FormatData_ru {
              _getContents(): any[][];
            }
            interface FormatData_ru extends CombineTypes<[_FormatData_ru, java.util.ListResourceBundle]> {}
            interface _FormatData_ru_UA$$static extends ClassLike {
              new(): FormatData_ru_UA;
            }
            let FormatData_ru_UA: _FormatData_ru_UA$$static;
            interface _FormatData_ru_UA {
              _getContents(): any[][];
            }
            interface FormatData_ru_UA extends CombineTypes<[_FormatData_ru_UA, java.util.ListResourceBundle]> {}
            interface _FormatData_rw$$static extends ClassLike {
              new(): FormatData_rw;
            }
            let FormatData_rw: _FormatData_rw$$static;
            interface _FormatData_rw {
              _getContents(): any[][];
            }
            interface FormatData_rw extends CombineTypes<[_FormatData_rw, java.util.ListResourceBundle]> {}
            interface _FormatData_rwk$$static extends ClassLike {
              new(): FormatData_rwk;
            }
            let FormatData_rwk: _FormatData_rwk$$static;
            interface _FormatData_rwk {
              _getContents(): any[][];
            }
            interface FormatData_rwk extends CombineTypes<[_FormatData_rwk, java.util.ListResourceBundle]> {}
            interface _FormatData_sa$$static extends ClassLike {
              new(): FormatData_sa;
            }
            let FormatData_sa: _FormatData_sa$$static;
            interface _FormatData_sa {
              _getContents(): any[][];
            }
            interface FormatData_sa extends CombineTypes<[_FormatData_sa, java.util.ListResourceBundle]> {}
            interface _FormatData_sah$$static extends ClassLike {
              new(): FormatData_sah;
            }
            let FormatData_sah: _FormatData_sah$$static;
            interface _FormatData_sah {
              _getContents(): any[][];
            }
            interface FormatData_sah extends CombineTypes<[_FormatData_sah, java.util.ListResourceBundle]> {}
            interface _FormatData_saq$$static extends ClassLike {
              new(): FormatData_saq;
            }
            let FormatData_saq: _FormatData_saq$$static;
            interface _FormatData_saq {
              _getContents(): any[][];
            }
            interface FormatData_saq extends CombineTypes<[_FormatData_saq, java.util.ListResourceBundle]> {}
            interface _FormatData_sat$$static extends ClassLike {
              new(): FormatData_sat;
            }
            let FormatData_sat: _FormatData_sat$$static;
            interface _FormatData_sat {
              _getContents(): any[][];
            }
            interface FormatData_sat extends CombineTypes<[_FormatData_sat, java.util.ListResourceBundle]> {}
            interface _FormatData_sbp$$static extends ClassLike {
              new(): FormatData_sbp;
            }
            let FormatData_sbp: _FormatData_sbp$$static;
            interface _FormatData_sbp {
              _getContents(): any[][];
            }
            interface FormatData_sbp extends CombineTypes<[_FormatData_sbp, java.util.ListResourceBundle]> {}
            interface _FormatData_sc$$static extends ClassLike {
              new(): FormatData_sc;
            }
            let FormatData_sc: _FormatData_sc$$static;
            interface _FormatData_sc {
              _getContents(): any[][];
            }
            interface FormatData_sc extends CombineTypes<[_FormatData_sc, java.util.ListResourceBundle]> {}
            interface _FormatData_sd$$static extends ClassLike {
              new(): FormatData_sd;
            }
            let FormatData_sd: _FormatData_sd$$static;
            interface _FormatData_sd {
              _getContents(): any[][];
            }
            interface FormatData_sd extends CombineTypes<[_FormatData_sd, java.util.ListResourceBundle]> {}
            interface _FormatData_sd_Deva$$static extends ClassLike {
              new(): FormatData_sd_Deva;
            }
            let FormatData_sd_Deva: _FormatData_sd_Deva$$static;
            interface _FormatData_sd_Deva {
              _getContents(): any[][];
            }
            interface FormatData_sd_Deva extends CombineTypes<[_FormatData_sd_Deva, java.util.ListResourceBundle]> {}
            interface _FormatData_se$$static extends ClassLike {
              new(): FormatData_se;
            }
            let FormatData_se: _FormatData_se$$static;
            interface _FormatData_se {
              _getContents(): any[][];
            }
            interface FormatData_se extends CombineTypes<[_FormatData_se, java.util.ListResourceBundle]> {}
            interface _FormatData_se_FI$$static extends ClassLike {
              new(): FormatData_se_FI;
            }
            let FormatData_se_FI: _FormatData_se_FI$$static;
            interface _FormatData_se_FI {
              _getContents(): any[][];
            }
            interface FormatData_se_FI extends CombineTypes<[_FormatData_se_FI, java.util.ListResourceBundle]> {}
            interface _FormatData_seh$$static extends ClassLike {
              new(): FormatData_seh;
            }
            let FormatData_seh: _FormatData_seh$$static;
            interface _FormatData_seh {
              _getContents(): any[][];
            }
            interface FormatData_seh extends CombineTypes<[_FormatData_seh, java.util.ListResourceBundle]> {}
            interface _FormatData_ses$$static extends ClassLike {
              new(): FormatData_ses;
            }
            let FormatData_ses: _FormatData_ses$$static;
            interface _FormatData_ses {
              _getContents(): any[][];
            }
            interface FormatData_ses extends CombineTypes<[_FormatData_ses, java.util.ListResourceBundle]> {}
            interface _FormatData_sg$$static extends ClassLike {
              new(): FormatData_sg;
            }
            let FormatData_sg: _FormatData_sg$$static;
            interface _FormatData_sg {
              _getContents(): any[][];
            }
            interface FormatData_sg extends CombineTypes<[_FormatData_sg, java.util.ListResourceBundle]> {}
            interface _FormatData_shi$$static extends ClassLike {
              new(): FormatData_shi;
            }
            let FormatData_shi: _FormatData_shi$$static;
            interface _FormatData_shi {
              _getContents(): any[][];
            }
            interface FormatData_shi extends CombineTypes<[_FormatData_shi, java.util.ListResourceBundle]> {}
            interface _FormatData_shi_Latn$$static extends ClassLike {
              new(): FormatData_shi_Latn;
            }
            let FormatData_shi_Latn: _FormatData_shi_Latn$$static;
            interface _FormatData_shi_Latn {
              _getContents(): any[][];
            }
            interface FormatData_shi_Latn extends CombineTypes<[_FormatData_shi_Latn, java.util.ListResourceBundle]> {}
            interface _FormatData_si$$static extends ClassLike {
              new(): FormatData_si;
            }
            let FormatData_si: _FormatData_si$$static;
            interface _FormatData_si {
              _getContents(): any[][];
            }
            interface FormatData_si extends CombineTypes<[_FormatData_si, java.util.ListResourceBundle]> {}
            interface _FormatData_sk$$static extends ClassLike {
              new(): FormatData_sk;
            }
            let FormatData_sk: _FormatData_sk$$static;
            interface _FormatData_sk {
              _getContents(): any[][];
            }
            interface FormatData_sk extends CombineTypes<[_FormatData_sk, java.util.ListResourceBundle]> {}
            interface _FormatData_sl$$static extends ClassLike {
              new(): FormatData_sl;
            }
            let FormatData_sl: _FormatData_sl$$static;
            interface _FormatData_sl {
              _getContents(): any[][];
            }
            interface FormatData_sl extends CombineTypes<[_FormatData_sl, java.util.ListResourceBundle]> {}
            interface _FormatData_smn$$static extends ClassLike {
              new(): FormatData_smn;
            }
            let FormatData_smn: _FormatData_smn$$static;
            interface _FormatData_smn {
              _getContents(): any[][];
            }
            interface FormatData_smn extends CombineTypes<[_FormatData_smn, java.util.ListResourceBundle]> {}
            interface _FormatData_sms$$static extends ClassLike {
              new(): FormatData_sms;
            }
            let FormatData_sms: _FormatData_sms$$static;
            interface _FormatData_sms {
              _getContents(): any[][];
            }
            interface FormatData_sms extends CombineTypes<[_FormatData_sms, java.util.ListResourceBundle]> {}
            interface _FormatData_sn$$static extends ClassLike {
              new(): FormatData_sn;
            }
            let FormatData_sn: _FormatData_sn$$static;
            interface _FormatData_sn {
              _getContents(): any[][];
            }
            interface FormatData_sn extends CombineTypes<[_FormatData_sn, java.util.ListResourceBundle]> {}
            interface _FormatData_so$$static extends ClassLike {
              new(): FormatData_so;
            }
            let FormatData_so: _FormatData_so$$static;
            interface _FormatData_so {
              _getContents(): any[][];
            }
            interface FormatData_so extends CombineTypes<[_FormatData_so, java.util.ListResourceBundle]> {}
            interface _FormatData_so_KE$$static extends ClassLike {
              new(): FormatData_so_KE;
            }
            let FormatData_so_KE: _FormatData_so_KE$$static;
            interface _FormatData_so_KE {
              _getContents(): any[][];
            }
            interface FormatData_so_KE extends CombineTypes<[_FormatData_so_KE, java.util.ListResourceBundle]> {}
            interface _FormatData_sq$$static extends ClassLike {
              new(): FormatData_sq;
            }
            let FormatData_sq: _FormatData_sq$$static;
            interface _FormatData_sq {
              _getContents(): any[][];
            }
            interface FormatData_sq extends CombineTypes<[_FormatData_sq, java.util.ListResourceBundle]> {}
            interface _FormatData_sq_MK$$static extends ClassLike {
              new(): FormatData_sq_MK;
            }
            let FormatData_sq_MK: _FormatData_sq_MK$$static;
            interface _FormatData_sq_MK {
              _getContents(): any[][];
            }
            interface FormatData_sq_MK extends CombineTypes<[_FormatData_sq_MK, java.util.ListResourceBundle]> {}
            interface _FormatData_sq_XK$$static extends ClassLike {
              new(): FormatData_sq_XK;
            }
            let FormatData_sq_XK: _FormatData_sq_XK$$static;
            interface _FormatData_sq_XK {
              _getContents(): any[][];
            }
            interface FormatData_sq_XK extends CombineTypes<[_FormatData_sq_XK, java.util.ListResourceBundle]> {}
            interface _FormatData_sr$$static extends ClassLike {
              new(): FormatData_sr;
            }
            let FormatData_sr: _FormatData_sr$$static;
            interface _FormatData_sr {
              _getContents(): any[][];
            }
            interface FormatData_sr extends CombineTypes<[_FormatData_sr, java.util.ListResourceBundle]> {}
            interface _FormatData_sr_Cyrl_BA$$static extends ClassLike {
              new(): FormatData_sr_Cyrl_BA;
            }
            let FormatData_sr_Cyrl_BA: _FormatData_sr_Cyrl_BA$$static;
            interface _FormatData_sr_Cyrl_BA {
              _getContents(): any[][];
            }
            interface FormatData_sr_Cyrl_BA extends CombineTypes<[_FormatData_sr_Cyrl_BA, java.util.ListResourceBundle]> {}
            interface _FormatData_sr_Cyrl_ME$$static extends ClassLike {
              new(): FormatData_sr_Cyrl_ME;
            }
            let FormatData_sr_Cyrl_ME: _FormatData_sr_Cyrl_ME$$static;
            interface _FormatData_sr_Cyrl_ME {
              _getContents(): any[][];
            }
            interface FormatData_sr_Cyrl_ME extends CombineTypes<[_FormatData_sr_Cyrl_ME, java.util.ListResourceBundle]> {}
            interface _FormatData_sr_Cyrl_XK$$static extends ClassLike {
              new(): FormatData_sr_Cyrl_XK;
            }
            let FormatData_sr_Cyrl_XK: _FormatData_sr_Cyrl_XK$$static;
            interface _FormatData_sr_Cyrl_XK {
              _getContents(): any[][];
            }
            interface FormatData_sr_Cyrl_XK extends CombineTypes<[_FormatData_sr_Cyrl_XK, java.util.ListResourceBundle]> {}
            interface _FormatData_sr_Latn$$static extends ClassLike {
              new(): FormatData_sr_Latn;
            }
            let FormatData_sr_Latn: _FormatData_sr_Latn$$static;
            interface _FormatData_sr_Latn {
              _getContents(): any[][];
            }
            interface FormatData_sr_Latn extends CombineTypes<[_FormatData_sr_Latn, java.util.ListResourceBundle]> {}
            interface _FormatData_sr_Latn_BA$$static extends ClassLike {
              new(): FormatData_sr_Latn_BA;
            }
            let FormatData_sr_Latn_BA: _FormatData_sr_Latn_BA$$static;
            interface _FormatData_sr_Latn_BA {
              _getContents(): any[][];
            }
            interface FormatData_sr_Latn_BA extends CombineTypes<[_FormatData_sr_Latn_BA, java.util.ListResourceBundle]> {}
            interface _FormatData_sr_Latn_ME$$static extends ClassLike {
              new(): FormatData_sr_Latn_ME;
            }
            let FormatData_sr_Latn_ME: _FormatData_sr_Latn_ME$$static;
            interface _FormatData_sr_Latn_ME {
              _getContents(): any[][];
            }
            interface FormatData_sr_Latn_ME extends CombineTypes<[_FormatData_sr_Latn_ME, java.util.ListResourceBundle]> {}
            interface _FormatData_sr_Latn_XK$$static extends ClassLike {
              new(): FormatData_sr_Latn_XK;
            }
            let FormatData_sr_Latn_XK: _FormatData_sr_Latn_XK$$static;
            interface _FormatData_sr_Latn_XK {
              _getContents(): any[][];
            }
            interface FormatData_sr_Latn_XK extends CombineTypes<[_FormatData_sr_Latn_XK, java.util.ListResourceBundle]> {}
            interface _FormatData_su$$static extends ClassLike {
              new(): FormatData_su;
            }
            let FormatData_su: _FormatData_su$$static;
            interface _FormatData_su {
              _getContents(): any[][];
            }
            interface FormatData_su extends CombineTypes<[_FormatData_su, java.util.ListResourceBundle]> {}
            interface _FormatData_sv$$static extends ClassLike {
              new(): FormatData_sv;
            }
            let FormatData_sv: _FormatData_sv$$static;
            interface _FormatData_sv {
              _getContents(): any[][];
            }
            interface FormatData_sv extends CombineTypes<[_FormatData_sv, java.util.ListResourceBundle]> {}
            interface _FormatData_sv_FI$$static extends ClassLike {
              new(): FormatData_sv_FI;
            }
            let FormatData_sv_FI: _FormatData_sv_FI$$static;
            interface _FormatData_sv_FI {
              _getContents(): any[][];
            }
            interface FormatData_sv_FI extends CombineTypes<[_FormatData_sv_FI, java.util.ListResourceBundle]> {}
            interface _FormatData_sw$$static extends ClassLike {
              new(): FormatData_sw;
            }
            let FormatData_sw: _FormatData_sw$$static;
            interface _FormatData_sw {
              _getContents(): any[][];
            }
            interface FormatData_sw extends CombineTypes<[_FormatData_sw, java.util.ListResourceBundle]> {}
            interface _FormatData_sw_CD$$static extends ClassLike {
              new(): FormatData_sw_CD;
            }
            let FormatData_sw_CD: _FormatData_sw_CD$$static;
            interface _FormatData_sw_CD {
              _getContents(): any[][];
            }
            interface FormatData_sw_CD extends CombineTypes<[_FormatData_sw_CD, java.util.ListResourceBundle]> {}
            interface _FormatData_sw_KE$$static extends ClassLike {
              new(): FormatData_sw_KE;
            }
            let FormatData_sw_KE: _FormatData_sw_KE$$static;
            interface _FormatData_sw_KE {
              _getContents(): any[][];
            }
            interface FormatData_sw_KE extends CombineTypes<[_FormatData_sw_KE, java.util.ListResourceBundle]> {}
            interface _FormatData_ta$$static extends ClassLike {
              new(): FormatData_ta;
            }
            let FormatData_ta: _FormatData_ta$$static;
            interface _FormatData_ta {
              _getContents(): any[][];
            }
            interface FormatData_ta extends CombineTypes<[_FormatData_ta, java.util.ListResourceBundle]> {}
            interface _FormatData_ta_LK$$static extends ClassLike {
              new(): FormatData_ta_LK;
            }
            let FormatData_ta_LK: _FormatData_ta_LK$$static;
            interface _FormatData_ta_LK {
              _getContents(): any[][];
            }
            interface FormatData_ta_LK extends CombineTypes<[_FormatData_ta_LK, java.util.ListResourceBundle]> {}
            interface _FormatData_ta_MY$$static extends ClassLike {
              new(): FormatData_ta_MY;
            }
            let FormatData_ta_MY: _FormatData_ta_MY$$static;
            interface _FormatData_ta_MY {
              _getContents(): any[][];
            }
            interface FormatData_ta_MY extends CombineTypes<[_FormatData_ta_MY, java.util.ListResourceBundle]> {}
            interface _FormatData_ta_SG$$static extends ClassLike {
              new(): FormatData_ta_SG;
            }
            let FormatData_ta_SG: _FormatData_ta_SG$$static;
            interface _FormatData_ta_SG {
              _getContents(): any[][];
            }
            interface FormatData_ta_SG extends CombineTypes<[_FormatData_ta_SG, java.util.ListResourceBundle]> {}
            interface _FormatData_te$$static extends ClassLike {
              new(): FormatData_te;
            }
            let FormatData_te: _FormatData_te$$static;
            interface _FormatData_te {
              _getContents(): any[][];
            }
            interface FormatData_te extends CombineTypes<[_FormatData_te, java.util.ListResourceBundle]> {}
            interface _FormatData_teo$$static extends ClassLike {
              new(): FormatData_teo;
            }
            let FormatData_teo: _FormatData_teo$$static;
            interface _FormatData_teo {
              _getContents(): any[][];
            }
            interface FormatData_teo extends CombineTypes<[_FormatData_teo, java.util.ListResourceBundle]> {}
            interface _FormatData_tg$$static extends ClassLike {
              new(): FormatData_tg;
            }
            let FormatData_tg: _FormatData_tg$$static;
            interface _FormatData_tg {
              _getContents(): any[][];
            }
            interface FormatData_tg extends CombineTypes<[_FormatData_tg, java.util.ListResourceBundle]> {}
            interface _FormatData_th$$static extends ClassLike {
              new(): FormatData_th;
            }
            let FormatData_th: _FormatData_th$$static;
            interface _FormatData_th {
              _getContents(): any[][];
            }
            interface FormatData_th extends CombineTypes<[_FormatData_th, java.util.ListResourceBundle]> {}
            interface _FormatData_ti$$static extends ClassLike {
              new(): FormatData_ti;
            }
            let FormatData_ti: _FormatData_ti$$static;
            interface _FormatData_ti {
              _getContents(): any[][];
            }
            interface FormatData_ti extends CombineTypes<[_FormatData_ti, java.util.ListResourceBundle]> {}
            interface _FormatData_ti_ER$$static extends ClassLike {
              new(): FormatData_ti_ER;
            }
            let FormatData_ti_ER: _FormatData_ti_ER$$static;
            interface _FormatData_ti_ER {
              _getContents(): any[][];
            }
            interface FormatData_ti_ER extends CombineTypes<[_FormatData_ti_ER, java.util.ListResourceBundle]> {}
            interface _FormatData_tk$$static extends ClassLike {
              new(): FormatData_tk;
            }
            let FormatData_tk: _FormatData_tk$$static;
            interface _FormatData_tk {
              _getContents(): any[][];
            }
            interface FormatData_tk extends CombineTypes<[_FormatData_tk, java.util.ListResourceBundle]> {}
            interface _FormatData_to$$static extends ClassLike {
              new(): FormatData_to;
            }
            let FormatData_to: _FormatData_to$$static;
            interface _FormatData_to {
              _getContents(): any[][];
            }
            interface FormatData_to extends CombineTypes<[_FormatData_to, java.util.ListResourceBundle]> {}
            interface _FormatData_tr$$static extends ClassLike {
              new(): FormatData_tr;
            }
            let FormatData_tr: _FormatData_tr$$static;
            interface _FormatData_tr {
              _getContents(): any[][];
            }
            interface FormatData_tr extends CombineTypes<[_FormatData_tr, java.util.ListResourceBundle]> {}
            interface _FormatData_tr_CY$$static extends ClassLike {
              new(): FormatData_tr_CY;
            }
            let FormatData_tr_CY: _FormatData_tr_CY$$static;
            interface _FormatData_tr_CY {
              _getContents(): any[][];
            }
            interface FormatData_tr_CY extends CombineTypes<[_FormatData_tr_CY, java.util.ListResourceBundle]> {}
            interface _FormatData_tt$$static extends ClassLike {
              new(): FormatData_tt;
            }
            let FormatData_tt: _FormatData_tt$$static;
            interface _FormatData_tt {
              _getContents(): any[][];
            }
            interface FormatData_tt extends CombineTypes<[_FormatData_tt, java.util.ListResourceBundle]> {}
            interface _FormatData_twq$$static extends ClassLike {
              new(): FormatData_twq;
            }
            let FormatData_twq: _FormatData_twq$$static;
            interface _FormatData_twq {
              _getContents(): any[][];
            }
            interface FormatData_twq extends CombineTypes<[_FormatData_twq, java.util.ListResourceBundle]> {}
            interface _FormatData_tzm$$static extends ClassLike {
              new(): FormatData_tzm;
            }
            let FormatData_tzm: _FormatData_tzm$$static;
            interface _FormatData_tzm {
              _getContents(): any[][];
            }
            interface FormatData_tzm extends CombineTypes<[_FormatData_tzm, java.util.ListResourceBundle]> {}
            interface _FormatData_ug$$static extends ClassLike {
              new(): FormatData_ug;
            }
            let FormatData_ug: _FormatData_ug$$static;
            interface _FormatData_ug {
              _getContents(): any[][];
            }
            interface FormatData_ug extends CombineTypes<[_FormatData_ug, java.util.ListResourceBundle]> {}
            interface _FormatData_uk$$static extends ClassLike {
              new(): FormatData_uk;
            }
            let FormatData_uk: _FormatData_uk$$static;
            interface _FormatData_uk {
              _getContents(): any[][];
            }
            interface FormatData_uk extends CombineTypes<[_FormatData_uk, java.util.ListResourceBundle]> {}
            interface _FormatData_ur$$static extends ClassLike {
              new(): FormatData_ur;
            }
            let FormatData_ur: _FormatData_ur$$static;
            interface _FormatData_ur {
              _getContents(): any[][];
            }
            interface FormatData_ur extends CombineTypes<[_FormatData_ur, java.util.ListResourceBundle]> {}
            interface _FormatData_ur_IN$$static extends ClassLike {
              new(): FormatData_ur_IN;
            }
            let FormatData_ur_IN: _FormatData_ur_IN$$static;
            interface _FormatData_ur_IN {
              _getContents(): any[][];
            }
            interface FormatData_ur_IN extends CombineTypes<[_FormatData_ur_IN, java.util.ListResourceBundle]> {}
            interface _FormatData_uz$$static extends ClassLike {
              new(): FormatData_uz;
            }
            let FormatData_uz: _FormatData_uz$$static;
            interface _FormatData_uz {
              _getContents(): any[][];
            }
            interface FormatData_uz extends CombineTypes<[_FormatData_uz, java.util.ListResourceBundle]> {}
            interface _FormatData_uz_Arab$$static extends ClassLike {
              new(): FormatData_uz_Arab;
            }
            let FormatData_uz_Arab: _FormatData_uz_Arab$$static;
            interface _FormatData_uz_Arab {
              _getContents(): any[][];
            }
            interface FormatData_uz_Arab extends CombineTypes<[_FormatData_uz_Arab, java.util.ListResourceBundle]> {}
            interface _FormatData_uz_Cyrl$$static extends ClassLike {
              new(): FormatData_uz_Cyrl;
            }
            let FormatData_uz_Cyrl: _FormatData_uz_Cyrl$$static;
            interface _FormatData_uz_Cyrl {
              _getContents(): any[][];
            }
            interface FormatData_uz_Cyrl extends CombineTypes<[_FormatData_uz_Cyrl, java.util.ListResourceBundle]> {}
            interface _FormatData_vai$$static extends ClassLike {
              new(): FormatData_vai;
            }
            let FormatData_vai: _FormatData_vai$$static;
            interface _FormatData_vai {
              _getContents(): any[][];
            }
            interface FormatData_vai extends CombineTypes<[_FormatData_vai, java.util.ListResourceBundle]> {}
            interface _FormatData_vai_Latn$$static extends ClassLike {
              new(): FormatData_vai_Latn;
            }
            let FormatData_vai_Latn: _FormatData_vai_Latn$$static;
            interface _FormatData_vai_Latn {
              _getContents(): any[][];
            }
            interface FormatData_vai_Latn extends CombineTypes<[_FormatData_vai_Latn, java.util.ListResourceBundle]> {}
            interface _FormatData_vi$$static extends ClassLike {
              new(): FormatData_vi;
            }
            let FormatData_vi: _FormatData_vi$$static;
            interface _FormatData_vi {
              _getContents(): any[][];
            }
            interface FormatData_vi extends CombineTypes<[_FormatData_vi, java.util.ListResourceBundle]> {}
            interface _FormatData_vun$$static extends ClassLike {
              new(): FormatData_vun;
            }
            let FormatData_vun: _FormatData_vun$$static;
            interface _FormatData_vun {
              _getContents(): any[][];
            }
            interface FormatData_vun extends CombineTypes<[_FormatData_vun, java.util.ListResourceBundle]> {}
            interface _FormatData_wae$$static extends ClassLike {
              new(): FormatData_wae;
            }
            let FormatData_wae: _FormatData_wae$$static;
            interface _FormatData_wae {
              _getContents(): any[][];
            }
            interface FormatData_wae extends CombineTypes<[_FormatData_wae, java.util.ListResourceBundle]> {}
            interface _FormatData_wo$$static extends ClassLike {
              new(): FormatData_wo;
            }
            let FormatData_wo: _FormatData_wo$$static;
            interface _FormatData_wo {
              _getContents(): any[][];
            }
            interface FormatData_wo extends CombineTypes<[_FormatData_wo, java.util.ListResourceBundle]> {}
            interface _FormatData_xh$$static extends ClassLike {
              new(): FormatData_xh;
            }
            let FormatData_xh: _FormatData_xh$$static;
            interface _FormatData_xh {
              _getContents(): any[][];
            }
            interface FormatData_xh extends CombineTypes<[_FormatData_xh, java.util.ListResourceBundle]> {}
            interface _FormatData_xog$$static extends ClassLike {
              new(): FormatData_xog;
            }
            let FormatData_xog: _FormatData_xog$$static;
            interface _FormatData_xog {
              _getContents(): any[][];
            }
            interface FormatData_xog extends CombineTypes<[_FormatData_xog, java.util.ListResourceBundle]> {}
            interface _FormatData_yav$$static extends ClassLike {
              new(): FormatData_yav;
            }
            let FormatData_yav: _FormatData_yav$$static;
            interface _FormatData_yav {
              _getContents(): any[][];
            }
            interface FormatData_yav extends CombineTypes<[_FormatData_yav, java.util.ListResourceBundle]> {}
            interface _FormatData_yi$$static extends ClassLike {
              new(): FormatData_yi;
            }
            let FormatData_yi: _FormatData_yi$$static;
            interface _FormatData_yi {
              _getContents(): any[][];
            }
            interface FormatData_yi extends CombineTypes<[_FormatData_yi, java.util.ListResourceBundle]> {}
            interface _FormatData_yo$$static extends ClassLike {
              new(): FormatData_yo;
            }
            let FormatData_yo: _FormatData_yo$$static;
            interface _FormatData_yo {
              _getContents(): any[][];
            }
            interface FormatData_yo extends CombineTypes<[_FormatData_yo, java.util.ListResourceBundle]> {}
            interface _FormatData_yo_BJ$$static extends ClassLike {
              new(): FormatData_yo_BJ;
            }
            let FormatData_yo_BJ: _FormatData_yo_BJ$$static;
            interface _FormatData_yo_BJ {
              _getContents(): any[][];
            }
            interface FormatData_yo_BJ extends CombineTypes<[_FormatData_yo_BJ, java.util.ListResourceBundle]> {}
            interface _FormatData_yrl$$static extends ClassLike {
              new(): FormatData_yrl;
            }
            let FormatData_yrl: _FormatData_yrl$$static;
            interface _FormatData_yrl {
              _getContents(): any[][];
            }
            interface FormatData_yrl extends CombineTypes<[_FormatData_yrl, java.util.ListResourceBundle]> {}
            interface _FormatData_yrl_CO$$static extends ClassLike {
              new(): FormatData_yrl_CO;
            }
            let FormatData_yrl_CO: _FormatData_yrl_CO$$static;
            interface _FormatData_yrl_CO {
              _getContents(): any[][];
            }
            interface FormatData_yrl_CO extends CombineTypes<[_FormatData_yrl_CO, java.util.ListResourceBundle]> {}
            interface _FormatData_yrl_VE$$static extends ClassLike {
              new(): FormatData_yrl_VE;
            }
            let FormatData_yrl_VE: _FormatData_yrl_VE$$static;
            interface _FormatData_yrl_VE {
              _getContents(): any[][];
            }
            interface FormatData_yrl_VE extends CombineTypes<[_FormatData_yrl_VE, java.util.ListResourceBundle]> {}
            interface _FormatData_yue$$static extends ClassLike {
              new(): FormatData_yue;
            }
            let FormatData_yue: _FormatData_yue$$static;
            interface _FormatData_yue {
              _getContents(): any[][];
            }
            interface FormatData_yue extends CombineTypes<[_FormatData_yue, java.util.ListResourceBundle]> {}
            interface _FormatData_yue_Hans$$static extends ClassLike {
              new(): FormatData_yue_Hans;
            }
            let FormatData_yue_Hans: _FormatData_yue_Hans$$static;
            interface _FormatData_yue_Hans {
              _getContents(): any[][];
            }
            interface FormatData_yue_Hans extends CombineTypes<[_FormatData_yue_Hans, java.util.ListResourceBundle]> {}
            interface _FormatData_zgh$$static extends ClassLike {
              new(): FormatData_zgh;
            }
            let FormatData_zgh: _FormatData_zgh$$static;
            interface _FormatData_zgh {
              _getContents(): any[][];
            }
            interface FormatData_zgh extends CombineTypes<[_FormatData_zgh, java.util.ListResourceBundle]> {}
            interface _FormatData_zh$$static extends ClassLike {
              new(): FormatData_zh;
            }
            let FormatData_zh: _FormatData_zh$$static;
            interface _FormatData_zh {
              _getContents(): any[][];
            }
            interface FormatData_zh extends CombineTypes<[_FormatData_zh, java.util.ListResourceBundle]> {}
            interface _FormatData_zh_Hans_HK$$static extends ClassLike {
              new(): FormatData_zh_Hans_HK;
            }
            let FormatData_zh_Hans_HK: _FormatData_zh_Hans_HK$$static;
            interface _FormatData_zh_Hans_HK {
              _getContents(): any[][];
            }
            interface FormatData_zh_Hans_HK extends CombineTypes<[_FormatData_zh_Hans_HK, java.util.ListResourceBundle]> {}
            interface _FormatData_zh_Hans_MO$$static extends ClassLike {
              new(): FormatData_zh_Hans_MO;
            }
            let FormatData_zh_Hans_MO: _FormatData_zh_Hans_MO$$static;
            interface _FormatData_zh_Hans_MO {
              _getContents(): any[][];
            }
            interface FormatData_zh_Hans_MO extends CombineTypes<[_FormatData_zh_Hans_MO, java.util.ListResourceBundle]> {}
            interface _FormatData_zh_Hans_SG$$static extends ClassLike {
              new(): FormatData_zh_Hans_SG;
            }
            let FormatData_zh_Hans_SG: _FormatData_zh_Hans_SG$$static;
            interface _FormatData_zh_Hans_SG {
              _getContents(): any[][];
            }
            interface FormatData_zh_Hans_SG extends CombineTypes<[_FormatData_zh_Hans_SG, java.util.ListResourceBundle]> {}
            interface _FormatData_zh_Hant$$static extends ClassLike {
              new(): FormatData_zh_Hant;
            }
            let FormatData_zh_Hant: _FormatData_zh_Hant$$static;
            interface _FormatData_zh_Hant {
              _getContents(): any[][];
            }
            interface FormatData_zh_Hant extends CombineTypes<[_FormatData_zh_Hant, java.util.ListResourceBundle]> {}
            interface _FormatData_zh_Hant_HK$$static extends ClassLike {
              new(): FormatData_zh_Hant_HK;
            }
            let FormatData_zh_Hant_HK: _FormatData_zh_Hant_HK$$static;
            interface _FormatData_zh_Hant_HK {
              _getContents(): any[][];
            }
            interface FormatData_zh_Hant_HK extends CombineTypes<[_FormatData_zh_Hant_HK, java.util.ListResourceBundle]> {}
            interface _FormatData_zu$$static extends ClassLike {
              new(): FormatData_zu;
            }
            let FormatData_zu: _FormatData_zu$$static;
            interface _FormatData_zu {
              _getContents(): any[][];
            }
            interface FormatData_zu extends CombineTypes<[_FormatData_zu, java.util.ListResourceBundle]> {}
          }
        }
        module ext {
          interface _BreakIteratorInfo_th$$static extends ClassLike {
            new(): BreakIteratorInfo_th;
          }
          let BreakIteratorInfo_th: _BreakIteratorInfo_th$$static;
          interface _BreakIteratorInfo_th {
            _getContents(): any[][];
          }
          interface BreakIteratorInfo_th extends CombineTypes<[_BreakIteratorInfo_th, java.util.ListResourceBundle]> {}
          interface _BreakIteratorResources_th$$static extends ClassLike {
            new(): BreakIteratorResources_th;
          }
          let BreakIteratorResources_th: _BreakIteratorResources_th$$static;
          interface _BreakIteratorResources_th {
            _getBreakIteratorInfo(): java.util.ResourceBundle;
          }
          interface BreakIteratorResources_th extends CombineTypes<[_BreakIteratorResources_th, sun.util.resources.BreakIteratorResourceBundle]> {}
          interface _CollationData_ar$$static extends ClassLike {
            new(): CollationData_ar;
          }
          let CollationData_ar: _CollationData_ar$$static;
          interface _CollationData_ar {
            _getContents(): any[][];
          }
          interface CollationData_ar extends CombineTypes<[_CollationData_ar, java.util.ListResourceBundle]> {}
          interface _CollationData_be$$static extends ClassLike {
            new(): CollationData_be;
          }
          let CollationData_be: _CollationData_be$$static;
          interface _CollationData_be {
            _getContents(): any[][];
          }
          interface CollationData_be extends CombineTypes<[_CollationData_be, java.util.ListResourceBundle]> {}
          interface _CollationData_bg$$static extends ClassLike {
            new(): CollationData_bg;
          }
          let CollationData_bg: _CollationData_bg$$static;
          interface _CollationData_bg {
            _getContents(): any[][];
          }
          interface CollationData_bg extends CombineTypes<[_CollationData_bg, java.util.ListResourceBundle]> {}
          interface _CollationData_ca$$static extends ClassLike {
            new(): CollationData_ca;
          }
          let CollationData_ca: _CollationData_ca$$static;
          interface _CollationData_ca {
            _getContents(): any[][];
          }
          interface CollationData_ca extends CombineTypes<[_CollationData_ca, java.util.ListResourceBundle]> {}
          interface _CollationData_cs$$static extends ClassLike {
            new(): CollationData_cs;
          }
          let CollationData_cs: _CollationData_cs$$static;
          interface _CollationData_cs {
            _getContents(): any[][];
          }
          interface CollationData_cs extends CombineTypes<[_CollationData_cs, java.util.ListResourceBundle]> {}
          interface _CollationData_da$$static extends ClassLike {
            new(): CollationData_da;
          }
          let CollationData_da: _CollationData_da$$static;
          interface _CollationData_da {
            _getContents(): any[][];
          }
          interface CollationData_da extends CombineTypes<[_CollationData_da, java.util.ListResourceBundle]> {}
          interface _CollationData_el$$static extends ClassLike {
            new(): CollationData_el;
          }
          let CollationData_el: _CollationData_el$$static;
          interface _CollationData_el {
            _getContents(): any[][];
          }
          interface CollationData_el extends CombineTypes<[_CollationData_el, java.util.ListResourceBundle]> {}
          interface _CollationData_es$$static extends ClassLike {
            new(): CollationData_es;
          }
          let CollationData_es: _CollationData_es$$static;
          interface _CollationData_es {
            _getContents(): any[][];
          }
          interface CollationData_es extends CombineTypes<[_CollationData_es, java.util.ListResourceBundle]> {}
          interface _CollationData_et$$static extends ClassLike {
            new(): CollationData_et;
          }
          let CollationData_et: _CollationData_et$$static;
          interface _CollationData_et {
            _getContents(): any[][];
          }
          interface CollationData_et extends CombineTypes<[_CollationData_et, java.util.ListResourceBundle]> {}
          interface _CollationData_fi$$static extends ClassLike {
            new(): CollationData_fi;
          }
          let CollationData_fi: _CollationData_fi$$static;
          interface _CollationData_fi {
            _getContents(): any[][];
          }
          interface CollationData_fi extends CombineTypes<[_CollationData_fi, java.util.ListResourceBundle]> {}
          interface _CollationData_fr$$static extends ClassLike {
            new(): CollationData_fr;
          }
          let CollationData_fr: _CollationData_fr$$static;
          interface _CollationData_fr {
            _getContents(): any[][];
          }
          interface CollationData_fr extends CombineTypes<[_CollationData_fr, java.util.ListResourceBundle]> {}
          interface _CollationData_he$$static extends ClassLike {
            new(): CollationData_he;
          }
          let CollationData_he: _CollationData_he$$static;
          interface _CollationData_he {
            _getContents(): any[][];
          }
          interface CollationData_he extends CombineTypes<[_CollationData_he, java.util.ListResourceBundle]> {}
          interface _CollationData_hi$$static extends ClassLike {
            new(): CollationData_hi;
          }
          let CollationData_hi: _CollationData_hi$$static;
          interface _CollationData_hi {
            _getContents(): any[][];
          }
          interface CollationData_hi extends CombineTypes<[_CollationData_hi, java.util.ListResourceBundle]> {}
          interface _CollationData_hr$$static extends ClassLike {
            new(): CollationData_hr;
          }
          let CollationData_hr: _CollationData_hr$$static;
          interface _CollationData_hr {
            _getContents(): any[][];
          }
          interface CollationData_hr extends CombineTypes<[_CollationData_hr, java.util.ListResourceBundle]> {}
          interface _CollationData_hu$$static extends ClassLike {
            new(): CollationData_hu;
          }
          let CollationData_hu: _CollationData_hu$$static;
          interface _CollationData_hu {
            _getContents(): any[][];
          }
          interface CollationData_hu extends CombineTypes<[_CollationData_hu, java.util.ListResourceBundle]> {}
          interface _CollationData_is$$static extends ClassLike {
            new(): CollationData_is;
          }
          let CollationData_is: _CollationData_is$$static;
          interface _CollationData_is {
            _getContents(): any[][];
          }
          interface CollationData_is extends CombineTypes<[_CollationData_is, java.util.ListResourceBundle]> {}
          interface _CollationData_ja$$static extends ClassLike {
            new(): CollationData_ja;
          }
          let CollationData_ja: _CollationData_ja$$static;
          interface _CollationData_ja {
            _getContents(): any[][];
          }
          interface CollationData_ja extends CombineTypes<[_CollationData_ja, java.util.ListResourceBundle]> {}
          interface _CollationData_ko$$static extends ClassLike {
            new(): CollationData_ko;
          }
          let CollationData_ko: _CollationData_ko$$static;
          interface _CollationData_ko {
            _getContents(): any[][];
          }
          interface CollationData_ko extends CombineTypes<[_CollationData_ko, java.util.ListResourceBundle]> {}
          interface _CollationData_lt$$static extends ClassLike {
            new(): CollationData_lt;
          }
          let CollationData_lt: _CollationData_lt$$static;
          interface _CollationData_lt {
            _getContents(): any[][];
          }
          interface CollationData_lt extends CombineTypes<[_CollationData_lt, java.util.ListResourceBundle]> {}
          interface _CollationData_lv$$static extends ClassLike {
            new(): CollationData_lv;
          }
          let CollationData_lv: _CollationData_lv$$static;
          interface _CollationData_lv {
            _getContents(): any[][];
          }
          interface CollationData_lv extends CombineTypes<[_CollationData_lv, java.util.ListResourceBundle]> {}
          interface _CollationData_mk$$static extends ClassLike {
            new(): CollationData_mk;
          }
          let CollationData_mk: _CollationData_mk$$static;
          interface _CollationData_mk {
            _getContents(): any[][];
          }
          interface CollationData_mk extends CombineTypes<[_CollationData_mk, java.util.ListResourceBundle]> {}
          interface _CollationData_no$$static extends ClassLike {
            new(): CollationData_no;
          }
          let CollationData_no: _CollationData_no$$static;
          interface _CollationData_no {
            _getContents(): any[][];
          }
          interface CollationData_no extends CombineTypes<[_CollationData_no, java.util.ListResourceBundle]> {}
          interface _CollationData_pl$$static extends ClassLike {
            new(): CollationData_pl;
          }
          let CollationData_pl: _CollationData_pl$$static;
          interface _CollationData_pl {
            _getContents(): any[][];
          }
          interface CollationData_pl extends CombineTypes<[_CollationData_pl, java.util.ListResourceBundle]> {}
          interface _CollationData_ro$$static extends ClassLike {
            new(): CollationData_ro;
          }
          let CollationData_ro: _CollationData_ro$$static;
          interface _CollationData_ro {
            _getContents(): any[][];
          }
          interface CollationData_ro extends CombineTypes<[_CollationData_ro, java.util.ListResourceBundle]> {}
          interface _CollationData_ru$$static extends ClassLike {
            new(): CollationData_ru;
          }
          let CollationData_ru: _CollationData_ru$$static;
          interface _CollationData_ru {
            _getContents(): any[][];
          }
          interface CollationData_ru extends CombineTypes<[_CollationData_ru, java.util.ListResourceBundle]> {}
          interface _CollationData_sk$$static extends ClassLike {
            new(): CollationData_sk;
          }
          let CollationData_sk: _CollationData_sk$$static;
          interface _CollationData_sk {
            _getContents(): any[][];
          }
          interface CollationData_sk extends CombineTypes<[_CollationData_sk, java.util.ListResourceBundle]> {}
          interface _CollationData_sl$$static extends ClassLike {
            new(): CollationData_sl;
          }
          let CollationData_sl: _CollationData_sl$$static;
          interface _CollationData_sl {
            _getContents(): any[][];
          }
          interface CollationData_sl extends CombineTypes<[_CollationData_sl, java.util.ListResourceBundle]> {}
          interface _CollationData_sq$$static extends ClassLike {
            new(): CollationData_sq;
          }
          let CollationData_sq: _CollationData_sq$$static;
          interface _CollationData_sq {
            _getContents(): any[][];
          }
          interface CollationData_sq extends CombineTypes<[_CollationData_sq, java.util.ListResourceBundle]> {}
          interface _CollationData_sr$$static extends ClassLike {
            new(): CollationData_sr;
          }
          let CollationData_sr: _CollationData_sr$$static;
          interface _CollationData_sr {
            _getContents(): any[][];
          }
          interface CollationData_sr extends CombineTypes<[_CollationData_sr, java.util.ListResourceBundle]> {}
          interface _CollationData_sr_Latn$$static extends ClassLike {
            new(): CollationData_sr_Latn;
          }
          let CollationData_sr_Latn: _CollationData_sr_Latn$$static;
          interface _CollationData_sr_Latn {
            _getContents(): any[][];
          }
          interface CollationData_sr_Latn extends CombineTypes<[_CollationData_sr_Latn, java.util.ListResourceBundle]> {}
          interface _CollationData_sv$$static extends ClassLike {
            new(): CollationData_sv;
          }
          let CollationData_sv: _CollationData_sv$$static;
          interface _CollationData_sv {
            _getContents(): any[][];
          }
          interface CollationData_sv extends CombineTypes<[_CollationData_sv, java.util.ListResourceBundle]> {}
          interface _CollationData_th$$static extends ClassLike {
            new(): CollationData_th;
          }
          let CollationData_th: _CollationData_th$$static;
          interface _CollationData_th {
            _getContents(): any[][];
          }
          interface CollationData_th extends CombineTypes<[_CollationData_th, java.util.ListResourceBundle]> {}
          interface _CollationData_tr$$static extends ClassLike {
            new(): CollationData_tr;
          }
          let CollationData_tr: _CollationData_tr$$static;
          interface _CollationData_tr {
            _getContents(): any[][];
          }
          interface CollationData_tr extends CombineTypes<[_CollationData_tr, java.util.ListResourceBundle]> {}
          interface _CollationData_uk$$static extends ClassLike {
            new(): CollationData_uk;
          }
          let CollationData_uk: _CollationData_uk$$static;
          interface _CollationData_uk {
            _getContents(): any[][];
          }
          interface CollationData_uk extends CombineTypes<[_CollationData_uk, java.util.ListResourceBundle]> {}
          interface _CollationData_vi$$static extends ClassLike {
            new(): CollationData_vi;
          }
          let CollationData_vi: _CollationData_vi$$static;
          interface _CollationData_vi {
            _getContents(): any[][];
          }
          interface CollationData_vi extends CombineTypes<[_CollationData_vi, java.util.ListResourceBundle]> {}
          interface _CollationData_zh$$static extends ClassLike {
            new(): CollationData_zh;
          }
          let CollationData_zh: _CollationData_zh$$static;
          interface _CollationData_zh {
            _getContents(): any[][];
          }
          interface CollationData_zh extends CombineTypes<[_CollationData_zh, java.util.ListResourceBundle]> {}
          interface _CollationData_zh_HK$$static extends ClassLike {
            new(): CollationData_zh_HK;
          }
          let CollationData_zh_HK: _CollationData_zh_HK$$static;
          interface _CollationData_zh_HK {
            _getContents(): any[][];
          }
          interface CollationData_zh_HK extends CombineTypes<[_CollationData_zh_HK, java.util.ListResourceBundle]> {}
          interface _CollationData_zh_TW$$static extends ClassLike {
            new(): CollationData_zh_TW;
          }
          let CollationData_zh_TW: _CollationData_zh_TW$$static;
          interface _CollationData_zh_TW {
            _getContents(): any[][];
          }
          interface CollationData_zh_TW extends CombineTypes<[_CollationData_zh_TW, java.util.ListResourceBundle]> {}
          interface _FormatData_ar$$static extends ClassLike {
            new(): FormatData_ar;
          }
          let FormatData_ar: _FormatData_ar$$static;
          interface _FormatData_ar {
            _getContents(): any[][];
          }
          interface FormatData_ar extends CombineTypes<[_FormatData_ar, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_ar_JO$$static extends ClassLike {
            new(): FormatData_ar_JO;
          }
          let FormatData_ar_JO: _FormatData_ar_JO$$static;
          interface _FormatData_ar_JO {
            _getContents(): any[][];
          }
          interface FormatData_ar_JO extends CombineTypes<[_FormatData_ar_JO, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_ar_LB$$static extends ClassLike {
            new(): FormatData_ar_LB;
          }
          let FormatData_ar_LB: _FormatData_ar_LB$$static;
          interface _FormatData_ar_LB {
            _getContents(): any[][];
          }
          interface FormatData_ar_LB extends CombineTypes<[_FormatData_ar_LB, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_ar_SY$$static extends ClassLike {
            new(): FormatData_ar_SY;
          }
          let FormatData_ar_SY: _FormatData_ar_SY$$static;
          interface _FormatData_ar_SY {
            _getContents(): any[][];
          }
          interface FormatData_ar_SY extends CombineTypes<[_FormatData_ar_SY, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_be$$static extends ClassLike {
            new(): FormatData_be;
          }
          let FormatData_be: _FormatData_be$$static;
          interface _FormatData_be {
            _getContents(): any[][];
          }
          interface FormatData_be extends CombineTypes<[_FormatData_be, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_be_BY$$static extends ClassLike {
            new(): FormatData_be_BY;
          }
          let FormatData_be_BY: _FormatData_be_BY$$static;
          interface _FormatData_be_BY {
            _getContents(): any[][];
          }
          interface FormatData_be_BY extends CombineTypes<[_FormatData_be_BY, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_bg$$static extends ClassLike {
            new(): FormatData_bg;
          }
          let FormatData_bg: _FormatData_bg$$static;
          interface _FormatData_bg {
            _getContents(): any[][];
          }
          interface FormatData_bg extends CombineTypes<[_FormatData_bg, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_bg_BG$$static extends ClassLike {
            new(): FormatData_bg_BG;
          }
          let FormatData_bg_BG: _FormatData_bg_BG$$static;
          interface _FormatData_bg_BG {
            _getContents(): any[][];
          }
          interface FormatData_bg_BG extends CombineTypes<[_FormatData_bg_BG, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_ca$$static extends ClassLike {
            new(): FormatData_ca;
          }
          let FormatData_ca: _FormatData_ca$$static;
          interface _FormatData_ca {
            _getContents(): any[][];
          }
          interface FormatData_ca extends CombineTypes<[_FormatData_ca, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_ca_ES$$static extends ClassLike {
            new(): FormatData_ca_ES;
          }
          let FormatData_ca_ES: _FormatData_ca_ES$$static;
          interface _FormatData_ca_ES {
            _getContents(): any[][];
          }
          interface FormatData_ca_ES extends CombineTypes<[_FormatData_ca_ES, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_cs$$static extends ClassLike {
            new(): FormatData_cs;
          }
          let FormatData_cs: _FormatData_cs$$static;
          interface _FormatData_cs {
            _getContents(): any[][];
          }
          interface FormatData_cs extends CombineTypes<[_FormatData_cs, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_cs_CZ$$static extends ClassLike {
            new(): FormatData_cs_CZ;
          }
          let FormatData_cs_CZ: _FormatData_cs_CZ$$static;
          interface _FormatData_cs_CZ {
            _getContents(): any[][];
          }
          interface FormatData_cs_CZ extends CombineTypes<[_FormatData_cs_CZ, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_da$$static extends ClassLike {
            new(): FormatData_da;
          }
          let FormatData_da: _FormatData_da$$static;
          interface _FormatData_da {
            _getContents(): any[][];
          }
          interface FormatData_da extends CombineTypes<[_FormatData_da, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_da_DK$$static extends ClassLike {
            new(): FormatData_da_DK;
          }
          let FormatData_da_DK: _FormatData_da_DK$$static;
          interface _FormatData_da_DK {
            _getContents(): any[][];
          }
          interface FormatData_da_DK extends CombineTypes<[_FormatData_da_DK, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_de$$static extends ClassLike {
            new(): FormatData_de;
          }
          let FormatData_de: _FormatData_de$$static;
          interface _FormatData_de {
            _getContents(): any[][];
          }
          interface FormatData_de extends CombineTypes<[_FormatData_de, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_de_AT$$static extends ClassLike {
            new(): FormatData_de_AT;
          }
          let FormatData_de_AT: _FormatData_de_AT$$static;
          interface _FormatData_de_AT {
            _getContents(): any[][];
          }
          interface FormatData_de_AT extends CombineTypes<[_FormatData_de_AT, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_de_CH$$static extends ClassLike {
            new(): FormatData_de_CH;
          }
          let FormatData_de_CH: _FormatData_de_CH$$static;
          interface _FormatData_de_CH {
            _getContents(): any[][];
          }
          interface FormatData_de_CH extends CombineTypes<[_FormatData_de_CH, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_de_DE$$static extends ClassLike {
            new(): FormatData_de_DE;
          }
          let FormatData_de_DE: _FormatData_de_DE$$static;
          interface _FormatData_de_DE {
            _getContents(): any[][];
          }
          interface FormatData_de_DE extends CombineTypes<[_FormatData_de_DE, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_de_LU$$static extends ClassLike {
            new(): FormatData_de_LU;
          }
          let FormatData_de_LU: _FormatData_de_LU$$static;
          interface _FormatData_de_LU {
            _getContents(): any[][];
          }
          interface FormatData_de_LU extends CombineTypes<[_FormatData_de_LU, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_el$$static extends ClassLike {
            new(): FormatData_el;
          }
          let FormatData_el: _FormatData_el$$static;
          interface _FormatData_el {
            _getContents(): any[][];
          }
          interface FormatData_el extends CombineTypes<[_FormatData_el, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_el_CY$$static extends ClassLike {
            new(): FormatData_el_CY;
          }
          let FormatData_el_CY: _FormatData_el_CY$$static;
          interface _FormatData_el_CY {
            _getContents(): any[][];
          }
          interface FormatData_el_CY extends CombineTypes<[_FormatData_el_CY, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_el_GR$$static extends ClassLike {
            new(): FormatData_el_GR;
          }
          let FormatData_el_GR: _FormatData_el_GR$$static;
          interface _FormatData_el_GR {
            _getContents(): any[][];
          }
          interface FormatData_el_GR extends CombineTypes<[_FormatData_el_GR, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_en_AU$$static extends ClassLike {
            new(): FormatData_en_AU;
          }
          let FormatData_en_AU: _FormatData_en_AU$$static;
          interface _FormatData_en_AU {
            _getContents(): any[][];
          }
          interface FormatData_en_AU extends CombineTypes<[_FormatData_en_AU, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_en_CA$$static extends ClassLike {
            new(): FormatData_en_CA;
          }
          let FormatData_en_CA: _FormatData_en_CA$$static;
          interface _FormatData_en_CA {
            _getContents(): any[][];
          }
          interface FormatData_en_CA extends CombineTypes<[_FormatData_en_CA, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_en_GB$$static extends ClassLike {
            new(): FormatData_en_GB;
          }
          let FormatData_en_GB: _FormatData_en_GB$$static;
          interface _FormatData_en_GB {
            _getContents(): any[][];
          }
          interface FormatData_en_GB extends CombineTypes<[_FormatData_en_GB, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_en_IE$$static extends ClassLike {
            new(): FormatData_en_IE;
          }
          let FormatData_en_IE: _FormatData_en_IE$$static;
          interface _FormatData_en_IE {
            _getContents(): any[][];
          }
          interface FormatData_en_IE extends CombineTypes<[_FormatData_en_IE, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_en_IN$$static extends ClassLike {
            new(): FormatData_en_IN;
          }
          let FormatData_en_IN: _FormatData_en_IN$$static;
          interface _FormatData_en_IN {
            _getContents(): any[][];
          }
          interface FormatData_en_IN extends CombineTypes<[_FormatData_en_IN, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_en_MT$$static extends ClassLike {
            new(): FormatData_en_MT;
          }
          let FormatData_en_MT: _FormatData_en_MT$$static;
          interface _FormatData_en_MT {
            _getContents(): any[][];
          }
          interface FormatData_en_MT extends CombineTypes<[_FormatData_en_MT, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_en_NZ$$static extends ClassLike {
            new(): FormatData_en_NZ;
          }
          let FormatData_en_NZ: _FormatData_en_NZ$$static;
          interface _FormatData_en_NZ {
            _getContents(): any[][];
          }
          interface FormatData_en_NZ extends CombineTypes<[_FormatData_en_NZ, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_en_PH$$static extends ClassLike {
            new(): FormatData_en_PH;
          }
          let FormatData_en_PH: _FormatData_en_PH$$static;
          interface _FormatData_en_PH {
            _getContents(): any[][];
          }
          interface FormatData_en_PH extends CombineTypes<[_FormatData_en_PH, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_en_SG$$static extends ClassLike {
            new(): FormatData_en_SG;
          }
          let FormatData_en_SG: _FormatData_en_SG$$static;
          interface _FormatData_en_SG {
            _getContents(): any[][];
          }
          interface FormatData_en_SG extends CombineTypes<[_FormatData_en_SG, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_en_ZA$$static extends ClassLike {
            new(): FormatData_en_ZA;
          }
          let FormatData_en_ZA: _FormatData_en_ZA$$static;
          interface _FormatData_en_ZA {
            _getContents(): any[][];
          }
          interface FormatData_en_ZA extends CombineTypes<[_FormatData_en_ZA, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_es$$static extends ClassLike {
            new(): FormatData_es;
          }
          let FormatData_es: _FormatData_es$$static;
          interface _FormatData_es {
            _getContents(): any[][];
          }
          interface FormatData_es extends CombineTypes<[_FormatData_es, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_es_AR$$static extends ClassLike {
            new(): FormatData_es_AR;
          }
          let FormatData_es_AR: _FormatData_es_AR$$static;
          interface _FormatData_es_AR {
            _getContents(): any[][];
          }
          interface FormatData_es_AR extends CombineTypes<[_FormatData_es_AR, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_es_BO$$static extends ClassLike {
            new(): FormatData_es_BO;
          }
          let FormatData_es_BO: _FormatData_es_BO$$static;
          interface _FormatData_es_BO {
            _getContents(): any[][];
          }
          interface FormatData_es_BO extends CombineTypes<[_FormatData_es_BO, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_es_CL$$static extends ClassLike {
            new(): FormatData_es_CL;
          }
          let FormatData_es_CL: _FormatData_es_CL$$static;
          interface _FormatData_es_CL {
            _getContents(): any[][];
          }
          interface FormatData_es_CL extends CombineTypes<[_FormatData_es_CL, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_es_CO$$static extends ClassLike {
            new(): FormatData_es_CO;
          }
          let FormatData_es_CO: _FormatData_es_CO$$static;
          interface _FormatData_es_CO {
            _getContents(): any[][];
          }
          interface FormatData_es_CO extends CombineTypes<[_FormatData_es_CO, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_es_CR$$static extends ClassLike {
            new(): FormatData_es_CR;
          }
          let FormatData_es_CR: _FormatData_es_CR$$static;
          interface _FormatData_es_CR {
            _getContents(): any[][];
          }
          interface FormatData_es_CR extends CombineTypes<[_FormatData_es_CR, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_es_DO$$static extends ClassLike {
            new(): FormatData_es_DO;
          }
          let FormatData_es_DO: _FormatData_es_DO$$static;
          interface _FormatData_es_DO {
            _getContents(): any[][];
          }
          interface FormatData_es_DO extends CombineTypes<[_FormatData_es_DO, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_es_EC$$static extends ClassLike {
            new(): FormatData_es_EC;
          }
          let FormatData_es_EC: _FormatData_es_EC$$static;
          interface _FormatData_es_EC {
            _getContents(): any[][];
          }
          interface FormatData_es_EC extends CombineTypes<[_FormatData_es_EC, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_es_ES$$static extends ClassLike {
            new(): FormatData_es_ES;
          }
          let FormatData_es_ES: _FormatData_es_ES$$static;
          interface _FormatData_es_ES {
            _getContents(): any[][];
          }
          interface FormatData_es_ES extends CombineTypes<[_FormatData_es_ES, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_es_GT$$static extends ClassLike {
            new(): FormatData_es_GT;
          }
          let FormatData_es_GT: _FormatData_es_GT$$static;
          interface _FormatData_es_GT {
            _getContents(): any[][];
          }
          interface FormatData_es_GT extends CombineTypes<[_FormatData_es_GT, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_es_HN$$static extends ClassLike {
            new(): FormatData_es_HN;
          }
          let FormatData_es_HN: _FormatData_es_HN$$static;
          interface _FormatData_es_HN {
            _getContents(): any[][];
          }
          interface FormatData_es_HN extends CombineTypes<[_FormatData_es_HN, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_es_MX$$static extends ClassLike {
            new(): FormatData_es_MX;
          }
          let FormatData_es_MX: _FormatData_es_MX$$static;
          interface _FormatData_es_MX {
            _getContents(): any[][];
          }
          interface FormatData_es_MX extends CombineTypes<[_FormatData_es_MX, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_es_NI$$static extends ClassLike {
            new(): FormatData_es_NI;
          }
          let FormatData_es_NI: _FormatData_es_NI$$static;
          interface _FormatData_es_NI {
            _getContents(): any[][];
          }
          interface FormatData_es_NI extends CombineTypes<[_FormatData_es_NI, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_es_PA$$static extends ClassLike {
            new(): FormatData_es_PA;
          }
          let FormatData_es_PA: _FormatData_es_PA$$static;
          interface _FormatData_es_PA {
            _getContents(): any[][];
          }
          interface FormatData_es_PA extends CombineTypes<[_FormatData_es_PA, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_es_PE$$static extends ClassLike {
            new(): FormatData_es_PE;
          }
          let FormatData_es_PE: _FormatData_es_PE$$static;
          interface _FormatData_es_PE {
            _getContents(): any[][];
          }
          interface FormatData_es_PE extends CombineTypes<[_FormatData_es_PE, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_es_PR$$static extends ClassLike {
            new(): FormatData_es_PR;
          }
          let FormatData_es_PR: _FormatData_es_PR$$static;
          interface _FormatData_es_PR {
            _getContents(): any[][];
          }
          interface FormatData_es_PR extends CombineTypes<[_FormatData_es_PR, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_es_PY$$static extends ClassLike {
            new(): FormatData_es_PY;
          }
          let FormatData_es_PY: _FormatData_es_PY$$static;
          interface _FormatData_es_PY {
            _getContents(): any[][];
          }
          interface FormatData_es_PY extends CombineTypes<[_FormatData_es_PY, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_es_SV$$static extends ClassLike {
            new(): FormatData_es_SV;
          }
          let FormatData_es_SV: _FormatData_es_SV$$static;
          interface _FormatData_es_SV {
            _getContents(): any[][];
          }
          interface FormatData_es_SV extends CombineTypes<[_FormatData_es_SV, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_es_US$$static extends ClassLike {
            new(): FormatData_es_US;
          }
          let FormatData_es_US: _FormatData_es_US$$static;
          interface _FormatData_es_US {
            _getContents(): any[][];
          }
          interface FormatData_es_US extends CombineTypes<[_FormatData_es_US, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_es_UY$$static extends ClassLike {
            new(): FormatData_es_UY;
          }
          let FormatData_es_UY: _FormatData_es_UY$$static;
          interface _FormatData_es_UY {
            _getContents(): any[][];
          }
          interface FormatData_es_UY extends CombineTypes<[_FormatData_es_UY, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_es_VE$$static extends ClassLike {
            new(): FormatData_es_VE;
          }
          let FormatData_es_VE: _FormatData_es_VE$$static;
          interface _FormatData_es_VE {
            _getContents(): any[][];
          }
          interface FormatData_es_VE extends CombineTypes<[_FormatData_es_VE, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_et$$static extends ClassLike {
            new(): FormatData_et;
          }
          let FormatData_et: _FormatData_et$$static;
          interface _FormatData_et {
            _getContents(): any[][];
          }
          interface FormatData_et extends CombineTypes<[_FormatData_et, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_et_EE$$static extends ClassLike {
            new(): FormatData_et_EE;
          }
          let FormatData_et_EE: _FormatData_et_EE$$static;
          interface _FormatData_et_EE {
            _getContents(): any[][];
          }
          interface FormatData_et_EE extends CombineTypes<[_FormatData_et_EE, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_fi$$static extends ClassLike {
            new(): FormatData_fi;
          }
          let FormatData_fi: _FormatData_fi$$static;
          interface _FormatData_fi {
            _getContents(): any[][];
          }
          interface FormatData_fi extends CombineTypes<[_FormatData_fi, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_fi_FI$$static extends ClassLike {
            new(): FormatData_fi_FI;
          }
          let FormatData_fi_FI: _FormatData_fi_FI$$static;
          interface _FormatData_fi_FI {
            _getContents(): any[][];
          }
          interface FormatData_fi_FI extends CombineTypes<[_FormatData_fi_FI, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_fr$$static extends ClassLike {
            new(): FormatData_fr;
          }
          let FormatData_fr: _FormatData_fr$$static;
          interface _FormatData_fr {
            _getContents(): any[][];
          }
          interface FormatData_fr extends CombineTypes<[_FormatData_fr, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_fr_BE$$static extends ClassLike {
            new(): FormatData_fr_BE;
          }
          let FormatData_fr_BE: _FormatData_fr_BE$$static;
          interface _FormatData_fr_BE {
            _getContents(): any[][];
          }
          interface FormatData_fr_BE extends CombineTypes<[_FormatData_fr_BE, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_fr_CA$$static extends ClassLike {
            new(): FormatData_fr_CA;
          }
          let FormatData_fr_CA: _FormatData_fr_CA$$static;
          interface _FormatData_fr_CA {
            _getContents(): any[][];
          }
          interface FormatData_fr_CA extends CombineTypes<[_FormatData_fr_CA, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_fr_CH$$static extends ClassLike {
            new(): FormatData_fr_CH;
          }
          let FormatData_fr_CH: _FormatData_fr_CH$$static;
          interface _FormatData_fr_CH {
            _getContents(): any[][];
          }
          interface FormatData_fr_CH extends CombineTypes<[_FormatData_fr_CH, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_fr_FR$$static extends ClassLike {
            new(): FormatData_fr_FR;
          }
          let FormatData_fr_FR: _FormatData_fr_FR$$static;
          interface _FormatData_fr_FR {
            _getContents(): any[][];
          }
          interface FormatData_fr_FR extends CombineTypes<[_FormatData_fr_FR, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_ga$$static extends ClassLike {
            new(): FormatData_ga;
          }
          let FormatData_ga: _FormatData_ga$$static;
          interface _FormatData_ga {
            _getContents(): any[][];
          }
          interface FormatData_ga extends CombineTypes<[_FormatData_ga, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_ga_IE$$static extends ClassLike {
            new(): FormatData_ga_IE;
          }
          let FormatData_ga_IE: _FormatData_ga_IE$$static;
          interface _FormatData_ga_IE {
            _getContents(): any[][];
          }
          interface FormatData_ga_IE extends CombineTypes<[_FormatData_ga_IE, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_he$$static extends ClassLike {
            new(): FormatData_he;
          }
          let FormatData_he: _FormatData_he$$static;
          interface _FormatData_he {
            _getContents(): any[][];
          }
          interface FormatData_he extends CombineTypes<[_FormatData_he, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_he_IL$$static extends ClassLike {
            new(): FormatData_he_IL;
          }
          let FormatData_he_IL: _FormatData_he_IL$$static;
          interface _FormatData_he_IL {
            _getContents(): any[][];
          }
          interface FormatData_he_IL extends CombineTypes<[_FormatData_he_IL, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_hi_IN$$static extends ClassLike {
            new(): FormatData_hi_IN;
          }
          let FormatData_hi_IN: _FormatData_hi_IN$$static;
          interface _FormatData_hi_IN {
            _getContents(): any[][];
          }
          interface FormatData_hi_IN extends CombineTypes<[_FormatData_hi_IN, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_hr$$static extends ClassLike {
            new(): FormatData_hr;
          }
          let FormatData_hr: _FormatData_hr$$static;
          interface _FormatData_hr {
            _getContents(): any[][];
          }
          interface FormatData_hr extends CombineTypes<[_FormatData_hr, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_hr_HR$$static extends ClassLike {
            new(): FormatData_hr_HR;
          }
          let FormatData_hr_HR: _FormatData_hr_HR$$static;
          interface _FormatData_hr_HR {
            _getContents(): any[][];
          }
          interface FormatData_hr_HR extends CombineTypes<[_FormatData_hr_HR, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_hu$$static extends ClassLike {
            new(): FormatData_hu;
          }
          let FormatData_hu: _FormatData_hu$$static;
          interface _FormatData_hu {
            _getContents(): any[][];
          }
          interface FormatData_hu extends CombineTypes<[_FormatData_hu, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_hu_HU$$static extends ClassLike {
            new(): FormatData_hu_HU;
          }
          let FormatData_hu_HU: _FormatData_hu_HU$$static;
          interface _FormatData_hu_HU {
            _getContents(): any[][];
          }
          interface FormatData_hu_HU extends CombineTypes<[_FormatData_hu_HU, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_id$$static extends ClassLike {
            new(): FormatData_id;
          }
          let FormatData_id: _FormatData_id$$static;
          interface _FormatData_id {
            _getContents(): any[][];
          }
          interface FormatData_id extends CombineTypes<[_FormatData_id, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_id_ID$$static extends ClassLike {
            new(): FormatData_id_ID;
          }
          let FormatData_id_ID: _FormatData_id_ID$$static;
          interface _FormatData_id_ID {
            _getContents(): any[][];
          }
          interface FormatData_id_ID extends CombineTypes<[_FormatData_id_ID, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_is$$static extends ClassLike {
            new(): FormatData_is;
          }
          let FormatData_is: _FormatData_is$$static;
          interface _FormatData_is {
            _getContents(): any[][];
          }
          interface FormatData_is extends CombineTypes<[_FormatData_is, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_is_IS$$static extends ClassLike {
            new(): FormatData_is_IS;
          }
          let FormatData_is_IS: _FormatData_is_IS$$static;
          interface _FormatData_is_IS {
            _getContents(): any[][];
          }
          interface FormatData_is_IS extends CombineTypes<[_FormatData_is_IS, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_it$$static extends ClassLike {
            new(): FormatData_it;
          }
          let FormatData_it: _FormatData_it$$static;
          interface _FormatData_it {
            _getContents(): any[][];
          }
          interface FormatData_it extends CombineTypes<[_FormatData_it, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_it_CH$$static extends ClassLike {
            new(): FormatData_it_CH;
          }
          let FormatData_it_CH: _FormatData_it_CH$$static;
          interface _FormatData_it_CH {
            _getContents(): any[][];
          }
          interface FormatData_it_CH extends CombineTypes<[_FormatData_it_CH, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_it_IT$$static extends ClassLike {
            new(): FormatData_it_IT;
          }
          let FormatData_it_IT: _FormatData_it_IT$$static;
          interface _FormatData_it_IT {
            _getContents(): any[][];
          }
          interface FormatData_it_IT extends CombineTypes<[_FormatData_it_IT, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_ja$$static extends ClassLike {
            new(): FormatData_ja;
          }
          let FormatData_ja: _FormatData_ja$$static;
          interface _FormatData_ja {
            _getContents(): any[][];
          }
          interface FormatData_ja extends CombineTypes<[_FormatData_ja, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_ja_JP$$static extends ClassLike {
            new(): FormatData_ja_JP;
          }
          let FormatData_ja_JP: _FormatData_ja_JP$$static;
          interface _FormatData_ja_JP {
            _getContents(): any[][];
          }
          interface FormatData_ja_JP extends CombineTypes<[_FormatData_ja_JP, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_ko$$static extends ClassLike {
            new(): FormatData_ko;
          }
          let FormatData_ko: _FormatData_ko$$static;
          interface _FormatData_ko {
            _getContents(): any[][];
          }
          interface FormatData_ko extends CombineTypes<[_FormatData_ko, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_ko_KR$$static extends ClassLike {
            new(): FormatData_ko_KR;
          }
          let FormatData_ko_KR: _FormatData_ko_KR$$static;
          interface _FormatData_ko_KR {
            _getContents(): any[][];
          }
          interface FormatData_ko_KR extends CombineTypes<[_FormatData_ko_KR, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_lt$$static extends ClassLike {
            new(): FormatData_lt;
          }
          let FormatData_lt: _FormatData_lt$$static;
          interface _FormatData_lt {
            _getContents(): any[][];
          }
          interface FormatData_lt extends CombineTypes<[_FormatData_lt, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_lt_LT$$static extends ClassLike {
            new(): FormatData_lt_LT;
          }
          let FormatData_lt_LT: _FormatData_lt_LT$$static;
          interface _FormatData_lt_LT {
            _getContents(): any[][];
          }
          interface FormatData_lt_LT extends CombineTypes<[_FormatData_lt_LT, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_lv$$static extends ClassLike {
            new(): FormatData_lv;
          }
          let FormatData_lv: _FormatData_lv$$static;
          interface _FormatData_lv {
            _getContents(): any[][];
          }
          interface FormatData_lv extends CombineTypes<[_FormatData_lv, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_lv_LV$$static extends ClassLike {
            new(): FormatData_lv_LV;
          }
          let FormatData_lv_LV: _FormatData_lv_LV$$static;
          interface _FormatData_lv_LV {
            _getContents(): any[][];
          }
          interface FormatData_lv_LV extends CombineTypes<[_FormatData_lv_LV, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_mk$$static extends ClassLike {
            new(): FormatData_mk;
          }
          let FormatData_mk: _FormatData_mk$$static;
          interface _FormatData_mk {
            _getContents(): any[][];
          }
          interface FormatData_mk extends CombineTypes<[_FormatData_mk, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_mk_MK$$static extends ClassLike {
            new(): FormatData_mk_MK;
          }
          let FormatData_mk_MK: _FormatData_mk_MK$$static;
          interface _FormatData_mk_MK {
            _getContents(): any[][];
          }
          interface FormatData_mk_MK extends CombineTypes<[_FormatData_mk_MK, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_ms$$static extends ClassLike {
            new(): FormatData_ms;
          }
          let FormatData_ms: _FormatData_ms$$static;
          interface _FormatData_ms {
            _getContents(): any[][];
          }
          interface FormatData_ms extends CombineTypes<[_FormatData_ms, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_ms_MY$$static extends ClassLike {
            new(): FormatData_ms_MY;
          }
          let FormatData_ms_MY: _FormatData_ms_MY$$static;
          interface _FormatData_ms_MY {
            _getContents(): any[][];
          }
          interface FormatData_ms_MY extends CombineTypes<[_FormatData_ms_MY, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_mt$$static extends ClassLike {
            new(): FormatData_mt;
          }
          let FormatData_mt: _FormatData_mt$$static;
          interface _FormatData_mt {
            _getContents(): any[][];
          }
          interface FormatData_mt extends CombineTypes<[_FormatData_mt, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_mt_MT$$static extends ClassLike {
            new(): FormatData_mt_MT;
          }
          let FormatData_mt_MT: _FormatData_mt_MT$$static;
          interface _FormatData_mt_MT {
            _getContents(): any[][];
          }
          interface FormatData_mt_MT extends CombineTypes<[_FormatData_mt_MT, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_nl$$static extends ClassLike {
            new(): FormatData_nl;
          }
          let FormatData_nl: _FormatData_nl$$static;
          interface _FormatData_nl {
            _getContents(): any[][];
          }
          interface FormatData_nl extends CombineTypes<[_FormatData_nl, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_nl_BE$$static extends ClassLike {
            new(): FormatData_nl_BE;
          }
          let FormatData_nl_BE: _FormatData_nl_BE$$static;
          interface _FormatData_nl_BE {
            _getContents(): any[][];
          }
          interface FormatData_nl_BE extends CombineTypes<[_FormatData_nl_BE, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_nl_NL$$static extends ClassLike {
            new(): FormatData_nl_NL;
          }
          let FormatData_nl_NL: _FormatData_nl_NL$$static;
          interface _FormatData_nl_NL {
            _getContents(): any[][];
          }
          interface FormatData_nl_NL extends CombineTypes<[_FormatData_nl_NL, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_no$$static extends ClassLike {
            new(): FormatData_no;
          }
          let FormatData_no: _FormatData_no$$static;
          interface _FormatData_no {
            _getContents(): any[][];
          }
          interface FormatData_no extends CombineTypes<[_FormatData_no, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_no_NO$$static extends ClassLike {
            new(): FormatData_no_NO;
          }
          let FormatData_no_NO: _FormatData_no_NO$$static;
          interface _FormatData_no_NO {
            _getContents(): any[][];
          }
          interface FormatData_no_NO extends CombineTypes<[_FormatData_no_NO, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_no_NO_NY$$static extends ClassLike {
            new(): FormatData_no_NO_NY;
          }
          let FormatData_no_NO_NY: _FormatData_no_NO_NY$$static;
          interface _FormatData_no_NO_NY {
            _getContents(): any[][];
          }
          interface FormatData_no_NO_NY extends CombineTypes<[_FormatData_no_NO_NY, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_pl$$static extends ClassLike {
            new(): FormatData_pl;
          }
          let FormatData_pl: _FormatData_pl$$static;
          interface _FormatData_pl {
            _getContents(): any[][];
          }
          interface FormatData_pl extends CombineTypes<[_FormatData_pl, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_pl_PL$$static extends ClassLike {
            new(): FormatData_pl_PL;
          }
          let FormatData_pl_PL: _FormatData_pl_PL$$static;
          interface _FormatData_pl_PL {
            _getContents(): any[][];
          }
          interface FormatData_pl_PL extends CombineTypes<[_FormatData_pl_PL, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_pt$$static extends ClassLike {
            new(): FormatData_pt;
          }
          let FormatData_pt: _FormatData_pt$$static;
          interface _FormatData_pt {
            _getContents(): any[][];
          }
          interface FormatData_pt extends CombineTypes<[_FormatData_pt, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_pt_BR$$static extends ClassLike {
            new(): FormatData_pt_BR;
          }
          let FormatData_pt_BR: _FormatData_pt_BR$$static;
          interface _FormatData_pt_BR {
            _getContents(): any[][];
          }
          interface FormatData_pt_BR extends CombineTypes<[_FormatData_pt_BR, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_pt_PT$$static extends ClassLike {
            new(): FormatData_pt_PT;
          }
          let FormatData_pt_PT: _FormatData_pt_PT$$static;
          interface _FormatData_pt_PT {
            _getContents(): any[][];
          }
          interface FormatData_pt_PT extends CombineTypes<[_FormatData_pt_PT, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_ro$$static extends ClassLike {
            new(): FormatData_ro;
          }
          let FormatData_ro: _FormatData_ro$$static;
          interface _FormatData_ro {
            _getContents(): any[][];
          }
          interface FormatData_ro extends CombineTypes<[_FormatData_ro, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_ro_RO$$static extends ClassLike {
            new(): FormatData_ro_RO;
          }
          let FormatData_ro_RO: _FormatData_ro_RO$$static;
          interface _FormatData_ro_RO {
            _getContents(): any[][];
          }
          interface FormatData_ro_RO extends CombineTypes<[_FormatData_ro_RO, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_ru$$static extends ClassLike {
            new(): FormatData_ru;
          }
          let FormatData_ru: _FormatData_ru$$static;
          interface _FormatData_ru {
            _getContents(): any[][];
          }
          interface FormatData_ru extends CombineTypes<[_FormatData_ru, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_ru_RU$$static extends ClassLike {
            new(): FormatData_ru_RU;
          }
          let FormatData_ru_RU: _FormatData_ru_RU$$static;
          interface _FormatData_ru_RU {
            _getContents(): any[][];
          }
          interface FormatData_ru_RU extends CombineTypes<[_FormatData_ru_RU, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_sk$$static extends ClassLike {
            new(): FormatData_sk;
          }
          let FormatData_sk: _FormatData_sk$$static;
          interface _FormatData_sk {
            _getContents(): any[][];
          }
          interface FormatData_sk extends CombineTypes<[_FormatData_sk, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_sk_SK$$static extends ClassLike {
            new(): FormatData_sk_SK;
          }
          let FormatData_sk_SK: _FormatData_sk_SK$$static;
          interface _FormatData_sk_SK {
            _getContents(): any[][];
          }
          interface FormatData_sk_SK extends CombineTypes<[_FormatData_sk_SK, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_sl$$static extends ClassLike {
            new(): FormatData_sl;
          }
          let FormatData_sl: _FormatData_sl$$static;
          interface _FormatData_sl {
            _getContents(): any[][];
          }
          interface FormatData_sl extends CombineTypes<[_FormatData_sl, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_sl_SI$$static extends ClassLike {
            new(): FormatData_sl_SI;
          }
          let FormatData_sl_SI: _FormatData_sl_SI$$static;
          interface _FormatData_sl_SI {
            _getContents(): any[][];
          }
          interface FormatData_sl_SI extends CombineTypes<[_FormatData_sl_SI, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_sq$$static extends ClassLike {
            new(): FormatData_sq;
          }
          let FormatData_sq: _FormatData_sq$$static;
          interface _FormatData_sq {
            _getContents(): any[][];
          }
          interface FormatData_sq extends CombineTypes<[_FormatData_sq, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_sq_AL$$static extends ClassLike {
            new(): FormatData_sq_AL;
          }
          let FormatData_sq_AL: _FormatData_sq_AL$$static;
          interface _FormatData_sq_AL {
            _getContents(): any[][];
          }
          interface FormatData_sq_AL extends CombineTypes<[_FormatData_sq_AL, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_sr$$static extends ClassLike {
            new(): FormatData_sr;
          }
          let FormatData_sr: _FormatData_sr$$static;
          interface _FormatData_sr {
            _getContents(): any[][];
          }
          interface FormatData_sr extends CombineTypes<[_FormatData_sr, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_sr_BA$$static extends ClassLike {
            new(): FormatData_sr_BA;
          }
          let FormatData_sr_BA: _FormatData_sr_BA$$static;
          interface _FormatData_sr_BA {
            _getContents(): any[][];
          }
          interface FormatData_sr_BA extends CombineTypes<[_FormatData_sr_BA, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_sr_CS$$static extends ClassLike {
            new(): FormatData_sr_CS;
          }
          let FormatData_sr_CS: _FormatData_sr_CS$$static;
          interface _FormatData_sr_CS {
            _getContents(): any[][];
          }
          interface FormatData_sr_CS extends CombineTypes<[_FormatData_sr_CS, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_sr_Latn$$static extends ClassLike {
            new(): FormatData_sr_Latn;
          }
          let FormatData_sr_Latn: _FormatData_sr_Latn$$static;
          interface _FormatData_sr_Latn {
            _getContents(): any[][];
          }
          interface FormatData_sr_Latn extends CombineTypes<[_FormatData_sr_Latn, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_sr_Latn_ME$$static extends ClassLike {
            new(): FormatData_sr_Latn_ME;
          }
          let FormatData_sr_Latn_ME: _FormatData_sr_Latn_ME$$static;
          interface _FormatData_sr_Latn_ME {
            _getContents(): any[][];
          }
          interface FormatData_sr_Latn_ME extends CombineTypes<[_FormatData_sr_Latn_ME, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_sr_ME$$static extends ClassLike {
            new(): FormatData_sr_ME;
          }
          let FormatData_sr_ME: _FormatData_sr_ME$$static;
          interface _FormatData_sr_ME {
            _getContents(): any[][];
          }
          interface FormatData_sr_ME extends CombineTypes<[_FormatData_sr_ME, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_sr_RS$$static extends ClassLike {
            new(): FormatData_sr_RS;
          }
          let FormatData_sr_RS: _FormatData_sr_RS$$static;
          interface _FormatData_sr_RS {
            _getContents(): any[][];
          }
          interface FormatData_sr_RS extends CombineTypes<[_FormatData_sr_RS, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_sv$$static extends ClassLike {
            new(): FormatData_sv;
          }
          let FormatData_sv: _FormatData_sv$$static;
          interface _FormatData_sv {
            _getContents(): any[][];
          }
          interface FormatData_sv extends CombineTypes<[_FormatData_sv, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_sv_SE$$static extends ClassLike {
            new(): FormatData_sv_SE;
          }
          let FormatData_sv_SE: _FormatData_sv_SE$$static;
          interface _FormatData_sv_SE {
            _getContents(): any[][];
          }
          interface FormatData_sv_SE extends CombineTypes<[_FormatData_sv_SE, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_th$$static extends ClassLike {
            new(): FormatData_th;
          }
          let FormatData_th: _FormatData_th$$static;
          interface _FormatData_th {
            _getContents(): any[][];
          }
          interface FormatData_th extends CombineTypes<[_FormatData_th, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_th_TH$$static extends ClassLike {
            new(): FormatData_th_TH;
          }
          let FormatData_th_TH: _FormatData_th_TH$$static;
          interface _FormatData_th_TH {
            _getContents(): any[][];
          }
          interface FormatData_th_TH extends CombineTypes<[_FormatData_th_TH, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_tr$$static extends ClassLike {
            new(): FormatData_tr;
          }
          let FormatData_tr: _FormatData_tr$$static;
          interface _FormatData_tr {
            _getContents(): any[][];
          }
          interface FormatData_tr extends CombineTypes<[_FormatData_tr, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_tr_TR$$static extends ClassLike {
            new(): FormatData_tr_TR;
          }
          let FormatData_tr_TR: _FormatData_tr_TR$$static;
          interface _FormatData_tr_TR {
            _getContents(): any[][];
          }
          interface FormatData_tr_TR extends CombineTypes<[_FormatData_tr_TR, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_uk$$static extends ClassLike {
            new(): FormatData_uk;
          }
          let FormatData_uk: _FormatData_uk$$static;
          interface _FormatData_uk {
            _getContents(): any[][];
          }
          interface FormatData_uk extends CombineTypes<[_FormatData_uk, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_uk_UA$$static extends ClassLike {
            new(): FormatData_uk_UA;
          }
          let FormatData_uk_UA: _FormatData_uk_UA$$static;
          interface _FormatData_uk_UA {
            _getContents(): any[][];
          }
          interface FormatData_uk_UA extends CombineTypes<[_FormatData_uk_UA, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_vi$$static extends ClassLike {
            new(): FormatData_vi;
          }
          let FormatData_vi: _FormatData_vi$$static;
          interface _FormatData_vi {
            _getContents(): any[][];
          }
          interface FormatData_vi extends CombineTypes<[_FormatData_vi, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_vi_VN$$static extends ClassLike {
            new(): FormatData_vi_VN;
          }
          let FormatData_vi_VN: _FormatData_vi_VN$$static;
          interface _FormatData_vi_VN {
            _getContents(): any[][];
          }
          interface FormatData_vi_VN extends CombineTypes<[_FormatData_vi_VN, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_zh$$static extends ClassLike {
            new(): FormatData_zh;
          }
          let FormatData_zh: _FormatData_zh$$static;
          interface _FormatData_zh {
            _getContents(): any[][];
          }
          interface FormatData_zh extends CombineTypes<[_FormatData_zh, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_zh_CN$$static extends ClassLike {
            new(): FormatData_zh_CN;
          }
          let FormatData_zh_CN: _FormatData_zh_CN$$static;
          interface _FormatData_zh_CN {
            _getContents(): any[][];
          }
          interface FormatData_zh_CN extends CombineTypes<[_FormatData_zh_CN, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_zh_HK$$static extends ClassLike {
            new(): FormatData_zh_HK;
          }
          let FormatData_zh_HK: _FormatData_zh_HK$$static;
          interface _FormatData_zh_HK {
            _getContents(): any[][];
          }
          interface FormatData_zh_HK extends CombineTypes<[_FormatData_zh_HK, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_zh_SG$$static extends ClassLike {
            new(): FormatData_zh_SG;
          }
          let FormatData_zh_SG: _FormatData_zh_SG$$static;
          interface _FormatData_zh_SG {
            _getContents(): any[][];
          }
          interface FormatData_zh_SG extends CombineTypes<[_FormatData_zh_SG, sun.util.resources.ParallelListResourceBundle]> {}
          interface _FormatData_zh_TW$$static extends ClassLike {
            new(): FormatData_zh_TW;
          }
          let FormatData_zh_TW: _FormatData_zh_TW$$static;
          interface _FormatData_zh_TW {
            _getContents(): any[][];
          }
          interface FormatData_zh_TW extends CombineTypes<[_FormatData_zh_TW, sun.util.resources.ParallelListResourceBundle]> {}
          interface _JavaTimeSupplementary_ar$$static extends ClassLike {
            new(): JavaTimeSupplementary_ar;
          }
          let JavaTimeSupplementary_ar: _JavaTimeSupplementary_ar$$static;
          interface _JavaTimeSupplementary_ar {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_ar extends CombineTypes<[_JavaTimeSupplementary_ar, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_ar_JO$$static extends ClassLike {
            new(): JavaTimeSupplementary_ar_JO;
          }
          let JavaTimeSupplementary_ar_JO: _JavaTimeSupplementary_ar_JO$$static;
          interface _JavaTimeSupplementary_ar_JO {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_ar_JO extends CombineTypes<[_JavaTimeSupplementary_ar_JO, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_ar_LB$$static extends ClassLike {
            new(): JavaTimeSupplementary_ar_LB;
          }
          let JavaTimeSupplementary_ar_LB: _JavaTimeSupplementary_ar_LB$$static;
          interface _JavaTimeSupplementary_ar_LB {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_ar_LB extends CombineTypes<[_JavaTimeSupplementary_ar_LB, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_ar_SY$$static extends ClassLike {
            new(): JavaTimeSupplementary_ar_SY;
          }
          let JavaTimeSupplementary_ar_SY: _JavaTimeSupplementary_ar_SY$$static;
          interface _JavaTimeSupplementary_ar_SY {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_ar_SY extends CombineTypes<[_JavaTimeSupplementary_ar_SY, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_be$$static extends ClassLike {
            new(): JavaTimeSupplementary_be;
          }
          let JavaTimeSupplementary_be: _JavaTimeSupplementary_be$$static;
          interface _JavaTimeSupplementary_be {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_be extends CombineTypes<[_JavaTimeSupplementary_be, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_bg$$static extends ClassLike {
            new(): JavaTimeSupplementary_bg;
          }
          let JavaTimeSupplementary_bg: _JavaTimeSupplementary_bg$$static;
          interface _JavaTimeSupplementary_bg {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_bg extends CombineTypes<[_JavaTimeSupplementary_bg, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_ca$$static extends ClassLike {
            new(): JavaTimeSupplementary_ca;
          }
          let JavaTimeSupplementary_ca: _JavaTimeSupplementary_ca$$static;
          interface _JavaTimeSupplementary_ca {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_ca extends CombineTypes<[_JavaTimeSupplementary_ca, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_cs$$static extends ClassLike {
            new(): JavaTimeSupplementary_cs;
          }
          let JavaTimeSupplementary_cs: _JavaTimeSupplementary_cs$$static;
          interface _JavaTimeSupplementary_cs {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_cs extends CombineTypes<[_JavaTimeSupplementary_cs, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_da$$static extends ClassLike {
            new(): JavaTimeSupplementary_da;
          }
          let JavaTimeSupplementary_da: _JavaTimeSupplementary_da$$static;
          interface _JavaTimeSupplementary_da {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_da extends CombineTypes<[_JavaTimeSupplementary_da, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_de$$static extends ClassLike {
            new(): JavaTimeSupplementary_de;
          }
          let JavaTimeSupplementary_de: _JavaTimeSupplementary_de$$static;
          interface _JavaTimeSupplementary_de {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_de extends CombineTypes<[_JavaTimeSupplementary_de, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_de_AT$$static extends ClassLike {
            new(): JavaTimeSupplementary_de_AT;
          }
          let JavaTimeSupplementary_de_AT: _JavaTimeSupplementary_de_AT$$static;
          interface _JavaTimeSupplementary_de_AT {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_de_AT extends CombineTypes<[_JavaTimeSupplementary_de_AT, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_el$$static extends ClassLike {
            new(): JavaTimeSupplementary_el;
          }
          let JavaTimeSupplementary_el: _JavaTimeSupplementary_el$$static;
          interface _JavaTimeSupplementary_el {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_el extends CombineTypes<[_JavaTimeSupplementary_el, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_en_AU$$static extends ClassLike {
            new(): JavaTimeSupplementary_en_AU;
          }
          let JavaTimeSupplementary_en_AU: _JavaTimeSupplementary_en_AU$$static;
          interface _JavaTimeSupplementary_en_AU {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_en_AU extends CombineTypes<[_JavaTimeSupplementary_en_AU, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_en_CA$$static extends ClassLike {
            new(): JavaTimeSupplementary_en_CA;
          }
          let JavaTimeSupplementary_en_CA: _JavaTimeSupplementary_en_CA$$static;
          interface _JavaTimeSupplementary_en_CA {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_en_CA extends CombineTypes<[_JavaTimeSupplementary_en_CA, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_en_GB$$static extends ClassLike {
            new(): JavaTimeSupplementary_en_GB;
          }
          let JavaTimeSupplementary_en_GB: _JavaTimeSupplementary_en_GB$$static;
          interface _JavaTimeSupplementary_en_GB {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_en_GB extends CombineTypes<[_JavaTimeSupplementary_en_GB, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_en_IE$$static extends ClassLike {
            new(): JavaTimeSupplementary_en_IE;
          }
          let JavaTimeSupplementary_en_IE: _JavaTimeSupplementary_en_IE$$static;
          interface _JavaTimeSupplementary_en_IE {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_en_IE extends CombineTypes<[_JavaTimeSupplementary_en_IE, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_en_IN$$static extends ClassLike {
            new(): JavaTimeSupplementary_en_IN;
          }
          let JavaTimeSupplementary_en_IN: _JavaTimeSupplementary_en_IN$$static;
          interface _JavaTimeSupplementary_en_IN {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_en_IN extends CombineTypes<[_JavaTimeSupplementary_en_IN, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_en_MT$$static extends ClassLike {
            new(): JavaTimeSupplementary_en_MT;
          }
          let JavaTimeSupplementary_en_MT: _JavaTimeSupplementary_en_MT$$static;
          interface _JavaTimeSupplementary_en_MT {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_en_MT extends CombineTypes<[_JavaTimeSupplementary_en_MT, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_en_NZ$$static extends ClassLike {
            new(): JavaTimeSupplementary_en_NZ;
          }
          let JavaTimeSupplementary_en_NZ: _JavaTimeSupplementary_en_NZ$$static;
          interface _JavaTimeSupplementary_en_NZ {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_en_NZ extends CombineTypes<[_JavaTimeSupplementary_en_NZ, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_en_SG$$static extends ClassLike {
            new(): JavaTimeSupplementary_en_SG;
          }
          let JavaTimeSupplementary_en_SG: _JavaTimeSupplementary_en_SG$$static;
          interface _JavaTimeSupplementary_en_SG {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_en_SG extends CombineTypes<[_JavaTimeSupplementary_en_SG, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_en_ZA$$static extends ClassLike {
            new(): JavaTimeSupplementary_en_ZA;
          }
          let JavaTimeSupplementary_en_ZA: _JavaTimeSupplementary_en_ZA$$static;
          interface _JavaTimeSupplementary_en_ZA {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_en_ZA extends CombineTypes<[_JavaTimeSupplementary_en_ZA, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_es$$static extends ClassLike {
            new(): JavaTimeSupplementary_es;
          }
          let JavaTimeSupplementary_es: _JavaTimeSupplementary_es$$static;
          interface _JavaTimeSupplementary_es {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_es extends CombineTypes<[_JavaTimeSupplementary_es, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_es_AR$$static extends ClassLike {
            new(): JavaTimeSupplementary_es_AR;
          }
          let JavaTimeSupplementary_es_AR: _JavaTimeSupplementary_es_AR$$static;
          interface _JavaTimeSupplementary_es_AR {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_es_AR extends CombineTypes<[_JavaTimeSupplementary_es_AR, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_es_BO$$static extends ClassLike {
            new(): JavaTimeSupplementary_es_BO;
          }
          let JavaTimeSupplementary_es_BO: _JavaTimeSupplementary_es_BO$$static;
          interface _JavaTimeSupplementary_es_BO {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_es_BO extends CombineTypes<[_JavaTimeSupplementary_es_BO, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_es_CL$$static extends ClassLike {
            new(): JavaTimeSupplementary_es_CL;
          }
          let JavaTimeSupplementary_es_CL: _JavaTimeSupplementary_es_CL$$static;
          interface _JavaTimeSupplementary_es_CL {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_es_CL extends CombineTypes<[_JavaTimeSupplementary_es_CL, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_es_CO$$static extends ClassLike {
            new(): JavaTimeSupplementary_es_CO;
          }
          let JavaTimeSupplementary_es_CO: _JavaTimeSupplementary_es_CO$$static;
          interface _JavaTimeSupplementary_es_CO {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_es_CO extends CombineTypes<[_JavaTimeSupplementary_es_CO, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_es_CR$$static extends ClassLike {
            new(): JavaTimeSupplementary_es_CR;
          }
          let JavaTimeSupplementary_es_CR: _JavaTimeSupplementary_es_CR$$static;
          interface _JavaTimeSupplementary_es_CR {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_es_CR extends CombineTypes<[_JavaTimeSupplementary_es_CR, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_es_DO$$static extends ClassLike {
            new(): JavaTimeSupplementary_es_DO;
          }
          let JavaTimeSupplementary_es_DO: _JavaTimeSupplementary_es_DO$$static;
          interface _JavaTimeSupplementary_es_DO {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_es_DO extends CombineTypes<[_JavaTimeSupplementary_es_DO, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_es_EC$$static extends ClassLike {
            new(): JavaTimeSupplementary_es_EC;
          }
          let JavaTimeSupplementary_es_EC: _JavaTimeSupplementary_es_EC$$static;
          interface _JavaTimeSupplementary_es_EC {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_es_EC extends CombineTypes<[_JavaTimeSupplementary_es_EC, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_es_GT$$static extends ClassLike {
            new(): JavaTimeSupplementary_es_GT;
          }
          let JavaTimeSupplementary_es_GT: _JavaTimeSupplementary_es_GT$$static;
          interface _JavaTimeSupplementary_es_GT {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_es_GT extends CombineTypes<[_JavaTimeSupplementary_es_GT, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_es_HN$$static extends ClassLike {
            new(): JavaTimeSupplementary_es_HN;
          }
          let JavaTimeSupplementary_es_HN: _JavaTimeSupplementary_es_HN$$static;
          interface _JavaTimeSupplementary_es_HN {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_es_HN extends CombineTypes<[_JavaTimeSupplementary_es_HN, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_es_MX$$static extends ClassLike {
            new(): JavaTimeSupplementary_es_MX;
          }
          let JavaTimeSupplementary_es_MX: _JavaTimeSupplementary_es_MX$$static;
          interface _JavaTimeSupplementary_es_MX {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_es_MX extends CombineTypes<[_JavaTimeSupplementary_es_MX, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_es_PA$$static extends ClassLike {
            new(): JavaTimeSupplementary_es_PA;
          }
          let JavaTimeSupplementary_es_PA: _JavaTimeSupplementary_es_PA$$static;
          interface _JavaTimeSupplementary_es_PA {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_es_PA extends CombineTypes<[_JavaTimeSupplementary_es_PA, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_es_PE$$static extends ClassLike {
            new(): JavaTimeSupplementary_es_PE;
          }
          let JavaTimeSupplementary_es_PE: _JavaTimeSupplementary_es_PE$$static;
          interface _JavaTimeSupplementary_es_PE {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_es_PE extends CombineTypes<[_JavaTimeSupplementary_es_PE, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_es_PR$$static extends ClassLike {
            new(): JavaTimeSupplementary_es_PR;
          }
          let JavaTimeSupplementary_es_PR: _JavaTimeSupplementary_es_PR$$static;
          interface _JavaTimeSupplementary_es_PR {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_es_PR extends CombineTypes<[_JavaTimeSupplementary_es_PR, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_es_PY$$static extends ClassLike {
            new(): JavaTimeSupplementary_es_PY;
          }
          let JavaTimeSupplementary_es_PY: _JavaTimeSupplementary_es_PY$$static;
          interface _JavaTimeSupplementary_es_PY {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_es_PY extends CombineTypes<[_JavaTimeSupplementary_es_PY, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_es_US$$static extends ClassLike {
            new(): JavaTimeSupplementary_es_US;
          }
          let JavaTimeSupplementary_es_US: _JavaTimeSupplementary_es_US$$static;
          interface _JavaTimeSupplementary_es_US {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_es_US extends CombineTypes<[_JavaTimeSupplementary_es_US, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_es_UY$$static extends ClassLike {
            new(): JavaTimeSupplementary_es_UY;
          }
          let JavaTimeSupplementary_es_UY: _JavaTimeSupplementary_es_UY$$static;
          interface _JavaTimeSupplementary_es_UY {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_es_UY extends CombineTypes<[_JavaTimeSupplementary_es_UY, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_es_VE$$static extends ClassLike {
            new(): JavaTimeSupplementary_es_VE;
          }
          let JavaTimeSupplementary_es_VE: _JavaTimeSupplementary_es_VE$$static;
          interface _JavaTimeSupplementary_es_VE {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_es_VE extends CombineTypes<[_JavaTimeSupplementary_es_VE, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_et$$static extends ClassLike {
            new(): JavaTimeSupplementary_et;
          }
          let JavaTimeSupplementary_et: _JavaTimeSupplementary_et$$static;
          interface _JavaTimeSupplementary_et {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_et extends CombineTypes<[_JavaTimeSupplementary_et, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_fi$$static extends ClassLike {
            new(): JavaTimeSupplementary_fi;
          }
          let JavaTimeSupplementary_fi: _JavaTimeSupplementary_fi$$static;
          interface _JavaTimeSupplementary_fi {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_fi extends CombineTypes<[_JavaTimeSupplementary_fi, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_fr$$static extends ClassLike {
            new(): JavaTimeSupplementary_fr;
          }
          let JavaTimeSupplementary_fr: _JavaTimeSupplementary_fr$$static;
          interface _JavaTimeSupplementary_fr {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_fr extends CombineTypes<[_JavaTimeSupplementary_fr, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_fr_BE$$static extends ClassLike {
            new(): JavaTimeSupplementary_fr_BE;
          }
          let JavaTimeSupplementary_fr_BE: _JavaTimeSupplementary_fr_BE$$static;
          interface _JavaTimeSupplementary_fr_BE {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_fr_BE extends CombineTypes<[_JavaTimeSupplementary_fr_BE, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_fr_CA$$static extends ClassLike {
            new(): JavaTimeSupplementary_fr_CA;
          }
          let JavaTimeSupplementary_fr_CA: _JavaTimeSupplementary_fr_CA$$static;
          interface _JavaTimeSupplementary_fr_CA {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_fr_CA extends CombineTypes<[_JavaTimeSupplementary_fr_CA, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_fr_CH$$static extends ClassLike {
            new(): JavaTimeSupplementary_fr_CH;
          }
          let JavaTimeSupplementary_fr_CH: _JavaTimeSupplementary_fr_CH$$static;
          interface _JavaTimeSupplementary_fr_CH {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_fr_CH extends CombineTypes<[_JavaTimeSupplementary_fr_CH, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_ga$$static extends ClassLike {
            new(): JavaTimeSupplementary_ga;
          }
          let JavaTimeSupplementary_ga: _JavaTimeSupplementary_ga$$static;
          interface _JavaTimeSupplementary_ga {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_ga extends CombineTypes<[_JavaTimeSupplementary_ga, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_he$$static extends ClassLike {
            new(): JavaTimeSupplementary_he;
          }
          let JavaTimeSupplementary_he: _JavaTimeSupplementary_he$$static;
          interface _JavaTimeSupplementary_he {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_he extends CombineTypes<[_JavaTimeSupplementary_he, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_hi_IN$$static extends ClassLike {
            new(): JavaTimeSupplementary_hi_IN;
          }
          let JavaTimeSupplementary_hi_IN: _JavaTimeSupplementary_hi_IN$$static;
          interface _JavaTimeSupplementary_hi_IN {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_hi_IN extends CombineTypes<[_JavaTimeSupplementary_hi_IN, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_hr$$static extends ClassLike {
            new(): JavaTimeSupplementary_hr;
          }
          let JavaTimeSupplementary_hr: _JavaTimeSupplementary_hr$$static;
          interface _JavaTimeSupplementary_hr {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_hr extends CombineTypes<[_JavaTimeSupplementary_hr, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_hu$$static extends ClassLike {
            new(): JavaTimeSupplementary_hu;
          }
          let JavaTimeSupplementary_hu: _JavaTimeSupplementary_hu$$static;
          interface _JavaTimeSupplementary_hu {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_hu extends CombineTypes<[_JavaTimeSupplementary_hu, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_id$$static extends ClassLike {
            new(): JavaTimeSupplementary_id;
          }
          let JavaTimeSupplementary_id: _JavaTimeSupplementary_id$$static;
          interface _JavaTimeSupplementary_id {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_id extends CombineTypes<[_JavaTimeSupplementary_id, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_is$$static extends ClassLike {
            new(): JavaTimeSupplementary_is;
          }
          let JavaTimeSupplementary_is: _JavaTimeSupplementary_is$$static;
          interface _JavaTimeSupplementary_is {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_is extends CombineTypes<[_JavaTimeSupplementary_is, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_it$$static extends ClassLike {
            new(): JavaTimeSupplementary_it;
          }
          let JavaTimeSupplementary_it: _JavaTimeSupplementary_it$$static;
          interface _JavaTimeSupplementary_it {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_it extends CombineTypes<[_JavaTimeSupplementary_it, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_it_CH$$static extends ClassLike {
            new(): JavaTimeSupplementary_it_CH;
          }
          let JavaTimeSupplementary_it_CH: _JavaTimeSupplementary_it_CH$$static;
          interface _JavaTimeSupplementary_it_CH {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_it_CH extends CombineTypes<[_JavaTimeSupplementary_it_CH, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_ja$$static extends ClassLike {
            new(): JavaTimeSupplementary_ja;
          }
          let JavaTimeSupplementary_ja: _JavaTimeSupplementary_ja$$static;
          interface _JavaTimeSupplementary_ja {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_ja extends CombineTypes<[_JavaTimeSupplementary_ja, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_ko$$static extends ClassLike {
            new(): JavaTimeSupplementary_ko;
          }
          let JavaTimeSupplementary_ko: _JavaTimeSupplementary_ko$$static;
          interface _JavaTimeSupplementary_ko {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_ko extends CombineTypes<[_JavaTimeSupplementary_ko, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_lt$$static extends ClassLike {
            new(): JavaTimeSupplementary_lt;
          }
          let JavaTimeSupplementary_lt: _JavaTimeSupplementary_lt$$static;
          interface _JavaTimeSupplementary_lt {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_lt extends CombineTypes<[_JavaTimeSupplementary_lt, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_lv$$static extends ClassLike {
            new(): JavaTimeSupplementary_lv;
          }
          let JavaTimeSupplementary_lv: _JavaTimeSupplementary_lv$$static;
          interface _JavaTimeSupplementary_lv {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_lv extends CombineTypes<[_JavaTimeSupplementary_lv, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_mk$$static extends ClassLike {
            new(): JavaTimeSupplementary_mk;
          }
          let JavaTimeSupplementary_mk: _JavaTimeSupplementary_mk$$static;
          interface _JavaTimeSupplementary_mk {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_mk extends CombineTypes<[_JavaTimeSupplementary_mk, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_ms$$static extends ClassLike {
            new(): JavaTimeSupplementary_ms;
          }
          let JavaTimeSupplementary_ms: _JavaTimeSupplementary_ms$$static;
          interface _JavaTimeSupplementary_ms {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_ms extends CombineTypes<[_JavaTimeSupplementary_ms, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_mt$$static extends ClassLike {
            new(): JavaTimeSupplementary_mt;
          }
          let JavaTimeSupplementary_mt: _JavaTimeSupplementary_mt$$static;
          interface _JavaTimeSupplementary_mt {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_mt extends CombineTypes<[_JavaTimeSupplementary_mt, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_nl$$static extends ClassLike {
            new(): JavaTimeSupplementary_nl;
          }
          let JavaTimeSupplementary_nl: _JavaTimeSupplementary_nl$$static;
          interface _JavaTimeSupplementary_nl {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_nl extends CombineTypes<[_JavaTimeSupplementary_nl, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_nl_BE$$static extends ClassLike {
            new(): JavaTimeSupplementary_nl_BE;
          }
          let JavaTimeSupplementary_nl_BE: _JavaTimeSupplementary_nl_BE$$static;
          interface _JavaTimeSupplementary_nl_BE {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_nl_BE extends CombineTypes<[_JavaTimeSupplementary_nl_BE, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_no$$static extends ClassLike {
            new(): JavaTimeSupplementary_no;
          }
          let JavaTimeSupplementary_no: _JavaTimeSupplementary_no$$static;
          interface _JavaTimeSupplementary_no {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_no extends CombineTypes<[_JavaTimeSupplementary_no, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_pl$$static extends ClassLike {
            new(): JavaTimeSupplementary_pl;
          }
          let JavaTimeSupplementary_pl: _JavaTimeSupplementary_pl$$static;
          interface _JavaTimeSupplementary_pl {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_pl extends CombineTypes<[_JavaTimeSupplementary_pl, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_pt$$static extends ClassLike {
            new(): JavaTimeSupplementary_pt;
          }
          let JavaTimeSupplementary_pt: _JavaTimeSupplementary_pt$$static;
          interface _JavaTimeSupplementary_pt {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_pt extends CombineTypes<[_JavaTimeSupplementary_pt, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_pt_PT$$static extends ClassLike {
            new(): JavaTimeSupplementary_pt_PT;
          }
          let JavaTimeSupplementary_pt_PT: _JavaTimeSupplementary_pt_PT$$static;
          interface _JavaTimeSupplementary_pt_PT {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_pt_PT extends CombineTypes<[_JavaTimeSupplementary_pt_PT, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_ro$$static extends ClassLike {
            new(): JavaTimeSupplementary_ro;
          }
          let JavaTimeSupplementary_ro: _JavaTimeSupplementary_ro$$static;
          interface _JavaTimeSupplementary_ro {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_ro extends CombineTypes<[_JavaTimeSupplementary_ro, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_ru$$static extends ClassLike {
            new(): JavaTimeSupplementary_ru;
          }
          let JavaTimeSupplementary_ru: _JavaTimeSupplementary_ru$$static;
          interface _JavaTimeSupplementary_ru {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_ru extends CombineTypes<[_JavaTimeSupplementary_ru, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_sk$$static extends ClassLike {
            new(): JavaTimeSupplementary_sk;
          }
          let JavaTimeSupplementary_sk: _JavaTimeSupplementary_sk$$static;
          interface _JavaTimeSupplementary_sk {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_sk extends CombineTypes<[_JavaTimeSupplementary_sk, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_sl$$static extends ClassLike {
            new(): JavaTimeSupplementary_sl;
          }
          let JavaTimeSupplementary_sl: _JavaTimeSupplementary_sl$$static;
          interface _JavaTimeSupplementary_sl {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_sl extends CombineTypes<[_JavaTimeSupplementary_sl, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_sq$$static extends ClassLike {
            new(): JavaTimeSupplementary_sq;
          }
          let JavaTimeSupplementary_sq: _JavaTimeSupplementary_sq$$static;
          interface _JavaTimeSupplementary_sq {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_sq extends CombineTypes<[_JavaTimeSupplementary_sq, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_sr$$static extends ClassLike {
            new(): JavaTimeSupplementary_sr;
          }
          let JavaTimeSupplementary_sr: _JavaTimeSupplementary_sr$$static;
          interface _JavaTimeSupplementary_sr {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_sr extends CombineTypes<[_JavaTimeSupplementary_sr, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_sr_BA$$static extends ClassLike {
            new(): JavaTimeSupplementary_sr_BA;
          }
          let JavaTimeSupplementary_sr_BA: _JavaTimeSupplementary_sr_BA$$static;
          interface _JavaTimeSupplementary_sr_BA {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_sr_BA extends CombineTypes<[_JavaTimeSupplementary_sr_BA, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_sr_Latn$$static extends ClassLike {
            new(): JavaTimeSupplementary_sr_Latn;
          }
          let JavaTimeSupplementary_sr_Latn: _JavaTimeSupplementary_sr_Latn$$static;
          interface _JavaTimeSupplementary_sr_Latn {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_sr_Latn extends CombineTypes<[_JavaTimeSupplementary_sr_Latn, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_sv$$static extends ClassLike {
            new(): JavaTimeSupplementary_sv;
          }
          let JavaTimeSupplementary_sv: _JavaTimeSupplementary_sv$$static;
          interface _JavaTimeSupplementary_sv {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_sv extends CombineTypes<[_JavaTimeSupplementary_sv, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_th$$static extends ClassLike {
            new(): JavaTimeSupplementary_th;
          }
          let JavaTimeSupplementary_th: _JavaTimeSupplementary_th$$static;
          interface _JavaTimeSupplementary_th {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_th extends CombineTypes<[_JavaTimeSupplementary_th, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_tr$$static extends ClassLike {
            new(): JavaTimeSupplementary_tr;
          }
          let JavaTimeSupplementary_tr: _JavaTimeSupplementary_tr$$static;
          interface _JavaTimeSupplementary_tr {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_tr extends CombineTypes<[_JavaTimeSupplementary_tr, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_uk$$static extends ClassLike {
            new(): JavaTimeSupplementary_uk;
          }
          let JavaTimeSupplementary_uk: _JavaTimeSupplementary_uk$$static;
          interface _JavaTimeSupplementary_uk {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_uk extends CombineTypes<[_JavaTimeSupplementary_uk, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_vi$$static extends ClassLike {
            new(): JavaTimeSupplementary_vi;
          }
          let JavaTimeSupplementary_vi: _JavaTimeSupplementary_vi$$static;
          interface _JavaTimeSupplementary_vi {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_vi extends CombineTypes<[_JavaTimeSupplementary_vi, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_zh$$static extends ClassLike {
            new(): JavaTimeSupplementary_zh;
          }
          let JavaTimeSupplementary_zh: _JavaTimeSupplementary_zh$$static;
          interface _JavaTimeSupplementary_zh {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_zh extends CombineTypes<[_JavaTimeSupplementary_zh, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_zh_HK$$static extends ClassLike {
            new(): JavaTimeSupplementary_zh_HK;
          }
          let JavaTimeSupplementary_zh_HK: _JavaTimeSupplementary_zh_HK$$static;
          interface _JavaTimeSupplementary_zh_HK {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_zh_HK extends CombineTypes<[_JavaTimeSupplementary_zh_HK, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_zh_SG$$static extends ClassLike {
            new(): JavaTimeSupplementary_zh_SG;
          }
          let JavaTimeSupplementary_zh_SG: _JavaTimeSupplementary_zh_SG$$static;
          interface _JavaTimeSupplementary_zh_SG {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_zh_SG extends CombineTypes<[_JavaTimeSupplementary_zh_SG, sun.util.resources.OpenListResourceBundle]> {}
          interface _JavaTimeSupplementary_zh_TW$$static extends ClassLike {
            new(): JavaTimeSupplementary_zh_TW;
          }
          let JavaTimeSupplementary_zh_TW: _JavaTimeSupplementary_zh_TW$$static;
          interface _JavaTimeSupplementary_zh_TW {
            _getContents(): any[][];
          }
          interface JavaTimeSupplementary_zh_TW extends CombineTypes<[_JavaTimeSupplementary_zh_TW, sun.util.resources.OpenListResourceBundle]> {}
        }
      }
    }
    module util {
      module resources {
        module cldr {
          module ext {
            interface _CurrencyNames_af$$static extends ClassLike {
              new(): CurrencyNames_af;
            }
            let CurrencyNames_af: _CurrencyNames_af$$static;
            interface _CurrencyNames_af {
              _getContents(): any[][];
            }
            interface CurrencyNames_af extends CombineTypes<[_CurrencyNames_af, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_af_NA$$static extends ClassLike {
              new(): CurrencyNames_af_NA;
            }
            let CurrencyNames_af_NA: _CurrencyNames_af_NA$$static;
            interface _CurrencyNames_af_NA {
              _getContents(): any[][];
            }
            interface CurrencyNames_af_NA extends CombineTypes<[_CurrencyNames_af_NA, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_agq$$static extends ClassLike {
              new(): CurrencyNames_agq;
            }
            let CurrencyNames_agq: _CurrencyNames_agq$$static;
            interface _CurrencyNames_agq {
              _getContents(): any[][];
            }
            interface CurrencyNames_agq extends CombineTypes<[_CurrencyNames_agq, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ak$$static extends ClassLike {
              new(): CurrencyNames_ak;
            }
            let CurrencyNames_ak: _CurrencyNames_ak$$static;
            interface _CurrencyNames_ak {
              _getContents(): any[][];
            }
            interface CurrencyNames_ak extends CombineTypes<[_CurrencyNames_ak, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_am$$static extends ClassLike {
              new(): CurrencyNames_am;
            }
            let CurrencyNames_am: _CurrencyNames_am$$static;
            interface _CurrencyNames_am {
              _getContents(): any[][];
            }
            interface CurrencyNames_am extends CombineTypes<[_CurrencyNames_am, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ann$$static extends ClassLike {
              new(): CurrencyNames_ann;
            }
            let CurrencyNames_ann: _CurrencyNames_ann$$static;
            interface _CurrencyNames_ann {
              _getContents(): any[][];
            }
            interface CurrencyNames_ann extends CombineTypes<[_CurrencyNames_ann, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ar$$static extends ClassLike {
              new(): CurrencyNames_ar;
            }
            let CurrencyNames_ar: _CurrencyNames_ar$$static;
            interface _CurrencyNames_ar {
              _getContents(): any[][];
            }
            interface CurrencyNames_ar extends CombineTypes<[_CurrencyNames_ar, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ar_DJ$$static extends ClassLike {
              new(): CurrencyNames_ar_DJ;
            }
            let CurrencyNames_ar_DJ: _CurrencyNames_ar_DJ$$static;
            interface _CurrencyNames_ar_DJ {
              _getContents(): any[][];
            }
            interface CurrencyNames_ar_DJ extends CombineTypes<[_CurrencyNames_ar_DJ, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ar_ER$$static extends ClassLike {
              new(): CurrencyNames_ar_ER;
            }
            let CurrencyNames_ar_ER: _CurrencyNames_ar_ER$$static;
            interface _CurrencyNames_ar_ER {
              _getContents(): any[][];
            }
            interface CurrencyNames_ar_ER extends CombineTypes<[_CurrencyNames_ar_ER, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ar_KM$$static extends ClassLike {
              new(): CurrencyNames_ar_KM;
            }
            let CurrencyNames_ar_KM: _CurrencyNames_ar_KM$$static;
            interface _CurrencyNames_ar_KM {
              _getContents(): any[][];
            }
            interface CurrencyNames_ar_KM extends CombineTypes<[_CurrencyNames_ar_KM, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ar_LB$$static extends ClassLike {
              new(): CurrencyNames_ar_LB;
            }
            let CurrencyNames_ar_LB: _CurrencyNames_ar_LB$$static;
            interface _CurrencyNames_ar_LB {
              _getContents(): any[][];
            }
            interface CurrencyNames_ar_LB extends CombineTypes<[_CurrencyNames_ar_LB, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ar_SO$$static extends ClassLike {
              new(): CurrencyNames_ar_SO;
            }
            let CurrencyNames_ar_SO: _CurrencyNames_ar_SO$$static;
            interface _CurrencyNames_ar_SO {
              _getContents(): any[][];
            }
            interface CurrencyNames_ar_SO extends CombineTypes<[_CurrencyNames_ar_SO, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ar_SS$$static extends ClassLike {
              new(): CurrencyNames_ar_SS;
            }
            let CurrencyNames_ar_SS: _CurrencyNames_ar_SS$$static;
            interface _CurrencyNames_ar_SS {
              _getContents(): any[][];
            }
            interface CurrencyNames_ar_SS extends CombineTypes<[_CurrencyNames_ar_SS, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_as$$static extends ClassLike {
              new(): CurrencyNames_as;
            }
            let CurrencyNames_as: _CurrencyNames_as$$static;
            interface _CurrencyNames_as {
              _getContents(): any[][];
            }
            interface CurrencyNames_as extends CombineTypes<[_CurrencyNames_as, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_asa$$static extends ClassLike {
              new(): CurrencyNames_asa;
            }
            let CurrencyNames_asa: _CurrencyNames_asa$$static;
            interface _CurrencyNames_asa {
              _getContents(): any[][];
            }
            interface CurrencyNames_asa extends CombineTypes<[_CurrencyNames_asa, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ast$$static extends ClassLike {
              new(): CurrencyNames_ast;
            }
            let CurrencyNames_ast: _CurrencyNames_ast$$static;
            interface _CurrencyNames_ast {
              _getContents(): any[][];
            }
            interface CurrencyNames_ast extends CombineTypes<[_CurrencyNames_ast, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_az$$static extends ClassLike {
              new(): CurrencyNames_az;
            }
            let CurrencyNames_az: _CurrencyNames_az$$static;
            interface _CurrencyNames_az {
              _getContents(): any[][];
            }
            interface CurrencyNames_az extends CombineTypes<[_CurrencyNames_az, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_az_Cyrl$$static extends ClassLike {
              new(): CurrencyNames_az_Cyrl;
            }
            let CurrencyNames_az_Cyrl: _CurrencyNames_az_Cyrl$$static;
            interface _CurrencyNames_az_Cyrl {
              _getContents(): any[][];
            }
            interface CurrencyNames_az_Cyrl extends CombineTypes<[_CurrencyNames_az_Cyrl, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_bas$$static extends ClassLike {
              new(): CurrencyNames_bas;
            }
            let CurrencyNames_bas: _CurrencyNames_bas$$static;
            interface _CurrencyNames_bas {
              _getContents(): any[][];
            }
            interface CurrencyNames_bas extends CombineTypes<[_CurrencyNames_bas, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_be$$static extends ClassLike {
              new(): CurrencyNames_be;
            }
            let CurrencyNames_be: _CurrencyNames_be$$static;
            interface _CurrencyNames_be {
              _getContents(): any[][];
            }
            interface CurrencyNames_be extends CombineTypes<[_CurrencyNames_be, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_bem$$static extends ClassLike {
              new(): CurrencyNames_bem;
            }
            let CurrencyNames_bem: _CurrencyNames_bem$$static;
            interface _CurrencyNames_bem {
              _getContents(): any[][];
            }
            interface CurrencyNames_bem extends CombineTypes<[_CurrencyNames_bem, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_bez$$static extends ClassLike {
              new(): CurrencyNames_bez;
            }
            let CurrencyNames_bez: _CurrencyNames_bez$$static;
            interface _CurrencyNames_bez {
              _getContents(): any[][];
            }
            interface CurrencyNames_bez extends CombineTypes<[_CurrencyNames_bez, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_bg$$static extends ClassLike {
              new(): CurrencyNames_bg;
            }
            let CurrencyNames_bg: _CurrencyNames_bg$$static;
            interface _CurrencyNames_bg {
              _getContents(): any[][];
            }
            interface CurrencyNames_bg extends CombineTypes<[_CurrencyNames_bg, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_bm$$static extends ClassLike {
              new(): CurrencyNames_bm;
            }
            let CurrencyNames_bm: _CurrencyNames_bm$$static;
            interface _CurrencyNames_bm {
              _getContents(): any[][];
            }
            interface CurrencyNames_bm extends CombineTypes<[_CurrencyNames_bm, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_bn$$static extends ClassLike {
              new(): CurrencyNames_bn;
            }
            let CurrencyNames_bn: _CurrencyNames_bn$$static;
            interface _CurrencyNames_bn {
              _getContents(): any[][];
            }
            interface CurrencyNames_bn extends CombineTypes<[_CurrencyNames_bn, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_bn_IN$$static extends ClassLike {
              new(): CurrencyNames_bn_IN;
            }
            let CurrencyNames_bn_IN: _CurrencyNames_bn_IN$$static;
            interface _CurrencyNames_bn_IN {
              _getContents(): any[][];
            }
            interface CurrencyNames_bn_IN extends CombineTypes<[_CurrencyNames_bn_IN, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_bo$$static extends ClassLike {
              new(): CurrencyNames_bo;
            }
            let CurrencyNames_bo: _CurrencyNames_bo$$static;
            interface _CurrencyNames_bo {
              _getContents(): any[][];
            }
            interface CurrencyNames_bo extends CombineTypes<[_CurrencyNames_bo, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_bo_IN$$static extends ClassLike {
              new(): CurrencyNames_bo_IN;
            }
            let CurrencyNames_bo_IN: _CurrencyNames_bo_IN$$static;
            interface _CurrencyNames_bo_IN {
              _getContents(): any[][];
            }
            interface CurrencyNames_bo_IN extends CombineTypes<[_CurrencyNames_bo_IN, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_br$$static extends ClassLike {
              new(): CurrencyNames_br;
            }
            let CurrencyNames_br: _CurrencyNames_br$$static;
            interface _CurrencyNames_br {
              _getContents(): any[][];
            }
            interface CurrencyNames_br extends CombineTypes<[_CurrencyNames_br, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_brx$$static extends ClassLike {
              new(): CurrencyNames_brx;
            }
            let CurrencyNames_brx: _CurrencyNames_brx$$static;
            interface _CurrencyNames_brx {
              _getContents(): any[][];
            }
            interface CurrencyNames_brx extends CombineTypes<[_CurrencyNames_brx, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_bs$$static extends ClassLike {
              new(): CurrencyNames_bs;
            }
            let CurrencyNames_bs: _CurrencyNames_bs$$static;
            interface _CurrencyNames_bs {
              _getContents(): any[][];
            }
            interface CurrencyNames_bs extends CombineTypes<[_CurrencyNames_bs, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_bs_Cyrl$$static extends ClassLike {
              new(): CurrencyNames_bs_Cyrl;
            }
            let CurrencyNames_bs_Cyrl: _CurrencyNames_bs_Cyrl$$static;
            interface _CurrencyNames_bs_Cyrl {
              _getContents(): any[][];
            }
            interface CurrencyNames_bs_Cyrl extends CombineTypes<[_CurrencyNames_bs_Cyrl, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ca$$static extends ClassLike {
              new(): CurrencyNames_ca;
            }
            let CurrencyNames_ca: _CurrencyNames_ca$$static;
            interface _CurrencyNames_ca {
              _getContents(): any[][];
            }
            interface CurrencyNames_ca extends CombineTypes<[_CurrencyNames_ca, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ca_FR$$static extends ClassLike {
              new(): CurrencyNames_ca_FR;
            }
            let CurrencyNames_ca_FR: _CurrencyNames_ca_FR$$static;
            interface _CurrencyNames_ca_FR {
              _getContents(): any[][];
            }
            interface CurrencyNames_ca_FR extends CombineTypes<[_CurrencyNames_ca_FR, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ccp$$static extends ClassLike {
              new(): CurrencyNames_ccp;
            }
            let CurrencyNames_ccp: _CurrencyNames_ccp$$static;
            interface _CurrencyNames_ccp {
              _getContents(): any[][];
            }
            interface CurrencyNames_ccp extends CombineTypes<[_CurrencyNames_ccp, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ce$$static extends ClassLike {
              new(): CurrencyNames_ce;
            }
            let CurrencyNames_ce: _CurrencyNames_ce$$static;
            interface _CurrencyNames_ce {
              _getContents(): any[][];
            }
            interface CurrencyNames_ce extends CombineTypes<[_CurrencyNames_ce, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ceb$$static extends ClassLike {
              new(): CurrencyNames_ceb;
            }
            let CurrencyNames_ceb: _CurrencyNames_ceb$$static;
            interface _CurrencyNames_ceb {
              _getContents(): any[][];
            }
            interface CurrencyNames_ceb extends CombineTypes<[_CurrencyNames_ceb, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_cgg$$static extends ClassLike {
              new(): CurrencyNames_cgg;
            }
            let CurrencyNames_cgg: _CurrencyNames_cgg$$static;
            interface _CurrencyNames_cgg {
              _getContents(): any[][];
            }
            interface CurrencyNames_cgg extends CombineTypes<[_CurrencyNames_cgg, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_chr$$static extends ClassLike {
              new(): CurrencyNames_chr;
            }
            let CurrencyNames_chr: _CurrencyNames_chr$$static;
            interface _CurrencyNames_chr {
              _getContents(): any[][];
            }
            interface CurrencyNames_chr extends CombineTypes<[_CurrencyNames_chr, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ckb$$static extends ClassLike {
              new(): CurrencyNames_ckb;
            }
            let CurrencyNames_ckb: _CurrencyNames_ckb$$static;
            interface _CurrencyNames_ckb {
              _getContents(): any[][];
            }
            interface CurrencyNames_ckb extends CombineTypes<[_CurrencyNames_ckb, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_cs$$static extends ClassLike {
              new(): CurrencyNames_cs;
            }
            let CurrencyNames_cs: _CurrencyNames_cs$$static;
            interface _CurrencyNames_cs {
              _getContents(): any[][];
            }
            interface CurrencyNames_cs extends CombineTypes<[_CurrencyNames_cs, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_cv$$static extends ClassLike {
              new(): CurrencyNames_cv;
            }
            let CurrencyNames_cv: _CurrencyNames_cv$$static;
            interface _CurrencyNames_cv {
              _getContents(): any[][];
            }
            interface CurrencyNames_cv extends CombineTypes<[_CurrencyNames_cv, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_cy$$static extends ClassLike {
              new(): CurrencyNames_cy;
            }
            let CurrencyNames_cy: _CurrencyNames_cy$$static;
            interface _CurrencyNames_cy {
              _getContents(): any[][];
            }
            interface CurrencyNames_cy extends CombineTypes<[_CurrencyNames_cy, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_da$$static extends ClassLike {
              new(): CurrencyNames_da;
            }
            let CurrencyNames_da: _CurrencyNames_da$$static;
            interface _CurrencyNames_da {
              _getContents(): any[][];
            }
            interface CurrencyNames_da extends CombineTypes<[_CurrencyNames_da, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_dav$$static extends ClassLike {
              new(): CurrencyNames_dav;
            }
            let CurrencyNames_dav: _CurrencyNames_dav$$static;
            interface _CurrencyNames_dav {
              _getContents(): any[][];
            }
            interface CurrencyNames_dav extends CombineTypes<[_CurrencyNames_dav, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_de$$static extends ClassLike {
              new(): CurrencyNames_de;
            }
            let CurrencyNames_de: _CurrencyNames_de$$static;
            interface _CurrencyNames_de {
              _getContents(): any[][];
            }
            interface CurrencyNames_de extends CombineTypes<[_CurrencyNames_de, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_de_CH$$static extends ClassLike {
              new(): CurrencyNames_de_CH;
            }
            let CurrencyNames_de_CH: _CurrencyNames_de_CH$$static;
            interface _CurrencyNames_de_CH {
              _getContents(): any[][];
            }
            interface CurrencyNames_de_CH extends CombineTypes<[_CurrencyNames_de_CH, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_de_LI$$static extends ClassLike {
              new(): CurrencyNames_de_LI;
            }
            let CurrencyNames_de_LI: _CurrencyNames_de_LI$$static;
            interface _CurrencyNames_de_LI {
              _getContents(): any[][];
            }
            interface CurrencyNames_de_LI extends CombineTypes<[_CurrencyNames_de_LI, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_de_LU$$static extends ClassLike {
              new(): CurrencyNames_de_LU;
            }
            let CurrencyNames_de_LU: _CurrencyNames_de_LU$$static;
            interface _CurrencyNames_de_LU {
              _getContents(): any[][];
            }
            interface CurrencyNames_de_LU extends CombineTypes<[_CurrencyNames_de_LU, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_dje$$static extends ClassLike {
              new(): CurrencyNames_dje;
            }
            let CurrencyNames_dje: _CurrencyNames_dje$$static;
            interface _CurrencyNames_dje {
              _getContents(): any[][];
            }
            interface CurrencyNames_dje extends CombineTypes<[_CurrencyNames_dje, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_doi$$static extends ClassLike {
              new(): CurrencyNames_doi;
            }
            let CurrencyNames_doi: _CurrencyNames_doi$$static;
            interface _CurrencyNames_doi {
              _getContents(): any[][];
            }
            interface CurrencyNames_doi extends CombineTypes<[_CurrencyNames_doi, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_dsb$$static extends ClassLike {
              new(): CurrencyNames_dsb;
            }
            let CurrencyNames_dsb: _CurrencyNames_dsb$$static;
            interface _CurrencyNames_dsb {
              _getContents(): any[][];
            }
            interface CurrencyNames_dsb extends CombineTypes<[_CurrencyNames_dsb, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_dyo$$static extends ClassLike {
              new(): CurrencyNames_dyo;
            }
            let CurrencyNames_dyo: _CurrencyNames_dyo$$static;
            interface _CurrencyNames_dyo {
              _getContents(): any[][];
            }
            interface CurrencyNames_dyo extends CombineTypes<[_CurrencyNames_dyo, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_dz$$static extends ClassLike {
              new(): CurrencyNames_dz;
            }
            let CurrencyNames_dz: _CurrencyNames_dz$$static;
            interface _CurrencyNames_dz {
              _getContents(): any[][];
            }
            interface CurrencyNames_dz extends CombineTypes<[_CurrencyNames_dz, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ebu$$static extends ClassLike {
              new(): CurrencyNames_ebu;
            }
            let CurrencyNames_ebu: _CurrencyNames_ebu$$static;
            interface _CurrencyNames_ebu {
              _getContents(): any[][];
            }
            interface CurrencyNames_ebu extends CombineTypes<[_CurrencyNames_ebu, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ee$$static extends ClassLike {
              new(): CurrencyNames_ee;
            }
            let CurrencyNames_ee: _CurrencyNames_ee$$static;
            interface _CurrencyNames_ee {
              _getContents(): any[][];
            }
            interface CurrencyNames_ee extends CombineTypes<[_CurrencyNames_ee, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_el$$static extends ClassLike {
              new(): CurrencyNames_el;
            }
            let CurrencyNames_el: _CurrencyNames_el$$static;
            interface _CurrencyNames_el {
              _getContents(): any[][];
            }
            interface CurrencyNames_el extends CombineTypes<[_CurrencyNames_el, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_el_POLYTON$$static extends ClassLike {
              new(): CurrencyNames_el_POLYTON;
            }
            let CurrencyNames_el_POLYTON: _CurrencyNames_el_POLYTON$$static;
            interface _CurrencyNames_el_POLYTON {
              _getContents(): any[][];
            }
            interface CurrencyNames_el_POLYTON extends CombineTypes<[_CurrencyNames_el_POLYTON, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_001$$static extends ClassLike {
              new(): CurrencyNames_en_001;
            }
            let CurrencyNames_en_001: _CurrencyNames_en_001$$static;
            interface _CurrencyNames_en_001 {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_001 extends CombineTypes<[_CurrencyNames_en_001, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_AE$$static extends ClassLike {
              new(): CurrencyNames_en_AE;
            }
            let CurrencyNames_en_AE: _CurrencyNames_en_AE$$static;
            interface _CurrencyNames_en_AE {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_AE extends CombineTypes<[_CurrencyNames_en_AE, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_AG$$static extends ClassLike {
              new(): CurrencyNames_en_AG;
            }
            let CurrencyNames_en_AG: _CurrencyNames_en_AG$$static;
            interface _CurrencyNames_en_AG {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_AG extends CombineTypes<[_CurrencyNames_en_AG, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_AI$$static extends ClassLike {
              new(): CurrencyNames_en_AI;
            }
            let CurrencyNames_en_AI: _CurrencyNames_en_AI$$static;
            interface _CurrencyNames_en_AI {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_AI extends CombineTypes<[_CurrencyNames_en_AI, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_AU$$static extends ClassLike {
              new(): CurrencyNames_en_AU;
            }
            let CurrencyNames_en_AU: _CurrencyNames_en_AU$$static;
            interface _CurrencyNames_en_AU {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_AU extends CombineTypes<[_CurrencyNames_en_AU, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_BB$$static extends ClassLike {
              new(): CurrencyNames_en_BB;
            }
            let CurrencyNames_en_BB: _CurrencyNames_en_BB$$static;
            interface _CurrencyNames_en_BB {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_BB extends CombineTypes<[_CurrencyNames_en_BB, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_BI$$static extends ClassLike {
              new(): CurrencyNames_en_BI;
            }
            let CurrencyNames_en_BI: _CurrencyNames_en_BI$$static;
            interface _CurrencyNames_en_BI {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_BI extends CombineTypes<[_CurrencyNames_en_BI, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_BM$$static extends ClassLike {
              new(): CurrencyNames_en_BM;
            }
            let CurrencyNames_en_BM: _CurrencyNames_en_BM$$static;
            interface _CurrencyNames_en_BM {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_BM extends CombineTypes<[_CurrencyNames_en_BM, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_BS$$static extends ClassLike {
              new(): CurrencyNames_en_BS;
            }
            let CurrencyNames_en_BS: _CurrencyNames_en_BS$$static;
            interface _CurrencyNames_en_BS {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_BS extends CombineTypes<[_CurrencyNames_en_BS, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_BW$$static extends ClassLike {
              new(): CurrencyNames_en_BW;
            }
            let CurrencyNames_en_BW: _CurrencyNames_en_BW$$static;
            interface _CurrencyNames_en_BW {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_BW extends CombineTypes<[_CurrencyNames_en_BW, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_BZ$$static extends ClassLike {
              new(): CurrencyNames_en_BZ;
            }
            let CurrencyNames_en_BZ: _CurrencyNames_en_BZ$$static;
            interface _CurrencyNames_en_BZ {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_BZ extends CombineTypes<[_CurrencyNames_en_BZ, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_CA$$static extends ClassLike {
              new(): CurrencyNames_en_CA;
            }
            let CurrencyNames_en_CA: _CurrencyNames_en_CA$$static;
            interface _CurrencyNames_en_CA {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_CA extends CombineTypes<[_CurrencyNames_en_CA, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_CC$$static extends ClassLike {
              new(): CurrencyNames_en_CC;
            }
            let CurrencyNames_en_CC: _CurrencyNames_en_CC$$static;
            interface _CurrencyNames_en_CC {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_CC extends CombineTypes<[_CurrencyNames_en_CC, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_CK$$static extends ClassLike {
              new(): CurrencyNames_en_CK;
            }
            let CurrencyNames_en_CK: _CurrencyNames_en_CK$$static;
            interface _CurrencyNames_en_CK {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_CK extends CombineTypes<[_CurrencyNames_en_CK, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_CX$$static extends ClassLike {
              new(): CurrencyNames_en_CX;
            }
            let CurrencyNames_en_CX: _CurrencyNames_en_CX$$static;
            interface _CurrencyNames_en_CX {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_CX extends CombineTypes<[_CurrencyNames_en_CX, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_DK$$static extends ClassLike {
              new(): CurrencyNames_en_DK;
            }
            let CurrencyNames_en_DK: _CurrencyNames_en_DK$$static;
            interface _CurrencyNames_en_DK {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_DK extends CombineTypes<[_CurrencyNames_en_DK, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_DM$$static extends ClassLike {
              new(): CurrencyNames_en_DM;
            }
            let CurrencyNames_en_DM: _CurrencyNames_en_DM$$static;
            interface _CurrencyNames_en_DM {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_DM extends CombineTypes<[_CurrencyNames_en_DM, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_ER$$static extends ClassLike {
              new(): CurrencyNames_en_ER;
            }
            let CurrencyNames_en_ER: _CurrencyNames_en_ER$$static;
            interface _CurrencyNames_en_ER {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_ER extends CombineTypes<[_CurrencyNames_en_ER, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_FJ$$static extends ClassLike {
              new(): CurrencyNames_en_FJ;
            }
            let CurrencyNames_en_FJ: _CurrencyNames_en_FJ$$static;
            interface _CurrencyNames_en_FJ {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_FJ extends CombineTypes<[_CurrencyNames_en_FJ, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_FK$$static extends ClassLike {
              new(): CurrencyNames_en_FK;
            }
            let CurrencyNames_en_FK: _CurrencyNames_en_FK$$static;
            interface _CurrencyNames_en_FK {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_FK extends CombineTypes<[_CurrencyNames_en_FK, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_GD$$static extends ClassLike {
              new(): CurrencyNames_en_GD;
            }
            let CurrencyNames_en_GD: _CurrencyNames_en_GD$$static;
            interface _CurrencyNames_en_GD {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_GD extends CombineTypes<[_CurrencyNames_en_GD, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_GG$$static extends ClassLike {
              new(): CurrencyNames_en_GG;
            }
            let CurrencyNames_en_GG: _CurrencyNames_en_GG$$static;
            interface _CurrencyNames_en_GG {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_GG extends CombineTypes<[_CurrencyNames_en_GG, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_GH$$static extends ClassLike {
              new(): CurrencyNames_en_GH;
            }
            let CurrencyNames_en_GH: _CurrencyNames_en_GH$$static;
            interface _CurrencyNames_en_GH {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_GH extends CombineTypes<[_CurrencyNames_en_GH, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_GI$$static extends ClassLike {
              new(): CurrencyNames_en_GI;
            }
            let CurrencyNames_en_GI: _CurrencyNames_en_GI$$static;
            interface _CurrencyNames_en_GI {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_GI extends CombineTypes<[_CurrencyNames_en_GI, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_GM$$static extends ClassLike {
              new(): CurrencyNames_en_GM;
            }
            let CurrencyNames_en_GM: _CurrencyNames_en_GM$$static;
            interface _CurrencyNames_en_GM {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_GM extends CombineTypes<[_CurrencyNames_en_GM, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_GY$$static extends ClassLike {
              new(): CurrencyNames_en_GY;
            }
            let CurrencyNames_en_GY: _CurrencyNames_en_GY$$static;
            interface _CurrencyNames_en_GY {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_GY extends CombineTypes<[_CurrencyNames_en_GY, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_IM$$static extends ClassLike {
              new(): CurrencyNames_en_IM;
            }
            let CurrencyNames_en_IM: _CurrencyNames_en_IM$$static;
            interface _CurrencyNames_en_IM {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_IM extends CombineTypes<[_CurrencyNames_en_IM, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_IN$$static extends ClassLike {
              new(): CurrencyNames_en_IN;
            }
            let CurrencyNames_en_IN: _CurrencyNames_en_IN$$static;
            interface _CurrencyNames_en_IN {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_IN extends CombineTypes<[_CurrencyNames_en_IN, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_JE$$static extends ClassLike {
              new(): CurrencyNames_en_JE;
            }
            let CurrencyNames_en_JE: _CurrencyNames_en_JE$$static;
            interface _CurrencyNames_en_JE {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_JE extends CombineTypes<[_CurrencyNames_en_JE, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_JM$$static extends ClassLike {
              new(): CurrencyNames_en_JM;
            }
            let CurrencyNames_en_JM: _CurrencyNames_en_JM$$static;
            interface _CurrencyNames_en_JM {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_JM extends CombineTypes<[_CurrencyNames_en_JM, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_KE$$static extends ClassLike {
              new(): CurrencyNames_en_KE;
            }
            let CurrencyNames_en_KE: _CurrencyNames_en_KE$$static;
            interface _CurrencyNames_en_KE {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_KE extends CombineTypes<[_CurrencyNames_en_KE, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_KI$$static extends ClassLike {
              new(): CurrencyNames_en_KI;
            }
            let CurrencyNames_en_KI: _CurrencyNames_en_KI$$static;
            interface _CurrencyNames_en_KI {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_KI extends CombineTypes<[_CurrencyNames_en_KI, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_KN$$static extends ClassLike {
              new(): CurrencyNames_en_KN;
            }
            let CurrencyNames_en_KN: _CurrencyNames_en_KN$$static;
            interface _CurrencyNames_en_KN {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_KN extends CombineTypes<[_CurrencyNames_en_KN, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_KY$$static extends ClassLike {
              new(): CurrencyNames_en_KY;
            }
            let CurrencyNames_en_KY: _CurrencyNames_en_KY$$static;
            interface _CurrencyNames_en_KY {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_KY extends CombineTypes<[_CurrencyNames_en_KY, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_LC$$static extends ClassLike {
              new(): CurrencyNames_en_LC;
            }
            let CurrencyNames_en_LC: _CurrencyNames_en_LC$$static;
            interface _CurrencyNames_en_LC {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_LC extends CombineTypes<[_CurrencyNames_en_LC, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_LR$$static extends ClassLike {
              new(): CurrencyNames_en_LR;
            }
            let CurrencyNames_en_LR: _CurrencyNames_en_LR$$static;
            interface _CurrencyNames_en_LR {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_LR extends CombineTypes<[_CurrencyNames_en_LR, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_LS$$static extends ClassLike {
              new(): CurrencyNames_en_LS;
            }
            let CurrencyNames_en_LS: _CurrencyNames_en_LS$$static;
            interface _CurrencyNames_en_LS {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_LS extends CombineTypes<[_CurrencyNames_en_LS, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_MG$$static extends ClassLike {
              new(): CurrencyNames_en_MG;
            }
            let CurrencyNames_en_MG: _CurrencyNames_en_MG$$static;
            interface _CurrencyNames_en_MG {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_MG extends CombineTypes<[_CurrencyNames_en_MG, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_MO$$static extends ClassLike {
              new(): CurrencyNames_en_MO;
            }
            let CurrencyNames_en_MO: _CurrencyNames_en_MO$$static;
            interface _CurrencyNames_en_MO {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_MO extends CombineTypes<[_CurrencyNames_en_MO, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_MS$$static extends ClassLike {
              new(): CurrencyNames_en_MS;
            }
            let CurrencyNames_en_MS: _CurrencyNames_en_MS$$static;
            interface _CurrencyNames_en_MS {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_MS extends CombineTypes<[_CurrencyNames_en_MS, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_MT$$static extends ClassLike {
              new(): CurrencyNames_en_MT;
            }
            let CurrencyNames_en_MT: _CurrencyNames_en_MT$$static;
            interface _CurrencyNames_en_MT {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_MT extends CombineTypes<[_CurrencyNames_en_MT, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_MU$$static extends ClassLike {
              new(): CurrencyNames_en_MU;
            }
            let CurrencyNames_en_MU: _CurrencyNames_en_MU$$static;
            interface _CurrencyNames_en_MU {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_MU extends CombineTypes<[_CurrencyNames_en_MU, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_MV$$static extends ClassLike {
              new(): CurrencyNames_en_MV;
            }
            let CurrencyNames_en_MV: _CurrencyNames_en_MV$$static;
            interface _CurrencyNames_en_MV {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_MV extends CombineTypes<[_CurrencyNames_en_MV, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_MW$$static extends ClassLike {
              new(): CurrencyNames_en_MW;
            }
            let CurrencyNames_en_MW: _CurrencyNames_en_MW$$static;
            interface _CurrencyNames_en_MW {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_MW extends CombineTypes<[_CurrencyNames_en_MW, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_MY$$static extends ClassLike {
              new(): CurrencyNames_en_MY;
            }
            let CurrencyNames_en_MY: _CurrencyNames_en_MY$$static;
            interface _CurrencyNames_en_MY {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_MY extends CombineTypes<[_CurrencyNames_en_MY, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_NA$$static extends ClassLike {
              new(): CurrencyNames_en_NA;
            }
            let CurrencyNames_en_NA: _CurrencyNames_en_NA$$static;
            interface _CurrencyNames_en_NA {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_NA extends CombineTypes<[_CurrencyNames_en_NA, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_NF$$static extends ClassLike {
              new(): CurrencyNames_en_NF;
            }
            let CurrencyNames_en_NF: _CurrencyNames_en_NF$$static;
            interface _CurrencyNames_en_NF {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_NF extends CombineTypes<[_CurrencyNames_en_NF, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_NG$$static extends ClassLike {
              new(): CurrencyNames_en_NG;
            }
            let CurrencyNames_en_NG: _CurrencyNames_en_NG$$static;
            interface _CurrencyNames_en_NG {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_NG extends CombineTypes<[_CurrencyNames_en_NG, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_NR$$static extends ClassLike {
              new(): CurrencyNames_en_NR;
            }
            let CurrencyNames_en_NR: _CurrencyNames_en_NR$$static;
            interface _CurrencyNames_en_NR {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_NR extends CombineTypes<[_CurrencyNames_en_NR, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_NU$$static extends ClassLike {
              new(): CurrencyNames_en_NU;
            }
            let CurrencyNames_en_NU: _CurrencyNames_en_NU$$static;
            interface _CurrencyNames_en_NU {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_NU extends CombineTypes<[_CurrencyNames_en_NU, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_NZ$$static extends ClassLike {
              new(): CurrencyNames_en_NZ;
            }
            let CurrencyNames_en_NZ: _CurrencyNames_en_NZ$$static;
            interface _CurrencyNames_en_NZ {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_NZ extends CombineTypes<[_CurrencyNames_en_NZ, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_PG$$static extends ClassLike {
              new(): CurrencyNames_en_PG;
            }
            let CurrencyNames_en_PG: _CurrencyNames_en_PG$$static;
            interface _CurrencyNames_en_PG {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_PG extends CombineTypes<[_CurrencyNames_en_PG, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_PK$$static extends ClassLike {
              new(): CurrencyNames_en_PK;
            }
            let CurrencyNames_en_PK: _CurrencyNames_en_PK$$static;
            interface _CurrencyNames_en_PK {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_PK extends CombineTypes<[_CurrencyNames_en_PK, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_PN$$static extends ClassLike {
              new(): CurrencyNames_en_PN;
            }
            let CurrencyNames_en_PN: _CurrencyNames_en_PN$$static;
            interface _CurrencyNames_en_PN {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_PN extends CombineTypes<[_CurrencyNames_en_PN, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_RW$$static extends ClassLike {
              new(): CurrencyNames_en_RW;
            }
            let CurrencyNames_en_RW: _CurrencyNames_en_RW$$static;
            interface _CurrencyNames_en_RW {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_RW extends CombineTypes<[_CurrencyNames_en_RW, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_SB$$static extends ClassLike {
              new(): CurrencyNames_en_SB;
            }
            let CurrencyNames_en_SB: _CurrencyNames_en_SB$$static;
            interface _CurrencyNames_en_SB {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_SB extends CombineTypes<[_CurrencyNames_en_SB, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_SC$$static extends ClassLike {
              new(): CurrencyNames_en_SC;
            }
            let CurrencyNames_en_SC: _CurrencyNames_en_SC$$static;
            interface _CurrencyNames_en_SC {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_SC extends CombineTypes<[_CurrencyNames_en_SC, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_SE$$static extends ClassLike {
              new(): CurrencyNames_en_SE;
            }
            let CurrencyNames_en_SE: _CurrencyNames_en_SE$$static;
            interface _CurrencyNames_en_SE {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_SE extends CombineTypes<[_CurrencyNames_en_SE, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_SG$$static extends ClassLike {
              new(): CurrencyNames_en_SG;
            }
            let CurrencyNames_en_SG: _CurrencyNames_en_SG$$static;
            interface _CurrencyNames_en_SG {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_SG extends CombineTypes<[_CurrencyNames_en_SG, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_SH$$static extends ClassLike {
              new(): CurrencyNames_en_SH;
            }
            let CurrencyNames_en_SH: _CurrencyNames_en_SH$$static;
            interface _CurrencyNames_en_SH {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_SH extends CombineTypes<[_CurrencyNames_en_SH, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_SL$$static extends ClassLike {
              new(): CurrencyNames_en_SL;
            }
            let CurrencyNames_en_SL: _CurrencyNames_en_SL$$static;
            interface _CurrencyNames_en_SL {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_SL extends CombineTypes<[_CurrencyNames_en_SL, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_SS$$static extends ClassLike {
              new(): CurrencyNames_en_SS;
            }
            let CurrencyNames_en_SS: _CurrencyNames_en_SS$$static;
            interface _CurrencyNames_en_SS {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_SS extends CombineTypes<[_CurrencyNames_en_SS, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_SX$$static extends ClassLike {
              new(): CurrencyNames_en_SX;
            }
            let CurrencyNames_en_SX: _CurrencyNames_en_SX$$static;
            interface _CurrencyNames_en_SX {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_SX extends CombineTypes<[_CurrencyNames_en_SX, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_SZ$$static extends ClassLike {
              new(): CurrencyNames_en_SZ;
            }
            let CurrencyNames_en_SZ: _CurrencyNames_en_SZ$$static;
            interface _CurrencyNames_en_SZ {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_SZ extends CombineTypes<[_CurrencyNames_en_SZ, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_TK$$static extends ClassLike {
              new(): CurrencyNames_en_TK;
            }
            let CurrencyNames_en_TK: _CurrencyNames_en_TK$$static;
            interface _CurrencyNames_en_TK {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_TK extends CombineTypes<[_CurrencyNames_en_TK, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_TO$$static extends ClassLike {
              new(): CurrencyNames_en_TO;
            }
            let CurrencyNames_en_TO: _CurrencyNames_en_TO$$static;
            interface _CurrencyNames_en_TO {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_TO extends CombineTypes<[_CurrencyNames_en_TO, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_TT$$static extends ClassLike {
              new(): CurrencyNames_en_TT;
            }
            let CurrencyNames_en_TT: _CurrencyNames_en_TT$$static;
            interface _CurrencyNames_en_TT {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_TT extends CombineTypes<[_CurrencyNames_en_TT, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_TV$$static extends ClassLike {
              new(): CurrencyNames_en_TV;
            }
            let CurrencyNames_en_TV: _CurrencyNames_en_TV$$static;
            interface _CurrencyNames_en_TV {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_TV extends CombineTypes<[_CurrencyNames_en_TV, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_TZ$$static extends ClassLike {
              new(): CurrencyNames_en_TZ;
            }
            let CurrencyNames_en_TZ: _CurrencyNames_en_TZ$$static;
            interface _CurrencyNames_en_TZ {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_TZ extends CombineTypes<[_CurrencyNames_en_TZ, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_UG$$static extends ClassLike {
              new(): CurrencyNames_en_UG;
            }
            let CurrencyNames_en_UG: _CurrencyNames_en_UG$$static;
            interface _CurrencyNames_en_UG {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_UG extends CombineTypes<[_CurrencyNames_en_UG, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_VC$$static extends ClassLike {
              new(): CurrencyNames_en_VC;
            }
            let CurrencyNames_en_VC: _CurrencyNames_en_VC$$static;
            interface _CurrencyNames_en_VC {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_VC extends CombineTypes<[_CurrencyNames_en_VC, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_VU$$static extends ClassLike {
              new(): CurrencyNames_en_VU;
            }
            let CurrencyNames_en_VU: _CurrencyNames_en_VU$$static;
            interface _CurrencyNames_en_VU {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_VU extends CombineTypes<[_CurrencyNames_en_VU, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_WS$$static extends ClassLike {
              new(): CurrencyNames_en_WS;
            }
            let CurrencyNames_en_WS: _CurrencyNames_en_WS$$static;
            interface _CurrencyNames_en_WS {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_WS extends CombineTypes<[_CurrencyNames_en_WS, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_ZA$$static extends ClassLike {
              new(): CurrencyNames_en_ZA;
            }
            let CurrencyNames_en_ZA: _CurrencyNames_en_ZA$$static;
            interface _CurrencyNames_en_ZA {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_ZA extends CombineTypes<[_CurrencyNames_en_ZA, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_en_ZM$$static extends ClassLike {
              new(): CurrencyNames_en_ZM;
            }
            let CurrencyNames_en_ZM: _CurrencyNames_en_ZM$$static;
            interface _CurrencyNames_en_ZM {
              _getContents(): any[][];
            }
            interface CurrencyNames_en_ZM extends CombineTypes<[_CurrencyNames_en_ZM, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_es$$static extends ClassLike {
              new(): CurrencyNames_es;
            }
            let CurrencyNames_es: _CurrencyNames_es$$static;
            interface _CurrencyNames_es {
              _getContents(): any[][];
            }
            interface CurrencyNames_es extends CombineTypes<[_CurrencyNames_es, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_es_419$$static extends ClassLike {
              new(): CurrencyNames_es_419;
            }
            let CurrencyNames_es_419: _CurrencyNames_es_419$$static;
            interface _CurrencyNames_es_419 {
              _getContents(): any[][];
            }
            interface CurrencyNames_es_419 extends CombineTypes<[_CurrencyNames_es_419, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_es_AR$$static extends ClassLike {
              new(): CurrencyNames_es_AR;
            }
            let CurrencyNames_es_AR: _CurrencyNames_es_AR$$static;
            interface _CurrencyNames_es_AR {
              _getContents(): any[][];
            }
            interface CurrencyNames_es_AR extends CombineTypes<[_CurrencyNames_es_AR, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_es_BO$$static extends ClassLike {
              new(): CurrencyNames_es_BO;
            }
            let CurrencyNames_es_BO: _CurrencyNames_es_BO$$static;
            interface _CurrencyNames_es_BO {
              _getContents(): any[][];
            }
            interface CurrencyNames_es_BO extends CombineTypes<[_CurrencyNames_es_BO, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_es_BR$$static extends ClassLike {
              new(): CurrencyNames_es_BR;
            }
            let CurrencyNames_es_BR: _CurrencyNames_es_BR$$static;
            interface _CurrencyNames_es_BR {
              _getContents(): any[][];
            }
            interface CurrencyNames_es_BR extends CombineTypes<[_CurrencyNames_es_BR, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_es_BZ$$static extends ClassLike {
              new(): CurrencyNames_es_BZ;
            }
            let CurrencyNames_es_BZ: _CurrencyNames_es_BZ$$static;
            interface _CurrencyNames_es_BZ {
              _getContents(): any[][];
            }
            interface CurrencyNames_es_BZ extends CombineTypes<[_CurrencyNames_es_BZ, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_es_CL$$static extends ClassLike {
              new(): CurrencyNames_es_CL;
            }
            let CurrencyNames_es_CL: _CurrencyNames_es_CL$$static;
            interface _CurrencyNames_es_CL {
              _getContents(): any[][];
            }
            interface CurrencyNames_es_CL extends CombineTypes<[_CurrencyNames_es_CL, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_es_CO$$static extends ClassLike {
              new(): CurrencyNames_es_CO;
            }
            let CurrencyNames_es_CO: _CurrencyNames_es_CO$$static;
            interface _CurrencyNames_es_CO {
              _getContents(): any[][];
            }
            interface CurrencyNames_es_CO extends CombineTypes<[_CurrencyNames_es_CO, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_es_CR$$static extends ClassLike {
              new(): CurrencyNames_es_CR;
            }
            let CurrencyNames_es_CR: _CurrencyNames_es_CR$$static;
            interface _CurrencyNames_es_CR {
              _getContents(): any[][];
            }
            interface CurrencyNames_es_CR extends CombineTypes<[_CurrencyNames_es_CR, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_es_CU$$static extends ClassLike {
              new(): CurrencyNames_es_CU;
            }
            let CurrencyNames_es_CU: _CurrencyNames_es_CU$$static;
            interface _CurrencyNames_es_CU {
              _getContents(): any[][];
            }
            interface CurrencyNames_es_CU extends CombineTypes<[_CurrencyNames_es_CU, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_es_DO$$static extends ClassLike {
              new(): CurrencyNames_es_DO;
            }
            let CurrencyNames_es_DO: _CurrencyNames_es_DO$$static;
            interface _CurrencyNames_es_DO {
              _getContents(): any[][];
            }
            interface CurrencyNames_es_DO extends CombineTypes<[_CurrencyNames_es_DO, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_es_EC$$static extends ClassLike {
              new(): CurrencyNames_es_EC;
            }
            let CurrencyNames_es_EC: _CurrencyNames_es_EC$$static;
            interface _CurrencyNames_es_EC {
              _getContents(): any[][];
            }
            interface CurrencyNames_es_EC extends CombineTypes<[_CurrencyNames_es_EC, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_es_GQ$$static extends ClassLike {
              new(): CurrencyNames_es_GQ;
            }
            let CurrencyNames_es_GQ: _CurrencyNames_es_GQ$$static;
            interface _CurrencyNames_es_GQ {
              _getContents(): any[][];
            }
            interface CurrencyNames_es_GQ extends CombineTypes<[_CurrencyNames_es_GQ, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_es_GT$$static extends ClassLike {
              new(): CurrencyNames_es_GT;
            }
            let CurrencyNames_es_GT: _CurrencyNames_es_GT$$static;
            interface _CurrencyNames_es_GT {
              _getContents(): any[][];
            }
            interface CurrencyNames_es_GT extends CombineTypes<[_CurrencyNames_es_GT, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_es_HN$$static extends ClassLike {
              new(): CurrencyNames_es_HN;
            }
            let CurrencyNames_es_HN: _CurrencyNames_es_HN$$static;
            interface _CurrencyNames_es_HN {
              _getContents(): any[][];
            }
            interface CurrencyNames_es_HN extends CombineTypes<[_CurrencyNames_es_HN, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_es_MX$$static extends ClassLike {
              new(): CurrencyNames_es_MX;
            }
            let CurrencyNames_es_MX: _CurrencyNames_es_MX$$static;
            interface _CurrencyNames_es_MX {
              _getContents(): any[][];
            }
            interface CurrencyNames_es_MX extends CombineTypes<[_CurrencyNames_es_MX, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_es_NI$$static extends ClassLike {
              new(): CurrencyNames_es_NI;
            }
            let CurrencyNames_es_NI: _CurrencyNames_es_NI$$static;
            interface _CurrencyNames_es_NI {
              _getContents(): any[][];
            }
            interface CurrencyNames_es_NI extends CombineTypes<[_CurrencyNames_es_NI, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_es_PA$$static extends ClassLike {
              new(): CurrencyNames_es_PA;
            }
            let CurrencyNames_es_PA: _CurrencyNames_es_PA$$static;
            interface _CurrencyNames_es_PA {
              _getContents(): any[][];
            }
            interface CurrencyNames_es_PA extends CombineTypes<[_CurrencyNames_es_PA, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_es_PE$$static extends ClassLike {
              new(): CurrencyNames_es_PE;
            }
            let CurrencyNames_es_PE: _CurrencyNames_es_PE$$static;
            interface _CurrencyNames_es_PE {
              _getContents(): any[][];
            }
            interface CurrencyNames_es_PE extends CombineTypes<[_CurrencyNames_es_PE, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_es_PH$$static extends ClassLike {
              new(): CurrencyNames_es_PH;
            }
            let CurrencyNames_es_PH: _CurrencyNames_es_PH$$static;
            interface _CurrencyNames_es_PH {
              _getContents(): any[][];
            }
            interface CurrencyNames_es_PH extends CombineTypes<[_CurrencyNames_es_PH, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_es_PR$$static extends ClassLike {
              new(): CurrencyNames_es_PR;
            }
            let CurrencyNames_es_PR: _CurrencyNames_es_PR$$static;
            interface _CurrencyNames_es_PR {
              _getContents(): any[][];
            }
            interface CurrencyNames_es_PR extends CombineTypes<[_CurrencyNames_es_PR, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_es_PY$$static extends ClassLike {
              new(): CurrencyNames_es_PY;
            }
            let CurrencyNames_es_PY: _CurrencyNames_es_PY$$static;
            interface _CurrencyNames_es_PY {
              _getContents(): any[][];
            }
            interface CurrencyNames_es_PY extends CombineTypes<[_CurrencyNames_es_PY, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_es_SV$$static extends ClassLike {
              new(): CurrencyNames_es_SV;
            }
            let CurrencyNames_es_SV: _CurrencyNames_es_SV$$static;
            interface _CurrencyNames_es_SV {
              _getContents(): any[][];
            }
            interface CurrencyNames_es_SV extends CombineTypes<[_CurrencyNames_es_SV, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_es_US$$static extends ClassLike {
              new(): CurrencyNames_es_US;
            }
            let CurrencyNames_es_US: _CurrencyNames_es_US$$static;
            interface _CurrencyNames_es_US {
              _getContents(): any[][];
            }
            interface CurrencyNames_es_US extends CombineTypes<[_CurrencyNames_es_US, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_es_UY$$static extends ClassLike {
              new(): CurrencyNames_es_UY;
            }
            let CurrencyNames_es_UY: _CurrencyNames_es_UY$$static;
            interface _CurrencyNames_es_UY {
              _getContents(): any[][];
            }
            interface CurrencyNames_es_UY extends CombineTypes<[_CurrencyNames_es_UY, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_es_VE$$static extends ClassLike {
              new(): CurrencyNames_es_VE;
            }
            let CurrencyNames_es_VE: _CurrencyNames_es_VE$$static;
            interface _CurrencyNames_es_VE {
              _getContents(): any[][];
            }
            interface CurrencyNames_es_VE extends CombineTypes<[_CurrencyNames_es_VE, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_et$$static extends ClassLike {
              new(): CurrencyNames_et;
            }
            let CurrencyNames_et: _CurrencyNames_et$$static;
            interface _CurrencyNames_et {
              _getContents(): any[][];
            }
            interface CurrencyNames_et extends CombineTypes<[_CurrencyNames_et, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_eu$$static extends ClassLike {
              new(): CurrencyNames_eu;
            }
            let CurrencyNames_eu: _CurrencyNames_eu$$static;
            interface _CurrencyNames_eu {
              _getContents(): any[][];
            }
            interface CurrencyNames_eu extends CombineTypes<[_CurrencyNames_eu, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ewo$$static extends ClassLike {
              new(): CurrencyNames_ewo;
            }
            let CurrencyNames_ewo: _CurrencyNames_ewo$$static;
            interface _CurrencyNames_ewo {
              _getContents(): any[][];
            }
            interface CurrencyNames_ewo extends CombineTypes<[_CurrencyNames_ewo, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_fa$$static extends ClassLike {
              new(): CurrencyNames_fa;
            }
            let CurrencyNames_fa: _CurrencyNames_fa$$static;
            interface _CurrencyNames_fa {
              _getContents(): any[][];
            }
            interface CurrencyNames_fa extends CombineTypes<[_CurrencyNames_fa, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_fa_AF$$static extends ClassLike {
              new(): CurrencyNames_fa_AF;
            }
            let CurrencyNames_fa_AF: _CurrencyNames_fa_AF$$static;
            interface _CurrencyNames_fa_AF {
              _getContents(): any[][];
            }
            interface CurrencyNames_fa_AF extends CombineTypes<[_CurrencyNames_fa_AF, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ff$$static extends ClassLike {
              new(): CurrencyNames_ff;
            }
            let CurrencyNames_ff: _CurrencyNames_ff$$static;
            interface _CurrencyNames_ff {
              _getContents(): any[][];
            }
            interface CurrencyNames_ff extends CombineTypes<[_CurrencyNames_ff, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ff_Adlm$$static extends ClassLike {
              new(): CurrencyNames_ff_Adlm;
            }
            let CurrencyNames_ff_Adlm: _CurrencyNames_ff_Adlm$$static;
            interface _CurrencyNames_ff_Adlm {
              _getContents(): any[][];
            }
            interface CurrencyNames_ff_Adlm extends CombineTypes<[_CurrencyNames_ff_Adlm, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ff_Adlm_BF$$static extends ClassLike {
              new(): CurrencyNames_ff_Adlm_BF;
            }
            let CurrencyNames_ff_Adlm_BF: _CurrencyNames_ff_Adlm_BF$$static;
            interface _CurrencyNames_ff_Adlm_BF {
              _getContents(): any[][];
            }
            interface CurrencyNames_ff_Adlm_BF extends CombineTypes<[_CurrencyNames_ff_Adlm_BF, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ff_Adlm_CM$$static extends ClassLike {
              new(): CurrencyNames_ff_Adlm_CM;
            }
            let CurrencyNames_ff_Adlm_CM: _CurrencyNames_ff_Adlm_CM$$static;
            interface _CurrencyNames_ff_Adlm_CM {
              _getContents(): any[][];
            }
            interface CurrencyNames_ff_Adlm_CM extends CombineTypes<[_CurrencyNames_ff_Adlm_CM, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ff_Adlm_GH$$static extends ClassLike {
              new(): CurrencyNames_ff_Adlm_GH;
            }
            let CurrencyNames_ff_Adlm_GH: _CurrencyNames_ff_Adlm_GH$$static;
            interface _CurrencyNames_ff_Adlm_GH {
              _getContents(): any[][];
            }
            interface CurrencyNames_ff_Adlm_GH extends CombineTypes<[_CurrencyNames_ff_Adlm_GH, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ff_Adlm_GM$$static extends ClassLike {
              new(): CurrencyNames_ff_Adlm_GM;
            }
            let CurrencyNames_ff_Adlm_GM: _CurrencyNames_ff_Adlm_GM$$static;
            interface _CurrencyNames_ff_Adlm_GM {
              _getContents(): any[][];
            }
            interface CurrencyNames_ff_Adlm_GM extends CombineTypes<[_CurrencyNames_ff_Adlm_GM, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ff_Adlm_GW$$static extends ClassLike {
              new(): CurrencyNames_ff_Adlm_GW;
            }
            let CurrencyNames_ff_Adlm_GW: _CurrencyNames_ff_Adlm_GW$$static;
            interface _CurrencyNames_ff_Adlm_GW {
              _getContents(): any[][];
            }
            interface CurrencyNames_ff_Adlm_GW extends CombineTypes<[_CurrencyNames_ff_Adlm_GW, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ff_Adlm_LR$$static extends ClassLike {
              new(): CurrencyNames_ff_Adlm_LR;
            }
            let CurrencyNames_ff_Adlm_LR: _CurrencyNames_ff_Adlm_LR$$static;
            interface _CurrencyNames_ff_Adlm_LR {
              _getContents(): any[][];
            }
            interface CurrencyNames_ff_Adlm_LR extends CombineTypes<[_CurrencyNames_ff_Adlm_LR, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ff_Adlm_MR$$static extends ClassLike {
              new(): CurrencyNames_ff_Adlm_MR;
            }
            let CurrencyNames_ff_Adlm_MR: _CurrencyNames_ff_Adlm_MR$$static;
            interface _CurrencyNames_ff_Adlm_MR {
              _getContents(): any[][];
            }
            interface CurrencyNames_ff_Adlm_MR extends CombineTypes<[_CurrencyNames_ff_Adlm_MR, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ff_Adlm_NE$$static extends ClassLike {
              new(): CurrencyNames_ff_Adlm_NE;
            }
            let CurrencyNames_ff_Adlm_NE: _CurrencyNames_ff_Adlm_NE$$static;
            interface _CurrencyNames_ff_Adlm_NE {
              _getContents(): any[][];
            }
            interface CurrencyNames_ff_Adlm_NE extends CombineTypes<[_CurrencyNames_ff_Adlm_NE, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ff_Adlm_NG$$static extends ClassLike {
              new(): CurrencyNames_ff_Adlm_NG;
            }
            let CurrencyNames_ff_Adlm_NG: _CurrencyNames_ff_Adlm_NG$$static;
            interface _CurrencyNames_ff_Adlm_NG {
              _getContents(): any[][];
            }
            interface CurrencyNames_ff_Adlm_NG extends CombineTypes<[_CurrencyNames_ff_Adlm_NG, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ff_Adlm_SL$$static extends ClassLike {
              new(): CurrencyNames_ff_Adlm_SL;
            }
            let CurrencyNames_ff_Adlm_SL: _CurrencyNames_ff_Adlm_SL$$static;
            interface _CurrencyNames_ff_Adlm_SL {
              _getContents(): any[][];
            }
            interface CurrencyNames_ff_Adlm_SL extends CombineTypes<[_CurrencyNames_ff_Adlm_SL, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ff_Adlm_SN$$static extends ClassLike {
              new(): CurrencyNames_ff_Adlm_SN;
            }
            let CurrencyNames_ff_Adlm_SN: _CurrencyNames_ff_Adlm_SN$$static;
            interface _CurrencyNames_ff_Adlm_SN {
              _getContents(): any[][];
            }
            interface CurrencyNames_ff_Adlm_SN extends CombineTypes<[_CurrencyNames_ff_Adlm_SN, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ff_Latn_GH$$static extends ClassLike {
              new(): CurrencyNames_ff_Latn_GH;
            }
            let CurrencyNames_ff_Latn_GH: _CurrencyNames_ff_Latn_GH$$static;
            interface _CurrencyNames_ff_Latn_GH {
              _getContents(): any[][];
            }
            interface CurrencyNames_ff_Latn_GH extends CombineTypes<[_CurrencyNames_ff_Latn_GH, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ff_Latn_GM$$static extends ClassLike {
              new(): CurrencyNames_ff_Latn_GM;
            }
            let CurrencyNames_ff_Latn_GM: _CurrencyNames_ff_Latn_GM$$static;
            interface _CurrencyNames_ff_Latn_GM {
              _getContents(): any[][];
            }
            interface CurrencyNames_ff_Latn_GM extends CombineTypes<[_CurrencyNames_ff_Latn_GM, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ff_Latn_GN$$static extends ClassLike {
              new(): CurrencyNames_ff_Latn_GN;
            }
            let CurrencyNames_ff_Latn_GN: _CurrencyNames_ff_Latn_GN$$static;
            interface _CurrencyNames_ff_Latn_GN {
              _getContents(): any[][];
            }
            interface CurrencyNames_ff_Latn_GN extends CombineTypes<[_CurrencyNames_ff_Latn_GN, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ff_Latn_LR$$static extends ClassLike {
              new(): CurrencyNames_ff_Latn_LR;
            }
            let CurrencyNames_ff_Latn_LR: _CurrencyNames_ff_Latn_LR$$static;
            interface _CurrencyNames_ff_Latn_LR {
              _getContents(): any[][];
            }
            interface CurrencyNames_ff_Latn_LR extends CombineTypes<[_CurrencyNames_ff_Latn_LR, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ff_Latn_MR$$static extends ClassLike {
              new(): CurrencyNames_ff_Latn_MR;
            }
            let CurrencyNames_ff_Latn_MR: _CurrencyNames_ff_Latn_MR$$static;
            interface _CurrencyNames_ff_Latn_MR {
              _getContents(): any[][];
            }
            interface CurrencyNames_ff_Latn_MR extends CombineTypes<[_CurrencyNames_ff_Latn_MR, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ff_Latn_NG$$static extends ClassLike {
              new(): CurrencyNames_ff_Latn_NG;
            }
            let CurrencyNames_ff_Latn_NG: _CurrencyNames_ff_Latn_NG$$static;
            interface _CurrencyNames_ff_Latn_NG {
              _getContents(): any[][];
            }
            interface CurrencyNames_ff_Latn_NG extends CombineTypes<[_CurrencyNames_ff_Latn_NG, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ff_Latn_SL$$static extends ClassLike {
              new(): CurrencyNames_ff_Latn_SL;
            }
            let CurrencyNames_ff_Latn_SL: _CurrencyNames_ff_Latn_SL$$static;
            interface _CurrencyNames_ff_Latn_SL {
              _getContents(): any[][];
            }
            interface CurrencyNames_ff_Latn_SL extends CombineTypes<[_CurrencyNames_ff_Latn_SL, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_fi$$static extends ClassLike {
              new(): CurrencyNames_fi;
            }
            let CurrencyNames_fi: _CurrencyNames_fi$$static;
            interface _CurrencyNames_fi {
              _getContents(): any[][];
            }
            interface CurrencyNames_fi extends CombineTypes<[_CurrencyNames_fi, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_fil$$static extends ClassLike {
              new(): CurrencyNames_fil;
            }
            let CurrencyNames_fil: _CurrencyNames_fil$$static;
            interface _CurrencyNames_fil {
              _getContents(): any[][];
            }
            interface CurrencyNames_fil extends CombineTypes<[_CurrencyNames_fil, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_fo$$static extends ClassLike {
              new(): CurrencyNames_fo;
            }
            let CurrencyNames_fo: _CurrencyNames_fo$$static;
            interface _CurrencyNames_fo {
              _getContents(): any[][];
            }
            interface CurrencyNames_fo extends CombineTypes<[_CurrencyNames_fo, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_fo_DK$$static extends ClassLike {
              new(): CurrencyNames_fo_DK;
            }
            let CurrencyNames_fo_DK: _CurrencyNames_fo_DK$$static;
            interface _CurrencyNames_fo_DK {
              _getContents(): any[][];
            }
            interface CurrencyNames_fo_DK extends CombineTypes<[_CurrencyNames_fo_DK, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_fr$$static extends ClassLike {
              new(): CurrencyNames_fr;
            }
            let CurrencyNames_fr: _CurrencyNames_fr$$static;
            interface _CurrencyNames_fr {
              _getContents(): any[][];
            }
            interface CurrencyNames_fr extends CombineTypes<[_CurrencyNames_fr, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_fr_BI$$static extends ClassLike {
              new(): CurrencyNames_fr_BI;
            }
            let CurrencyNames_fr_BI: _CurrencyNames_fr_BI$$static;
            interface _CurrencyNames_fr_BI {
              _getContents(): any[][];
            }
            interface CurrencyNames_fr_BI extends CombineTypes<[_CurrencyNames_fr_BI, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_fr_CA$$static extends ClassLike {
              new(): CurrencyNames_fr_CA;
            }
            let CurrencyNames_fr_CA: _CurrencyNames_fr_CA$$static;
            interface _CurrencyNames_fr_CA {
              _getContents(): any[][];
            }
            interface CurrencyNames_fr_CA extends CombineTypes<[_CurrencyNames_fr_CA, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_fr_CD$$static extends ClassLike {
              new(): CurrencyNames_fr_CD;
            }
            let CurrencyNames_fr_CD: _CurrencyNames_fr_CD$$static;
            interface _CurrencyNames_fr_CD {
              _getContents(): any[][];
            }
            interface CurrencyNames_fr_CD extends CombineTypes<[_CurrencyNames_fr_CD, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_fr_DJ$$static extends ClassLike {
              new(): CurrencyNames_fr_DJ;
            }
            let CurrencyNames_fr_DJ: _CurrencyNames_fr_DJ$$static;
            interface _CurrencyNames_fr_DJ {
              _getContents(): any[][];
            }
            interface CurrencyNames_fr_DJ extends CombineTypes<[_CurrencyNames_fr_DJ, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_fr_DZ$$static extends ClassLike {
              new(): CurrencyNames_fr_DZ;
            }
            let CurrencyNames_fr_DZ: _CurrencyNames_fr_DZ$$static;
            interface _CurrencyNames_fr_DZ {
              _getContents(): any[][];
            }
            interface CurrencyNames_fr_DZ extends CombineTypes<[_CurrencyNames_fr_DZ, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_fr_GN$$static extends ClassLike {
              new(): CurrencyNames_fr_GN;
            }
            let CurrencyNames_fr_GN: _CurrencyNames_fr_GN$$static;
            interface _CurrencyNames_fr_GN {
              _getContents(): any[][];
            }
            interface CurrencyNames_fr_GN extends CombineTypes<[_CurrencyNames_fr_GN, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_fr_HT$$static extends ClassLike {
              new(): CurrencyNames_fr_HT;
            }
            let CurrencyNames_fr_HT: _CurrencyNames_fr_HT$$static;
            interface _CurrencyNames_fr_HT {
              _getContents(): any[][];
            }
            interface CurrencyNames_fr_HT extends CombineTypes<[_CurrencyNames_fr_HT, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_fr_KM$$static extends ClassLike {
              new(): CurrencyNames_fr_KM;
            }
            let CurrencyNames_fr_KM: _CurrencyNames_fr_KM$$static;
            interface _CurrencyNames_fr_KM {
              _getContents(): any[][];
            }
            interface CurrencyNames_fr_KM extends CombineTypes<[_CurrencyNames_fr_KM, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_fr_LU$$static extends ClassLike {
              new(): CurrencyNames_fr_LU;
            }
            let CurrencyNames_fr_LU: _CurrencyNames_fr_LU$$static;
            interface _CurrencyNames_fr_LU {
              _getContents(): any[][];
            }
            interface CurrencyNames_fr_LU extends CombineTypes<[_CurrencyNames_fr_LU, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_fr_MG$$static extends ClassLike {
              new(): CurrencyNames_fr_MG;
            }
            let CurrencyNames_fr_MG: _CurrencyNames_fr_MG$$static;
            interface _CurrencyNames_fr_MG {
              _getContents(): any[][];
            }
            interface CurrencyNames_fr_MG extends CombineTypes<[_CurrencyNames_fr_MG, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_fr_MR$$static extends ClassLike {
              new(): CurrencyNames_fr_MR;
            }
            let CurrencyNames_fr_MR: _CurrencyNames_fr_MR$$static;
            interface _CurrencyNames_fr_MR {
              _getContents(): any[][];
            }
            interface CurrencyNames_fr_MR extends CombineTypes<[_CurrencyNames_fr_MR, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_fr_MU$$static extends ClassLike {
              new(): CurrencyNames_fr_MU;
            }
            let CurrencyNames_fr_MU: _CurrencyNames_fr_MU$$static;
            interface _CurrencyNames_fr_MU {
              _getContents(): any[][];
            }
            interface CurrencyNames_fr_MU extends CombineTypes<[_CurrencyNames_fr_MU, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_fr_RW$$static extends ClassLike {
              new(): CurrencyNames_fr_RW;
            }
            let CurrencyNames_fr_RW: _CurrencyNames_fr_RW$$static;
            interface _CurrencyNames_fr_RW {
              _getContents(): any[][];
            }
            interface CurrencyNames_fr_RW extends CombineTypes<[_CurrencyNames_fr_RW, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_fr_SC$$static extends ClassLike {
              new(): CurrencyNames_fr_SC;
            }
            let CurrencyNames_fr_SC: _CurrencyNames_fr_SC$$static;
            interface _CurrencyNames_fr_SC {
              _getContents(): any[][];
            }
            interface CurrencyNames_fr_SC extends CombineTypes<[_CurrencyNames_fr_SC, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_fr_SY$$static extends ClassLike {
              new(): CurrencyNames_fr_SY;
            }
            let CurrencyNames_fr_SY: _CurrencyNames_fr_SY$$static;
            interface _CurrencyNames_fr_SY {
              _getContents(): any[][];
            }
            interface CurrencyNames_fr_SY extends CombineTypes<[_CurrencyNames_fr_SY, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_fr_TN$$static extends ClassLike {
              new(): CurrencyNames_fr_TN;
            }
            let CurrencyNames_fr_TN: _CurrencyNames_fr_TN$$static;
            interface _CurrencyNames_fr_TN {
              _getContents(): any[][];
            }
            interface CurrencyNames_fr_TN extends CombineTypes<[_CurrencyNames_fr_TN, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_fr_VU$$static extends ClassLike {
              new(): CurrencyNames_fr_VU;
            }
            let CurrencyNames_fr_VU: _CurrencyNames_fr_VU$$static;
            interface _CurrencyNames_fr_VU {
              _getContents(): any[][];
            }
            interface CurrencyNames_fr_VU extends CombineTypes<[_CurrencyNames_fr_VU, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_fur$$static extends ClassLike {
              new(): CurrencyNames_fur;
            }
            let CurrencyNames_fur: _CurrencyNames_fur$$static;
            interface _CurrencyNames_fur {
              _getContents(): any[][];
            }
            interface CurrencyNames_fur extends CombineTypes<[_CurrencyNames_fur, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_fy$$static extends ClassLike {
              new(): CurrencyNames_fy;
            }
            let CurrencyNames_fy: _CurrencyNames_fy$$static;
            interface _CurrencyNames_fy {
              _getContents(): any[][];
            }
            interface CurrencyNames_fy extends CombineTypes<[_CurrencyNames_fy, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ga$$static extends ClassLike {
              new(): CurrencyNames_ga;
            }
            let CurrencyNames_ga: _CurrencyNames_ga$$static;
            interface _CurrencyNames_ga {
              _getContents(): any[][];
            }
            interface CurrencyNames_ga extends CombineTypes<[_CurrencyNames_ga, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_gd$$static extends ClassLike {
              new(): CurrencyNames_gd;
            }
            let CurrencyNames_gd: _CurrencyNames_gd$$static;
            interface _CurrencyNames_gd {
              _getContents(): any[][];
            }
            interface CurrencyNames_gd extends CombineTypes<[_CurrencyNames_gd, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_gl$$static extends ClassLike {
              new(): CurrencyNames_gl;
            }
            let CurrencyNames_gl: _CurrencyNames_gl$$static;
            interface _CurrencyNames_gl {
              _getContents(): any[][];
            }
            interface CurrencyNames_gl extends CombineTypes<[_CurrencyNames_gl, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_gsw$$static extends ClassLike {
              new(): CurrencyNames_gsw;
            }
            let CurrencyNames_gsw: _CurrencyNames_gsw$$static;
            interface _CurrencyNames_gsw {
              _getContents(): any[][];
            }
            interface CurrencyNames_gsw extends CombineTypes<[_CurrencyNames_gsw, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_gu$$static extends ClassLike {
              new(): CurrencyNames_gu;
            }
            let CurrencyNames_gu: _CurrencyNames_gu$$static;
            interface _CurrencyNames_gu {
              _getContents(): any[][];
            }
            interface CurrencyNames_gu extends CombineTypes<[_CurrencyNames_gu, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_guz$$static extends ClassLike {
              new(): CurrencyNames_guz;
            }
            let CurrencyNames_guz: _CurrencyNames_guz$$static;
            interface _CurrencyNames_guz {
              _getContents(): any[][];
            }
            interface CurrencyNames_guz extends CombineTypes<[_CurrencyNames_guz, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ha$$static extends ClassLike {
              new(): CurrencyNames_ha;
            }
            let CurrencyNames_ha: _CurrencyNames_ha$$static;
            interface _CurrencyNames_ha {
              _getContents(): any[][];
            }
            interface CurrencyNames_ha extends CombineTypes<[_CurrencyNames_ha, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ha_GH$$static extends ClassLike {
              new(): CurrencyNames_ha_GH;
            }
            let CurrencyNames_ha_GH: _CurrencyNames_ha_GH$$static;
            interface _CurrencyNames_ha_GH {
              _getContents(): any[][];
            }
            interface CurrencyNames_ha_GH extends CombineTypes<[_CurrencyNames_ha_GH, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_haw$$static extends ClassLike {
              new(): CurrencyNames_haw;
            }
            let CurrencyNames_haw: _CurrencyNames_haw$$static;
            interface _CurrencyNames_haw {
              _getContents(): any[][];
            }
            interface CurrencyNames_haw extends CombineTypes<[_CurrencyNames_haw, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_he$$static extends ClassLike {
              new(): CurrencyNames_he;
            }
            let CurrencyNames_he: _CurrencyNames_he$$static;
            interface _CurrencyNames_he {
              _getContents(): any[][];
            }
            interface CurrencyNames_he extends CombineTypes<[_CurrencyNames_he, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_hi$$static extends ClassLike {
              new(): CurrencyNames_hi;
            }
            let CurrencyNames_hi: _CurrencyNames_hi$$static;
            interface _CurrencyNames_hi {
              _getContents(): any[][];
            }
            interface CurrencyNames_hi extends CombineTypes<[_CurrencyNames_hi, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_hi_Latn$$static extends ClassLike {
              new(): CurrencyNames_hi_Latn;
            }
            let CurrencyNames_hi_Latn: _CurrencyNames_hi_Latn$$static;
            interface _CurrencyNames_hi_Latn {
              _getContents(): any[][];
            }
            interface CurrencyNames_hi_Latn extends CombineTypes<[_CurrencyNames_hi_Latn, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_hr$$static extends ClassLike {
              new(): CurrencyNames_hr;
            }
            let CurrencyNames_hr: _CurrencyNames_hr$$static;
            interface _CurrencyNames_hr {
              _getContents(): any[][];
            }
            interface CurrencyNames_hr extends CombineTypes<[_CurrencyNames_hr, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_hr_BA$$static extends ClassLike {
              new(): CurrencyNames_hr_BA;
            }
            let CurrencyNames_hr_BA: _CurrencyNames_hr_BA$$static;
            interface _CurrencyNames_hr_BA {
              _getContents(): any[][];
            }
            interface CurrencyNames_hr_BA extends CombineTypes<[_CurrencyNames_hr_BA, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_hsb$$static extends ClassLike {
              new(): CurrencyNames_hsb;
            }
            let CurrencyNames_hsb: _CurrencyNames_hsb$$static;
            interface _CurrencyNames_hsb {
              _getContents(): any[][];
            }
            interface CurrencyNames_hsb extends CombineTypes<[_CurrencyNames_hsb, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_hu$$static extends ClassLike {
              new(): CurrencyNames_hu;
            }
            let CurrencyNames_hu: _CurrencyNames_hu$$static;
            interface _CurrencyNames_hu {
              _getContents(): any[][];
            }
            interface CurrencyNames_hu extends CombineTypes<[_CurrencyNames_hu, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_hy$$static extends ClassLike {
              new(): CurrencyNames_hy;
            }
            let CurrencyNames_hy: _CurrencyNames_hy$$static;
            interface _CurrencyNames_hy {
              _getContents(): any[][];
            }
            interface CurrencyNames_hy extends CombineTypes<[_CurrencyNames_hy, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ia$$static extends ClassLike {
              new(): CurrencyNames_ia;
            }
            let CurrencyNames_ia: _CurrencyNames_ia$$static;
            interface _CurrencyNames_ia {
              _getContents(): any[][];
            }
            interface CurrencyNames_ia extends CombineTypes<[_CurrencyNames_ia, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_id$$static extends ClassLike {
              new(): CurrencyNames_id;
            }
            let CurrencyNames_id: _CurrencyNames_id$$static;
            interface _CurrencyNames_id {
              _getContents(): any[][];
            }
            interface CurrencyNames_id extends CombineTypes<[_CurrencyNames_id, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ig$$static extends ClassLike {
              new(): CurrencyNames_ig;
            }
            let CurrencyNames_ig: _CurrencyNames_ig$$static;
            interface _CurrencyNames_ig {
              _getContents(): any[][];
            }
            interface CurrencyNames_ig extends CombineTypes<[_CurrencyNames_ig, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ii$$static extends ClassLike {
              new(): CurrencyNames_ii;
            }
            let CurrencyNames_ii: _CurrencyNames_ii$$static;
            interface _CurrencyNames_ii {
              _getContents(): any[][];
            }
            interface CurrencyNames_ii extends CombineTypes<[_CurrencyNames_ii, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_is$$static extends ClassLike {
              new(): CurrencyNames_is;
            }
            let CurrencyNames_is: _CurrencyNames_is$$static;
            interface _CurrencyNames_is {
              _getContents(): any[][];
            }
            interface CurrencyNames_is extends CombineTypes<[_CurrencyNames_is, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_it$$static extends ClassLike {
              new(): CurrencyNames_it;
            }
            let CurrencyNames_it: _CurrencyNames_it$$static;
            interface _CurrencyNames_it {
              _getContents(): any[][];
            }
            interface CurrencyNames_it extends CombineTypes<[_CurrencyNames_it, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ja$$static extends ClassLike {
              new(): CurrencyNames_ja;
            }
            let CurrencyNames_ja: _CurrencyNames_ja$$static;
            interface _CurrencyNames_ja {
              _getContents(): any[][];
            }
            interface CurrencyNames_ja extends CombineTypes<[_CurrencyNames_ja, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_jgo$$static extends ClassLike {
              new(): CurrencyNames_jgo;
            }
            let CurrencyNames_jgo: _CurrencyNames_jgo$$static;
            interface _CurrencyNames_jgo {
              _getContents(): any[][];
            }
            interface CurrencyNames_jgo extends CombineTypes<[_CurrencyNames_jgo, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_jmc$$static extends ClassLike {
              new(): CurrencyNames_jmc;
            }
            let CurrencyNames_jmc: _CurrencyNames_jmc$$static;
            interface _CurrencyNames_jmc {
              _getContents(): any[][];
            }
            interface CurrencyNames_jmc extends CombineTypes<[_CurrencyNames_jmc, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_jv$$static extends ClassLike {
              new(): CurrencyNames_jv;
            }
            let CurrencyNames_jv: _CurrencyNames_jv$$static;
            interface _CurrencyNames_jv {
              _getContents(): any[][];
            }
            interface CurrencyNames_jv extends CombineTypes<[_CurrencyNames_jv, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ka$$static extends ClassLike {
              new(): CurrencyNames_ka;
            }
            let CurrencyNames_ka: _CurrencyNames_ka$$static;
            interface _CurrencyNames_ka {
              _getContents(): any[][];
            }
            interface CurrencyNames_ka extends CombineTypes<[_CurrencyNames_ka, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_kab$$static extends ClassLike {
              new(): CurrencyNames_kab;
            }
            let CurrencyNames_kab: _CurrencyNames_kab$$static;
            interface _CurrencyNames_kab {
              _getContents(): any[][];
            }
            interface CurrencyNames_kab extends CombineTypes<[_CurrencyNames_kab, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_kam$$static extends ClassLike {
              new(): CurrencyNames_kam;
            }
            let CurrencyNames_kam: _CurrencyNames_kam$$static;
            interface _CurrencyNames_kam {
              _getContents(): any[][];
            }
            interface CurrencyNames_kam extends CombineTypes<[_CurrencyNames_kam, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_kde$$static extends ClassLike {
              new(): CurrencyNames_kde;
            }
            let CurrencyNames_kde: _CurrencyNames_kde$$static;
            interface _CurrencyNames_kde {
              _getContents(): any[][];
            }
            interface CurrencyNames_kde extends CombineTypes<[_CurrencyNames_kde, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_kea$$static extends ClassLike {
              new(): CurrencyNames_kea;
            }
            let CurrencyNames_kea: _CurrencyNames_kea$$static;
            interface _CurrencyNames_kea {
              _getContents(): any[][];
            }
            interface CurrencyNames_kea extends CombineTypes<[_CurrencyNames_kea, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_kgp$$static extends ClassLike {
              new(): CurrencyNames_kgp;
            }
            let CurrencyNames_kgp: _CurrencyNames_kgp$$static;
            interface _CurrencyNames_kgp {
              _getContents(): any[][];
            }
            interface CurrencyNames_kgp extends CombineTypes<[_CurrencyNames_kgp, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_khq$$static extends ClassLike {
              new(): CurrencyNames_khq;
            }
            let CurrencyNames_khq: _CurrencyNames_khq$$static;
            interface _CurrencyNames_khq {
              _getContents(): any[][];
            }
            interface CurrencyNames_khq extends CombineTypes<[_CurrencyNames_khq, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ki$$static extends ClassLike {
              new(): CurrencyNames_ki;
            }
            let CurrencyNames_ki: _CurrencyNames_ki$$static;
            interface _CurrencyNames_ki {
              _getContents(): any[][];
            }
            interface CurrencyNames_ki extends CombineTypes<[_CurrencyNames_ki, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_kk$$static extends ClassLike {
              new(): CurrencyNames_kk;
            }
            let CurrencyNames_kk: _CurrencyNames_kk$$static;
            interface _CurrencyNames_kk {
              _getContents(): any[][];
            }
            interface CurrencyNames_kk extends CombineTypes<[_CurrencyNames_kk, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_kkj$$static extends ClassLike {
              new(): CurrencyNames_kkj;
            }
            let CurrencyNames_kkj: _CurrencyNames_kkj$$static;
            interface _CurrencyNames_kkj {
              _getContents(): any[][];
            }
            interface CurrencyNames_kkj extends CombineTypes<[_CurrencyNames_kkj, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_kl$$static extends ClassLike {
              new(): CurrencyNames_kl;
            }
            let CurrencyNames_kl: _CurrencyNames_kl$$static;
            interface _CurrencyNames_kl {
              _getContents(): any[][];
            }
            interface CurrencyNames_kl extends CombineTypes<[_CurrencyNames_kl, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_kln$$static extends ClassLike {
              new(): CurrencyNames_kln;
            }
            let CurrencyNames_kln: _CurrencyNames_kln$$static;
            interface _CurrencyNames_kln {
              _getContents(): any[][];
            }
            interface CurrencyNames_kln extends CombineTypes<[_CurrencyNames_kln, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_km$$static extends ClassLike {
              new(): CurrencyNames_km;
            }
            let CurrencyNames_km: _CurrencyNames_km$$static;
            interface _CurrencyNames_km {
              _getContents(): any[][];
            }
            interface CurrencyNames_km extends CombineTypes<[_CurrencyNames_km, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_kn$$static extends ClassLike {
              new(): CurrencyNames_kn;
            }
            let CurrencyNames_kn: _CurrencyNames_kn$$static;
            interface _CurrencyNames_kn {
              _getContents(): any[][];
            }
            interface CurrencyNames_kn extends CombineTypes<[_CurrencyNames_kn, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ko$$static extends ClassLike {
              new(): CurrencyNames_ko;
            }
            let CurrencyNames_ko: _CurrencyNames_ko$$static;
            interface _CurrencyNames_ko {
              _getContents(): any[][];
            }
            interface CurrencyNames_ko extends CombineTypes<[_CurrencyNames_ko, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_kok$$static extends ClassLike {
              new(): CurrencyNames_kok;
            }
            let CurrencyNames_kok: _CurrencyNames_kok$$static;
            interface _CurrencyNames_kok {
              _getContents(): any[][];
            }
            interface CurrencyNames_kok extends CombineTypes<[_CurrencyNames_kok, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ks$$static extends ClassLike {
              new(): CurrencyNames_ks;
            }
            let CurrencyNames_ks: _CurrencyNames_ks$$static;
            interface _CurrencyNames_ks {
              _getContents(): any[][];
            }
            interface CurrencyNames_ks extends CombineTypes<[_CurrencyNames_ks, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ks_Deva$$static extends ClassLike {
              new(): CurrencyNames_ks_Deva;
            }
            let CurrencyNames_ks_Deva: _CurrencyNames_ks_Deva$$static;
            interface _CurrencyNames_ks_Deva {
              _getContents(): any[][];
            }
            interface CurrencyNames_ks_Deva extends CombineTypes<[_CurrencyNames_ks_Deva, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ksb$$static extends ClassLike {
              new(): CurrencyNames_ksb;
            }
            let CurrencyNames_ksb: _CurrencyNames_ksb$$static;
            interface _CurrencyNames_ksb {
              _getContents(): any[][];
            }
            interface CurrencyNames_ksb extends CombineTypes<[_CurrencyNames_ksb, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ksf$$static extends ClassLike {
              new(): CurrencyNames_ksf;
            }
            let CurrencyNames_ksf: _CurrencyNames_ksf$$static;
            interface _CurrencyNames_ksf {
              _getContents(): any[][];
            }
            interface CurrencyNames_ksf extends CombineTypes<[_CurrencyNames_ksf, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ksh$$static extends ClassLike {
              new(): CurrencyNames_ksh;
            }
            let CurrencyNames_ksh: _CurrencyNames_ksh$$static;
            interface _CurrencyNames_ksh {
              _getContents(): any[][];
            }
            interface CurrencyNames_ksh extends CombineTypes<[_CurrencyNames_ksh, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ku$$static extends ClassLike {
              new(): CurrencyNames_ku;
            }
            let CurrencyNames_ku: _CurrencyNames_ku$$static;
            interface _CurrencyNames_ku {
              _getContents(): any[][];
            }
            interface CurrencyNames_ku extends CombineTypes<[_CurrencyNames_ku, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ky$$static extends ClassLike {
              new(): CurrencyNames_ky;
            }
            let CurrencyNames_ky: _CurrencyNames_ky$$static;
            interface _CurrencyNames_ky {
              _getContents(): any[][];
            }
            interface CurrencyNames_ky extends CombineTypes<[_CurrencyNames_ky, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_lag$$static extends ClassLike {
              new(): CurrencyNames_lag;
            }
            let CurrencyNames_lag: _CurrencyNames_lag$$static;
            interface _CurrencyNames_lag {
              _getContents(): any[][];
            }
            interface CurrencyNames_lag extends CombineTypes<[_CurrencyNames_lag, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_lb$$static extends ClassLike {
              new(): CurrencyNames_lb;
            }
            let CurrencyNames_lb: _CurrencyNames_lb$$static;
            interface _CurrencyNames_lb {
              _getContents(): any[][];
            }
            interface CurrencyNames_lb extends CombineTypes<[_CurrencyNames_lb, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_lg$$static extends ClassLike {
              new(): CurrencyNames_lg;
            }
            let CurrencyNames_lg: _CurrencyNames_lg$$static;
            interface _CurrencyNames_lg {
              _getContents(): any[][];
            }
            interface CurrencyNames_lg extends CombineTypes<[_CurrencyNames_lg, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_lkt$$static extends ClassLike {
              new(): CurrencyNames_lkt;
            }
            let CurrencyNames_lkt: _CurrencyNames_lkt$$static;
            interface _CurrencyNames_lkt {
              _getContents(): any[][];
            }
            interface CurrencyNames_lkt extends CombineTypes<[_CurrencyNames_lkt, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ln$$static extends ClassLike {
              new(): CurrencyNames_ln;
            }
            let CurrencyNames_ln: _CurrencyNames_ln$$static;
            interface _CurrencyNames_ln {
              _getContents(): any[][];
            }
            interface CurrencyNames_ln extends CombineTypes<[_CurrencyNames_ln, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ln_AO$$static extends ClassLike {
              new(): CurrencyNames_ln_AO;
            }
            let CurrencyNames_ln_AO: _CurrencyNames_ln_AO$$static;
            interface _CurrencyNames_ln_AO {
              _getContents(): any[][];
            }
            interface CurrencyNames_ln_AO extends CombineTypes<[_CurrencyNames_ln_AO, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_lo$$static extends ClassLike {
              new(): CurrencyNames_lo;
            }
            let CurrencyNames_lo: _CurrencyNames_lo$$static;
            interface _CurrencyNames_lo {
              _getContents(): any[][];
            }
            interface CurrencyNames_lo extends CombineTypes<[_CurrencyNames_lo, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_lrc$$static extends ClassLike {
              new(): CurrencyNames_lrc;
            }
            let CurrencyNames_lrc: _CurrencyNames_lrc$$static;
            interface _CurrencyNames_lrc {
              _getContents(): any[][];
            }
            interface CurrencyNames_lrc extends CombineTypes<[_CurrencyNames_lrc, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_lt$$static extends ClassLike {
              new(): CurrencyNames_lt;
            }
            let CurrencyNames_lt: _CurrencyNames_lt$$static;
            interface _CurrencyNames_lt {
              _getContents(): any[][];
            }
            interface CurrencyNames_lt extends CombineTypes<[_CurrencyNames_lt, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_lu$$static extends ClassLike {
              new(): CurrencyNames_lu;
            }
            let CurrencyNames_lu: _CurrencyNames_lu$$static;
            interface _CurrencyNames_lu {
              _getContents(): any[][];
            }
            interface CurrencyNames_lu extends CombineTypes<[_CurrencyNames_lu, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_luo$$static extends ClassLike {
              new(): CurrencyNames_luo;
            }
            let CurrencyNames_luo: _CurrencyNames_luo$$static;
            interface _CurrencyNames_luo {
              _getContents(): any[][];
            }
            interface CurrencyNames_luo extends CombineTypes<[_CurrencyNames_luo, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_luy$$static extends ClassLike {
              new(): CurrencyNames_luy;
            }
            let CurrencyNames_luy: _CurrencyNames_luy$$static;
            interface _CurrencyNames_luy {
              _getContents(): any[][];
            }
            interface CurrencyNames_luy extends CombineTypes<[_CurrencyNames_luy, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_lv$$static extends ClassLike {
              new(): CurrencyNames_lv;
            }
            let CurrencyNames_lv: _CurrencyNames_lv$$static;
            interface _CurrencyNames_lv {
              _getContents(): any[][];
            }
            interface CurrencyNames_lv extends CombineTypes<[_CurrencyNames_lv, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_mai$$static extends ClassLike {
              new(): CurrencyNames_mai;
            }
            let CurrencyNames_mai: _CurrencyNames_mai$$static;
            interface _CurrencyNames_mai {
              _getContents(): any[][];
            }
            interface CurrencyNames_mai extends CombineTypes<[_CurrencyNames_mai, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_mas$$static extends ClassLike {
              new(): CurrencyNames_mas;
            }
            let CurrencyNames_mas: _CurrencyNames_mas$$static;
            interface _CurrencyNames_mas {
              _getContents(): any[][];
            }
            interface CurrencyNames_mas extends CombineTypes<[_CurrencyNames_mas, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_mas_TZ$$static extends ClassLike {
              new(): CurrencyNames_mas_TZ;
            }
            let CurrencyNames_mas_TZ: _CurrencyNames_mas_TZ$$static;
            interface _CurrencyNames_mas_TZ {
              _getContents(): any[][];
            }
            interface CurrencyNames_mas_TZ extends CombineTypes<[_CurrencyNames_mas_TZ, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_mdf$$static extends ClassLike {
              new(): CurrencyNames_mdf;
            }
            let CurrencyNames_mdf: _CurrencyNames_mdf$$static;
            interface _CurrencyNames_mdf {
              _getContents(): any[][];
            }
            interface CurrencyNames_mdf extends CombineTypes<[_CurrencyNames_mdf, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_mer$$static extends ClassLike {
              new(): CurrencyNames_mer;
            }
            let CurrencyNames_mer: _CurrencyNames_mer$$static;
            interface _CurrencyNames_mer {
              _getContents(): any[][];
            }
            interface CurrencyNames_mer extends CombineTypes<[_CurrencyNames_mer, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_mfe$$static extends ClassLike {
              new(): CurrencyNames_mfe;
            }
            let CurrencyNames_mfe: _CurrencyNames_mfe$$static;
            interface _CurrencyNames_mfe {
              _getContents(): any[][];
            }
            interface CurrencyNames_mfe extends CombineTypes<[_CurrencyNames_mfe, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_mg$$static extends ClassLike {
              new(): CurrencyNames_mg;
            }
            let CurrencyNames_mg: _CurrencyNames_mg$$static;
            interface _CurrencyNames_mg {
              _getContents(): any[][];
            }
            interface CurrencyNames_mg extends CombineTypes<[_CurrencyNames_mg, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_mgh$$static extends ClassLike {
              new(): CurrencyNames_mgh;
            }
            let CurrencyNames_mgh: _CurrencyNames_mgh$$static;
            interface _CurrencyNames_mgh {
              _getContents(): any[][];
            }
            interface CurrencyNames_mgh extends CombineTypes<[_CurrencyNames_mgh, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_mgo$$static extends ClassLike {
              new(): CurrencyNames_mgo;
            }
            let CurrencyNames_mgo: _CurrencyNames_mgo$$static;
            interface _CurrencyNames_mgo {
              _getContents(): any[][];
            }
            interface CurrencyNames_mgo extends CombineTypes<[_CurrencyNames_mgo, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_mi$$static extends ClassLike {
              new(): CurrencyNames_mi;
            }
            let CurrencyNames_mi: _CurrencyNames_mi$$static;
            interface _CurrencyNames_mi {
              _getContents(): any[][];
            }
            interface CurrencyNames_mi extends CombineTypes<[_CurrencyNames_mi, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_mk$$static extends ClassLike {
              new(): CurrencyNames_mk;
            }
            let CurrencyNames_mk: _CurrencyNames_mk$$static;
            interface _CurrencyNames_mk {
              _getContents(): any[][];
            }
            interface CurrencyNames_mk extends CombineTypes<[_CurrencyNames_mk, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ml$$static extends ClassLike {
              new(): CurrencyNames_ml;
            }
            let CurrencyNames_ml: _CurrencyNames_ml$$static;
            interface _CurrencyNames_ml {
              _getContents(): any[][];
            }
            interface CurrencyNames_ml extends CombineTypes<[_CurrencyNames_ml, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_mn$$static extends ClassLike {
              new(): CurrencyNames_mn;
            }
            let CurrencyNames_mn: _CurrencyNames_mn$$static;
            interface _CurrencyNames_mn {
              _getContents(): any[][];
            }
            interface CurrencyNames_mn extends CombineTypes<[_CurrencyNames_mn, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_mni$$static extends ClassLike {
              new(): CurrencyNames_mni;
            }
            let CurrencyNames_mni: _CurrencyNames_mni$$static;
            interface _CurrencyNames_mni {
              _getContents(): any[][];
            }
            interface CurrencyNames_mni extends CombineTypes<[_CurrencyNames_mni, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_mr$$static extends ClassLike {
              new(): CurrencyNames_mr;
            }
            let CurrencyNames_mr: _CurrencyNames_mr$$static;
            interface _CurrencyNames_mr {
              _getContents(): any[][];
            }
            interface CurrencyNames_mr extends CombineTypes<[_CurrencyNames_mr, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ms$$static extends ClassLike {
              new(): CurrencyNames_ms;
            }
            let CurrencyNames_ms: _CurrencyNames_ms$$static;
            interface _CurrencyNames_ms {
              _getContents(): any[][];
            }
            interface CurrencyNames_ms extends CombineTypes<[_CurrencyNames_ms, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ms_BN$$static extends ClassLike {
              new(): CurrencyNames_ms_BN;
            }
            let CurrencyNames_ms_BN: _CurrencyNames_ms_BN$$static;
            interface _CurrencyNames_ms_BN {
              _getContents(): any[][];
            }
            interface CurrencyNames_ms_BN extends CombineTypes<[_CurrencyNames_ms_BN, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ms_ID$$static extends ClassLike {
              new(): CurrencyNames_ms_ID;
            }
            let CurrencyNames_ms_ID: _CurrencyNames_ms_ID$$static;
            interface _CurrencyNames_ms_ID {
              _getContents(): any[][];
            }
            interface CurrencyNames_ms_ID extends CombineTypes<[_CurrencyNames_ms_ID, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ms_SG$$static extends ClassLike {
              new(): CurrencyNames_ms_SG;
            }
            let CurrencyNames_ms_SG: _CurrencyNames_ms_SG$$static;
            interface _CurrencyNames_ms_SG {
              _getContents(): any[][];
            }
            interface CurrencyNames_ms_SG extends CombineTypes<[_CurrencyNames_ms_SG, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_mt$$static extends ClassLike {
              new(): CurrencyNames_mt;
            }
            let CurrencyNames_mt: _CurrencyNames_mt$$static;
            interface _CurrencyNames_mt {
              _getContents(): any[][];
            }
            interface CurrencyNames_mt extends CombineTypes<[_CurrencyNames_mt, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_mua$$static extends ClassLike {
              new(): CurrencyNames_mua;
            }
            let CurrencyNames_mua: _CurrencyNames_mua$$static;
            interface _CurrencyNames_mua {
              _getContents(): any[][];
            }
            interface CurrencyNames_mua extends CombineTypes<[_CurrencyNames_mua, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_my$$static extends ClassLike {
              new(): CurrencyNames_my;
            }
            let CurrencyNames_my: _CurrencyNames_my$$static;
            interface _CurrencyNames_my {
              _getContents(): any[][];
            }
            interface CurrencyNames_my extends CombineTypes<[_CurrencyNames_my, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_mzn$$static extends ClassLike {
              new(): CurrencyNames_mzn;
            }
            let CurrencyNames_mzn: _CurrencyNames_mzn$$static;
            interface _CurrencyNames_mzn {
              _getContents(): any[][];
            }
            interface CurrencyNames_mzn extends CombineTypes<[_CurrencyNames_mzn, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_naq$$static extends ClassLike {
              new(): CurrencyNames_naq;
            }
            let CurrencyNames_naq: _CurrencyNames_naq$$static;
            interface _CurrencyNames_naq {
              _getContents(): any[][];
            }
            interface CurrencyNames_naq extends CombineTypes<[_CurrencyNames_naq, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_nd$$static extends ClassLike {
              new(): CurrencyNames_nd;
            }
            let CurrencyNames_nd: _CurrencyNames_nd$$static;
            interface _CurrencyNames_nd {
              _getContents(): any[][];
            }
            interface CurrencyNames_nd extends CombineTypes<[_CurrencyNames_nd, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ne$$static extends ClassLike {
              new(): CurrencyNames_ne;
            }
            let CurrencyNames_ne: _CurrencyNames_ne$$static;
            interface _CurrencyNames_ne {
              _getContents(): any[][];
            }
            interface CurrencyNames_ne extends CombineTypes<[_CurrencyNames_ne, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_nl$$static extends ClassLike {
              new(): CurrencyNames_nl;
            }
            let CurrencyNames_nl: _CurrencyNames_nl$$static;
            interface _CurrencyNames_nl {
              _getContents(): any[][];
            }
            interface CurrencyNames_nl extends CombineTypes<[_CurrencyNames_nl, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_nl_AW$$static extends ClassLike {
              new(): CurrencyNames_nl_AW;
            }
            let CurrencyNames_nl_AW: _CurrencyNames_nl_AW$$static;
            interface _CurrencyNames_nl_AW {
              _getContents(): any[][];
            }
            interface CurrencyNames_nl_AW extends CombineTypes<[_CurrencyNames_nl_AW, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_nl_BQ$$static extends ClassLike {
              new(): CurrencyNames_nl_BQ;
            }
            let CurrencyNames_nl_BQ: _CurrencyNames_nl_BQ$$static;
            interface _CurrencyNames_nl_BQ {
              _getContents(): any[][];
            }
            interface CurrencyNames_nl_BQ extends CombineTypes<[_CurrencyNames_nl_BQ, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_nl_CW$$static extends ClassLike {
              new(): CurrencyNames_nl_CW;
            }
            let CurrencyNames_nl_CW: _CurrencyNames_nl_CW$$static;
            interface _CurrencyNames_nl_CW {
              _getContents(): any[][];
            }
            interface CurrencyNames_nl_CW extends CombineTypes<[_CurrencyNames_nl_CW, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_nl_SR$$static extends ClassLike {
              new(): CurrencyNames_nl_SR;
            }
            let CurrencyNames_nl_SR: _CurrencyNames_nl_SR$$static;
            interface _CurrencyNames_nl_SR {
              _getContents(): any[][];
            }
            interface CurrencyNames_nl_SR extends CombineTypes<[_CurrencyNames_nl_SR, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_nl_SX$$static extends ClassLike {
              new(): CurrencyNames_nl_SX;
            }
            let CurrencyNames_nl_SX: _CurrencyNames_nl_SX$$static;
            interface _CurrencyNames_nl_SX {
              _getContents(): any[][];
            }
            interface CurrencyNames_nl_SX extends CombineTypes<[_CurrencyNames_nl_SX, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_nmg$$static extends ClassLike {
              new(): CurrencyNames_nmg;
            }
            let CurrencyNames_nmg: _CurrencyNames_nmg$$static;
            interface _CurrencyNames_nmg {
              _getContents(): any[][];
            }
            interface CurrencyNames_nmg extends CombineTypes<[_CurrencyNames_nmg, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_nn$$static extends ClassLike {
              new(): CurrencyNames_nn;
            }
            let CurrencyNames_nn: _CurrencyNames_nn$$static;
            interface _CurrencyNames_nn {
              _getContents(): any[][];
            }
            interface CurrencyNames_nn extends CombineTypes<[_CurrencyNames_nn, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_nnh$$static extends ClassLike {
              new(): CurrencyNames_nnh;
            }
            let CurrencyNames_nnh: _CurrencyNames_nnh$$static;
            interface _CurrencyNames_nnh {
              _getContents(): any[][];
            }
            interface CurrencyNames_nnh extends CombineTypes<[_CurrencyNames_nnh, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_no$$static extends ClassLike {
              new(): CurrencyNames_no;
            }
            let CurrencyNames_no: _CurrencyNames_no$$static;
            interface _CurrencyNames_no {
              _getContents(): any[][];
            }
            interface CurrencyNames_no extends CombineTypes<[_CurrencyNames_no, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_nus$$static extends ClassLike {
              new(): CurrencyNames_nus;
            }
            let CurrencyNames_nus: _CurrencyNames_nus$$static;
            interface _CurrencyNames_nus {
              _getContents(): any[][];
            }
            interface CurrencyNames_nus extends CombineTypes<[_CurrencyNames_nus, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_nyn$$static extends ClassLike {
              new(): CurrencyNames_nyn;
            }
            let CurrencyNames_nyn: _CurrencyNames_nyn$$static;
            interface _CurrencyNames_nyn {
              _getContents(): any[][];
            }
            interface CurrencyNames_nyn extends CombineTypes<[_CurrencyNames_nyn, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_om$$static extends ClassLike {
              new(): CurrencyNames_om;
            }
            let CurrencyNames_om: _CurrencyNames_om$$static;
            interface _CurrencyNames_om {
              _getContents(): any[][];
            }
            interface CurrencyNames_om extends CombineTypes<[_CurrencyNames_om, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_om_KE$$static extends ClassLike {
              new(): CurrencyNames_om_KE;
            }
            let CurrencyNames_om_KE: _CurrencyNames_om_KE$$static;
            interface _CurrencyNames_om_KE {
              _getContents(): any[][];
            }
            interface CurrencyNames_om_KE extends CombineTypes<[_CurrencyNames_om_KE, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_or$$static extends ClassLike {
              new(): CurrencyNames_or;
            }
            let CurrencyNames_or: _CurrencyNames_or$$static;
            interface _CurrencyNames_or {
              _getContents(): any[][];
            }
            interface CurrencyNames_or extends CombineTypes<[_CurrencyNames_or, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_os$$static extends ClassLike {
              new(): CurrencyNames_os;
            }
            let CurrencyNames_os: _CurrencyNames_os$$static;
            interface _CurrencyNames_os {
              _getContents(): any[][];
            }
            interface CurrencyNames_os extends CombineTypes<[_CurrencyNames_os, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_os_RU$$static extends ClassLike {
              new(): CurrencyNames_os_RU;
            }
            let CurrencyNames_os_RU: _CurrencyNames_os_RU$$static;
            interface _CurrencyNames_os_RU {
              _getContents(): any[][];
            }
            interface CurrencyNames_os_RU extends CombineTypes<[_CurrencyNames_os_RU, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_pa$$static extends ClassLike {
              new(): CurrencyNames_pa;
            }
            let CurrencyNames_pa: _CurrencyNames_pa$$static;
            interface _CurrencyNames_pa {
              _getContents(): any[][];
            }
            interface CurrencyNames_pa extends CombineTypes<[_CurrencyNames_pa, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_pa_Arab$$static extends ClassLike {
              new(): CurrencyNames_pa_Arab;
            }
            let CurrencyNames_pa_Arab: _CurrencyNames_pa_Arab$$static;
            interface _CurrencyNames_pa_Arab {
              _getContents(): any[][];
            }
            interface CurrencyNames_pa_Arab extends CombineTypes<[_CurrencyNames_pa_Arab, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_pcm$$static extends ClassLike {
              new(): CurrencyNames_pcm;
            }
            let CurrencyNames_pcm: _CurrencyNames_pcm$$static;
            interface _CurrencyNames_pcm {
              _getContents(): any[][];
            }
            interface CurrencyNames_pcm extends CombineTypes<[_CurrencyNames_pcm, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_pis$$static extends ClassLike {
              new(): CurrencyNames_pis;
            }
            let CurrencyNames_pis: _CurrencyNames_pis$$static;
            interface _CurrencyNames_pis {
              _getContents(): any[][];
            }
            interface CurrencyNames_pis extends CombineTypes<[_CurrencyNames_pis, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_pl$$static extends ClassLike {
              new(): CurrencyNames_pl;
            }
            let CurrencyNames_pl: _CurrencyNames_pl$$static;
            interface _CurrencyNames_pl {
              _getContents(): any[][];
            }
            interface CurrencyNames_pl extends CombineTypes<[_CurrencyNames_pl, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ps$$static extends ClassLike {
              new(): CurrencyNames_ps;
            }
            let CurrencyNames_ps: _CurrencyNames_ps$$static;
            interface _CurrencyNames_ps {
              _getContents(): any[][];
            }
            interface CurrencyNames_ps extends CombineTypes<[_CurrencyNames_ps, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ps_PK$$static extends ClassLike {
              new(): CurrencyNames_ps_PK;
            }
            let CurrencyNames_ps_PK: _CurrencyNames_ps_PK$$static;
            interface _CurrencyNames_ps_PK {
              _getContents(): any[][];
            }
            interface CurrencyNames_ps_PK extends CombineTypes<[_CurrencyNames_ps_PK, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_pt$$static extends ClassLike {
              new(): CurrencyNames_pt;
            }
            let CurrencyNames_pt: _CurrencyNames_pt$$static;
            interface _CurrencyNames_pt {
              _getContents(): any[][];
            }
            interface CurrencyNames_pt extends CombineTypes<[_CurrencyNames_pt, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_pt_AO$$static extends ClassLike {
              new(): CurrencyNames_pt_AO;
            }
            let CurrencyNames_pt_AO: _CurrencyNames_pt_AO$$static;
            interface _CurrencyNames_pt_AO {
              _getContents(): any[][];
            }
            interface CurrencyNames_pt_AO extends CombineTypes<[_CurrencyNames_pt_AO, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_pt_CV$$static extends ClassLike {
              new(): CurrencyNames_pt_CV;
            }
            let CurrencyNames_pt_CV: _CurrencyNames_pt_CV$$static;
            interface _CurrencyNames_pt_CV {
              _getContents(): any[][];
            }
            interface CurrencyNames_pt_CV extends CombineTypes<[_CurrencyNames_pt_CV, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_pt_LU$$static extends ClassLike {
              new(): CurrencyNames_pt_LU;
            }
            let CurrencyNames_pt_LU: _CurrencyNames_pt_LU$$static;
            interface _CurrencyNames_pt_LU {
              _getContents(): any[][];
            }
            interface CurrencyNames_pt_LU extends CombineTypes<[_CurrencyNames_pt_LU, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_pt_MO$$static extends ClassLike {
              new(): CurrencyNames_pt_MO;
            }
            let CurrencyNames_pt_MO: _CurrencyNames_pt_MO$$static;
            interface _CurrencyNames_pt_MO {
              _getContents(): any[][];
            }
            interface CurrencyNames_pt_MO extends CombineTypes<[_CurrencyNames_pt_MO, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_pt_MZ$$static extends ClassLike {
              new(): CurrencyNames_pt_MZ;
            }
            let CurrencyNames_pt_MZ: _CurrencyNames_pt_MZ$$static;
            interface _CurrencyNames_pt_MZ {
              _getContents(): any[][];
            }
            interface CurrencyNames_pt_MZ extends CombineTypes<[_CurrencyNames_pt_MZ, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_pt_PT$$static extends ClassLike {
              new(): CurrencyNames_pt_PT;
            }
            let CurrencyNames_pt_PT: _CurrencyNames_pt_PT$$static;
            interface _CurrencyNames_pt_PT {
              _getContents(): any[][];
            }
            interface CurrencyNames_pt_PT extends CombineTypes<[_CurrencyNames_pt_PT, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_pt_ST$$static extends ClassLike {
              new(): CurrencyNames_pt_ST;
            }
            let CurrencyNames_pt_ST: _CurrencyNames_pt_ST$$static;
            interface _CurrencyNames_pt_ST {
              _getContents(): any[][];
            }
            interface CurrencyNames_pt_ST extends CombineTypes<[_CurrencyNames_pt_ST, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_qu$$static extends ClassLike {
              new(): CurrencyNames_qu;
            }
            let CurrencyNames_qu: _CurrencyNames_qu$$static;
            interface _CurrencyNames_qu {
              _getContents(): any[][];
            }
            interface CurrencyNames_qu extends CombineTypes<[_CurrencyNames_qu, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_qu_BO$$static extends ClassLike {
              new(): CurrencyNames_qu_BO;
            }
            let CurrencyNames_qu_BO: _CurrencyNames_qu_BO$$static;
            interface _CurrencyNames_qu_BO {
              _getContents(): any[][];
            }
            interface CurrencyNames_qu_BO extends CombineTypes<[_CurrencyNames_qu_BO, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_qu_EC$$static extends ClassLike {
              new(): CurrencyNames_qu_EC;
            }
            let CurrencyNames_qu_EC: _CurrencyNames_qu_EC$$static;
            interface _CurrencyNames_qu_EC {
              _getContents(): any[][];
            }
            interface CurrencyNames_qu_EC extends CombineTypes<[_CurrencyNames_qu_EC, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_rm$$static extends ClassLike {
              new(): CurrencyNames_rm;
            }
            let CurrencyNames_rm: _CurrencyNames_rm$$static;
            interface _CurrencyNames_rm {
              _getContents(): any[][];
            }
            interface CurrencyNames_rm extends CombineTypes<[_CurrencyNames_rm, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_rn$$static extends ClassLike {
              new(): CurrencyNames_rn;
            }
            let CurrencyNames_rn: _CurrencyNames_rn$$static;
            interface _CurrencyNames_rn {
              _getContents(): any[][];
            }
            interface CurrencyNames_rn extends CombineTypes<[_CurrencyNames_rn, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ro$$static extends ClassLike {
              new(): CurrencyNames_ro;
            }
            let CurrencyNames_ro: _CurrencyNames_ro$$static;
            interface _CurrencyNames_ro {
              _getContents(): any[][];
            }
            interface CurrencyNames_ro extends CombineTypes<[_CurrencyNames_ro, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ro_MD$$static extends ClassLike {
              new(): CurrencyNames_ro_MD;
            }
            let CurrencyNames_ro_MD: _CurrencyNames_ro_MD$$static;
            interface _CurrencyNames_ro_MD {
              _getContents(): any[][];
            }
            interface CurrencyNames_ro_MD extends CombineTypes<[_CurrencyNames_ro_MD, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_rof$$static extends ClassLike {
              new(): CurrencyNames_rof;
            }
            let CurrencyNames_rof: _CurrencyNames_rof$$static;
            interface _CurrencyNames_rof {
              _getContents(): any[][];
            }
            interface CurrencyNames_rof extends CombineTypes<[_CurrencyNames_rof, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ru$$static extends ClassLike {
              new(): CurrencyNames_ru;
            }
            let CurrencyNames_ru: _CurrencyNames_ru$$static;
            interface _CurrencyNames_ru {
              _getContents(): any[][];
            }
            interface CurrencyNames_ru extends CombineTypes<[_CurrencyNames_ru, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ru_BY$$static extends ClassLike {
              new(): CurrencyNames_ru_BY;
            }
            let CurrencyNames_ru_BY: _CurrencyNames_ru_BY$$static;
            interface _CurrencyNames_ru_BY {
              _getContents(): any[][];
            }
            interface CurrencyNames_ru_BY extends CombineTypes<[_CurrencyNames_ru_BY, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ru_KG$$static extends ClassLike {
              new(): CurrencyNames_ru_KG;
            }
            let CurrencyNames_ru_KG: _CurrencyNames_ru_KG$$static;
            interface _CurrencyNames_ru_KG {
              _getContents(): any[][];
            }
            interface CurrencyNames_ru_KG extends CombineTypes<[_CurrencyNames_ru_KG, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ru_KZ$$static extends ClassLike {
              new(): CurrencyNames_ru_KZ;
            }
            let CurrencyNames_ru_KZ: _CurrencyNames_ru_KZ$$static;
            interface _CurrencyNames_ru_KZ {
              _getContents(): any[][];
            }
            interface CurrencyNames_ru_KZ extends CombineTypes<[_CurrencyNames_ru_KZ, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ru_MD$$static extends ClassLike {
              new(): CurrencyNames_ru_MD;
            }
            let CurrencyNames_ru_MD: _CurrencyNames_ru_MD$$static;
            interface _CurrencyNames_ru_MD {
              _getContents(): any[][];
            }
            interface CurrencyNames_ru_MD extends CombineTypes<[_CurrencyNames_ru_MD, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_rw$$static extends ClassLike {
              new(): CurrencyNames_rw;
            }
            let CurrencyNames_rw: _CurrencyNames_rw$$static;
            interface _CurrencyNames_rw {
              _getContents(): any[][];
            }
            interface CurrencyNames_rw extends CombineTypes<[_CurrencyNames_rw, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_rwk$$static extends ClassLike {
              new(): CurrencyNames_rwk;
            }
            let CurrencyNames_rwk: _CurrencyNames_rwk$$static;
            interface _CurrencyNames_rwk {
              _getContents(): any[][];
            }
            interface CurrencyNames_rwk extends CombineTypes<[_CurrencyNames_rwk, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_sa$$static extends ClassLike {
              new(): CurrencyNames_sa;
            }
            let CurrencyNames_sa: _CurrencyNames_sa$$static;
            interface _CurrencyNames_sa {
              _getContents(): any[][];
            }
            interface CurrencyNames_sa extends CombineTypes<[_CurrencyNames_sa, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_sah$$static extends ClassLike {
              new(): CurrencyNames_sah;
            }
            let CurrencyNames_sah: _CurrencyNames_sah$$static;
            interface _CurrencyNames_sah {
              _getContents(): any[][];
            }
            interface CurrencyNames_sah extends CombineTypes<[_CurrencyNames_sah, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_saq$$static extends ClassLike {
              new(): CurrencyNames_saq;
            }
            let CurrencyNames_saq: _CurrencyNames_saq$$static;
            interface _CurrencyNames_saq {
              _getContents(): any[][];
            }
            interface CurrencyNames_saq extends CombineTypes<[_CurrencyNames_saq, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_sat$$static extends ClassLike {
              new(): CurrencyNames_sat;
            }
            let CurrencyNames_sat: _CurrencyNames_sat$$static;
            interface _CurrencyNames_sat {
              _getContents(): any[][];
            }
            interface CurrencyNames_sat extends CombineTypes<[_CurrencyNames_sat, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_sbp$$static extends ClassLike {
              new(): CurrencyNames_sbp;
            }
            let CurrencyNames_sbp: _CurrencyNames_sbp$$static;
            interface _CurrencyNames_sbp {
              _getContents(): any[][];
            }
            interface CurrencyNames_sbp extends CombineTypes<[_CurrencyNames_sbp, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_sc$$static extends ClassLike {
              new(): CurrencyNames_sc;
            }
            let CurrencyNames_sc: _CurrencyNames_sc$$static;
            interface _CurrencyNames_sc {
              _getContents(): any[][];
            }
            interface CurrencyNames_sc extends CombineTypes<[_CurrencyNames_sc, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_sd$$static extends ClassLike {
              new(): CurrencyNames_sd;
            }
            let CurrencyNames_sd: _CurrencyNames_sd$$static;
            interface _CurrencyNames_sd {
              _getContents(): any[][];
            }
            interface CurrencyNames_sd extends CombineTypes<[_CurrencyNames_sd, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_sd_Deva$$static extends ClassLike {
              new(): CurrencyNames_sd_Deva;
            }
            let CurrencyNames_sd_Deva: _CurrencyNames_sd_Deva$$static;
            interface _CurrencyNames_sd_Deva {
              _getContents(): any[][];
            }
            interface CurrencyNames_sd_Deva extends CombineTypes<[_CurrencyNames_sd_Deva, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_se$$static extends ClassLike {
              new(): CurrencyNames_se;
            }
            let CurrencyNames_se: _CurrencyNames_se$$static;
            interface _CurrencyNames_se {
              _getContents(): any[][];
            }
            interface CurrencyNames_se extends CombineTypes<[_CurrencyNames_se, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_se_SE$$static extends ClassLike {
              new(): CurrencyNames_se_SE;
            }
            let CurrencyNames_se_SE: _CurrencyNames_se_SE$$static;
            interface _CurrencyNames_se_SE {
              _getContents(): any[][];
            }
            interface CurrencyNames_se_SE extends CombineTypes<[_CurrencyNames_se_SE, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_seh$$static extends ClassLike {
              new(): CurrencyNames_seh;
            }
            let CurrencyNames_seh: _CurrencyNames_seh$$static;
            interface _CurrencyNames_seh {
              _getContents(): any[][];
            }
            interface CurrencyNames_seh extends CombineTypes<[_CurrencyNames_seh, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ses$$static extends ClassLike {
              new(): CurrencyNames_ses;
            }
            let CurrencyNames_ses: _CurrencyNames_ses$$static;
            interface _CurrencyNames_ses {
              _getContents(): any[][];
            }
            interface CurrencyNames_ses extends CombineTypes<[_CurrencyNames_ses, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_sg$$static extends ClassLike {
              new(): CurrencyNames_sg;
            }
            let CurrencyNames_sg: _CurrencyNames_sg$$static;
            interface _CurrencyNames_sg {
              _getContents(): any[][];
            }
            interface CurrencyNames_sg extends CombineTypes<[_CurrencyNames_sg, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_shi$$static extends ClassLike {
              new(): CurrencyNames_shi;
            }
            let CurrencyNames_shi: _CurrencyNames_shi$$static;
            interface _CurrencyNames_shi {
              _getContents(): any[][];
            }
            interface CurrencyNames_shi extends CombineTypes<[_CurrencyNames_shi, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_shi_Latn$$static extends ClassLike {
              new(): CurrencyNames_shi_Latn;
            }
            let CurrencyNames_shi_Latn: _CurrencyNames_shi_Latn$$static;
            interface _CurrencyNames_shi_Latn {
              _getContents(): any[][];
            }
            interface CurrencyNames_shi_Latn extends CombineTypes<[_CurrencyNames_shi_Latn, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_si$$static extends ClassLike {
              new(): CurrencyNames_si;
            }
            let CurrencyNames_si: _CurrencyNames_si$$static;
            interface _CurrencyNames_si {
              _getContents(): any[][];
            }
            interface CurrencyNames_si extends CombineTypes<[_CurrencyNames_si, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_sk$$static extends ClassLike {
              new(): CurrencyNames_sk;
            }
            let CurrencyNames_sk: _CurrencyNames_sk$$static;
            interface _CurrencyNames_sk {
              _getContents(): any[][];
            }
            interface CurrencyNames_sk extends CombineTypes<[_CurrencyNames_sk, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_sl$$static extends ClassLike {
              new(): CurrencyNames_sl;
            }
            let CurrencyNames_sl: _CurrencyNames_sl$$static;
            interface _CurrencyNames_sl {
              _getContents(): any[][];
            }
            interface CurrencyNames_sl extends CombineTypes<[_CurrencyNames_sl, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_smn$$static extends ClassLike {
              new(): CurrencyNames_smn;
            }
            let CurrencyNames_smn: _CurrencyNames_smn$$static;
            interface _CurrencyNames_smn {
              _getContents(): any[][];
            }
            interface CurrencyNames_smn extends CombineTypes<[_CurrencyNames_smn, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_sn$$static extends ClassLike {
              new(): CurrencyNames_sn;
            }
            let CurrencyNames_sn: _CurrencyNames_sn$$static;
            interface _CurrencyNames_sn {
              _getContents(): any[][];
            }
            interface CurrencyNames_sn extends CombineTypes<[_CurrencyNames_sn, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_so$$static extends ClassLike {
              new(): CurrencyNames_so;
            }
            let CurrencyNames_so: _CurrencyNames_so$$static;
            interface _CurrencyNames_so {
              _getContents(): any[][];
            }
            interface CurrencyNames_so extends CombineTypes<[_CurrencyNames_so, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_so_DJ$$static extends ClassLike {
              new(): CurrencyNames_so_DJ;
            }
            let CurrencyNames_so_DJ: _CurrencyNames_so_DJ$$static;
            interface _CurrencyNames_so_DJ {
              _getContents(): any[][];
            }
            interface CurrencyNames_so_DJ extends CombineTypes<[_CurrencyNames_so_DJ, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_so_ET$$static extends ClassLike {
              new(): CurrencyNames_so_ET;
            }
            let CurrencyNames_so_ET: _CurrencyNames_so_ET$$static;
            interface _CurrencyNames_so_ET {
              _getContents(): any[][];
            }
            interface CurrencyNames_so_ET extends CombineTypes<[_CurrencyNames_so_ET, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_so_KE$$static extends ClassLike {
              new(): CurrencyNames_so_KE;
            }
            let CurrencyNames_so_KE: _CurrencyNames_so_KE$$static;
            interface _CurrencyNames_so_KE {
              _getContents(): any[][];
            }
            interface CurrencyNames_so_KE extends CombineTypes<[_CurrencyNames_so_KE, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_sq$$static extends ClassLike {
              new(): CurrencyNames_sq;
            }
            let CurrencyNames_sq: _CurrencyNames_sq$$static;
            interface _CurrencyNames_sq {
              _getContents(): any[][];
            }
            interface CurrencyNames_sq extends CombineTypes<[_CurrencyNames_sq, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_sq_MK$$static extends ClassLike {
              new(): CurrencyNames_sq_MK;
            }
            let CurrencyNames_sq_MK: _CurrencyNames_sq_MK$$static;
            interface _CurrencyNames_sq_MK {
              _getContents(): any[][];
            }
            interface CurrencyNames_sq_MK extends CombineTypes<[_CurrencyNames_sq_MK, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_sr$$static extends ClassLike {
              new(): CurrencyNames_sr;
            }
            let CurrencyNames_sr: _CurrencyNames_sr$$static;
            interface _CurrencyNames_sr {
              _getContents(): any[][];
            }
            interface CurrencyNames_sr extends CombineTypes<[_CurrencyNames_sr, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_sr_Cyrl_BA$$static extends ClassLike {
              new(): CurrencyNames_sr_Cyrl_BA;
            }
            let CurrencyNames_sr_Cyrl_BA: _CurrencyNames_sr_Cyrl_BA$$static;
            interface _CurrencyNames_sr_Cyrl_BA {
              _getContents(): any[][];
            }
            interface CurrencyNames_sr_Cyrl_BA extends CombineTypes<[_CurrencyNames_sr_Cyrl_BA, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_sr_Latn$$static extends ClassLike {
              new(): CurrencyNames_sr_Latn;
            }
            let CurrencyNames_sr_Latn: _CurrencyNames_sr_Latn$$static;
            interface _CurrencyNames_sr_Latn {
              _getContents(): any[][];
            }
            interface CurrencyNames_sr_Latn extends CombineTypes<[_CurrencyNames_sr_Latn, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_sr_Latn_BA$$static extends ClassLike {
              new(): CurrencyNames_sr_Latn_BA;
            }
            let CurrencyNames_sr_Latn_BA: _CurrencyNames_sr_Latn_BA$$static;
            interface _CurrencyNames_sr_Latn_BA {
              _getContents(): any[][];
            }
            interface CurrencyNames_sr_Latn_BA extends CombineTypes<[_CurrencyNames_sr_Latn_BA, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_su$$static extends ClassLike {
              new(): CurrencyNames_su;
            }
            let CurrencyNames_su: _CurrencyNames_su$$static;
            interface _CurrencyNames_su {
              _getContents(): any[][];
            }
            interface CurrencyNames_su extends CombineTypes<[_CurrencyNames_su, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_sv$$static extends ClassLike {
              new(): CurrencyNames_sv;
            }
            let CurrencyNames_sv: _CurrencyNames_sv$$static;
            interface _CurrencyNames_sv {
              _getContents(): any[][];
            }
            interface CurrencyNames_sv extends CombineTypes<[_CurrencyNames_sv, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_sw$$static extends ClassLike {
              new(): CurrencyNames_sw;
            }
            let CurrencyNames_sw: _CurrencyNames_sw$$static;
            interface _CurrencyNames_sw {
              _getContents(): any[][];
            }
            interface CurrencyNames_sw extends CombineTypes<[_CurrencyNames_sw, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_sw_CD$$static extends ClassLike {
              new(): CurrencyNames_sw_CD;
            }
            let CurrencyNames_sw_CD: _CurrencyNames_sw_CD$$static;
            interface _CurrencyNames_sw_CD {
              _getContents(): any[][];
            }
            interface CurrencyNames_sw_CD extends CombineTypes<[_CurrencyNames_sw_CD, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_sw_KE$$static extends ClassLike {
              new(): CurrencyNames_sw_KE;
            }
            let CurrencyNames_sw_KE: _CurrencyNames_sw_KE$$static;
            interface _CurrencyNames_sw_KE {
              _getContents(): any[][];
            }
            interface CurrencyNames_sw_KE extends CombineTypes<[_CurrencyNames_sw_KE, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_sw_UG$$static extends ClassLike {
              new(): CurrencyNames_sw_UG;
            }
            let CurrencyNames_sw_UG: _CurrencyNames_sw_UG$$static;
            interface _CurrencyNames_sw_UG {
              _getContents(): any[][];
            }
            interface CurrencyNames_sw_UG extends CombineTypes<[_CurrencyNames_sw_UG, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ta$$static extends ClassLike {
              new(): CurrencyNames_ta;
            }
            let CurrencyNames_ta: _CurrencyNames_ta$$static;
            interface _CurrencyNames_ta {
              _getContents(): any[][];
            }
            interface CurrencyNames_ta extends CombineTypes<[_CurrencyNames_ta, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ta_LK$$static extends ClassLike {
              new(): CurrencyNames_ta_LK;
            }
            let CurrencyNames_ta_LK: _CurrencyNames_ta_LK$$static;
            interface _CurrencyNames_ta_LK {
              _getContents(): any[][];
            }
            interface CurrencyNames_ta_LK extends CombineTypes<[_CurrencyNames_ta_LK, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ta_MY$$static extends ClassLike {
              new(): CurrencyNames_ta_MY;
            }
            let CurrencyNames_ta_MY: _CurrencyNames_ta_MY$$static;
            interface _CurrencyNames_ta_MY {
              _getContents(): any[][];
            }
            interface CurrencyNames_ta_MY extends CombineTypes<[_CurrencyNames_ta_MY, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ta_SG$$static extends ClassLike {
              new(): CurrencyNames_ta_SG;
            }
            let CurrencyNames_ta_SG: _CurrencyNames_ta_SG$$static;
            interface _CurrencyNames_ta_SG {
              _getContents(): any[][];
            }
            interface CurrencyNames_ta_SG extends CombineTypes<[_CurrencyNames_ta_SG, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_te$$static extends ClassLike {
              new(): CurrencyNames_te;
            }
            let CurrencyNames_te: _CurrencyNames_te$$static;
            interface _CurrencyNames_te {
              _getContents(): any[][];
            }
            interface CurrencyNames_te extends CombineTypes<[_CurrencyNames_te, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_teo$$static extends ClassLike {
              new(): CurrencyNames_teo;
            }
            let CurrencyNames_teo: _CurrencyNames_teo$$static;
            interface _CurrencyNames_teo {
              _getContents(): any[][];
            }
            interface CurrencyNames_teo extends CombineTypes<[_CurrencyNames_teo, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_teo_KE$$static extends ClassLike {
              new(): CurrencyNames_teo_KE;
            }
            let CurrencyNames_teo_KE: _CurrencyNames_teo_KE$$static;
            interface _CurrencyNames_teo_KE {
              _getContents(): any[][];
            }
            interface CurrencyNames_teo_KE extends CombineTypes<[_CurrencyNames_teo_KE, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_tg$$static extends ClassLike {
              new(): CurrencyNames_tg;
            }
            let CurrencyNames_tg: _CurrencyNames_tg$$static;
            interface _CurrencyNames_tg {
              _getContents(): any[][];
            }
            interface CurrencyNames_tg extends CombineTypes<[_CurrencyNames_tg, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_th$$static extends ClassLike {
              new(): CurrencyNames_th;
            }
            let CurrencyNames_th: _CurrencyNames_th$$static;
            interface _CurrencyNames_th {
              _getContents(): any[][];
            }
            interface CurrencyNames_th extends CombineTypes<[_CurrencyNames_th, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ti$$static extends ClassLike {
              new(): CurrencyNames_ti;
            }
            let CurrencyNames_ti: _CurrencyNames_ti$$static;
            interface _CurrencyNames_ti {
              _getContents(): any[][];
            }
            interface CurrencyNames_ti extends CombineTypes<[_CurrencyNames_ti, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ti_ER$$static extends ClassLike {
              new(): CurrencyNames_ti_ER;
            }
            let CurrencyNames_ti_ER: _CurrencyNames_ti_ER$$static;
            interface _CurrencyNames_ti_ER {
              _getContents(): any[][];
            }
            interface CurrencyNames_ti_ER extends CombineTypes<[_CurrencyNames_ti_ER, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_tk$$static extends ClassLike {
              new(): CurrencyNames_tk;
            }
            let CurrencyNames_tk: _CurrencyNames_tk$$static;
            interface _CurrencyNames_tk {
              _getContents(): any[][];
            }
            interface CurrencyNames_tk extends CombineTypes<[_CurrencyNames_tk, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_to$$static extends ClassLike {
              new(): CurrencyNames_to;
            }
            let CurrencyNames_to: _CurrencyNames_to$$static;
            interface _CurrencyNames_to {
              _getContents(): any[][];
            }
            interface CurrencyNames_to extends CombineTypes<[_CurrencyNames_to, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_tr$$static extends ClassLike {
              new(): CurrencyNames_tr;
            }
            let CurrencyNames_tr: _CurrencyNames_tr$$static;
            interface _CurrencyNames_tr {
              _getContents(): any[][];
            }
            interface CurrencyNames_tr extends CombineTypes<[_CurrencyNames_tr, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_tt$$static extends ClassLike {
              new(): CurrencyNames_tt;
            }
            let CurrencyNames_tt: _CurrencyNames_tt$$static;
            interface _CurrencyNames_tt {
              _getContents(): any[][];
            }
            interface CurrencyNames_tt extends CombineTypes<[_CurrencyNames_tt, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_twq$$static extends ClassLike {
              new(): CurrencyNames_twq;
            }
            let CurrencyNames_twq: _CurrencyNames_twq$$static;
            interface _CurrencyNames_twq {
              _getContents(): any[][];
            }
            interface CurrencyNames_twq extends CombineTypes<[_CurrencyNames_twq, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_tzm$$static extends ClassLike {
              new(): CurrencyNames_tzm;
            }
            let CurrencyNames_tzm: _CurrencyNames_tzm$$static;
            interface _CurrencyNames_tzm {
              _getContents(): any[][];
            }
            interface CurrencyNames_tzm extends CombineTypes<[_CurrencyNames_tzm, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ug$$static extends ClassLike {
              new(): CurrencyNames_ug;
            }
            let CurrencyNames_ug: _CurrencyNames_ug$$static;
            interface _CurrencyNames_ug {
              _getContents(): any[][];
            }
            interface CurrencyNames_ug extends CombineTypes<[_CurrencyNames_ug, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_uk$$static extends ClassLike {
              new(): CurrencyNames_uk;
            }
            let CurrencyNames_uk: _CurrencyNames_uk$$static;
            interface _CurrencyNames_uk {
              _getContents(): any[][];
            }
            interface CurrencyNames_uk extends CombineTypes<[_CurrencyNames_uk, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ur$$static extends ClassLike {
              new(): CurrencyNames_ur;
            }
            let CurrencyNames_ur: _CurrencyNames_ur$$static;
            interface _CurrencyNames_ur {
              _getContents(): any[][];
            }
            interface CurrencyNames_ur extends CombineTypes<[_CurrencyNames_ur, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_ur_IN$$static extends ClassLike {
              new(): CurrencyNames_ur_IN;
            }
            let CurrencyNames_ur_IN: _CurrencyNames_ur_IN$$static;
            interface _CurrencyNames_ur_IN {
              _getContents(): any[][];
            }
            interface CurrencyNames_ur_IN extends CombineTypes<[_CurrencyNames_ur_IN, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_uz$$static extends ClassLike {
              new(): CurrencyNames_uz;
            }
            let CurrencyNames_uz: _CurrencyNames_uz$$static;
            interface _CurrencyNames_uz {
              _getContents(): any[][];
            }
            interface CurrencyNames_uz extends CombineTypes<[_CurrencyNames_uz, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_uz_Arab$$static extends ClassLike {
              new(): CurrencyNames_uz_Arab;
            }
            let CurrencyNames_uz_Arab: _CurrencyNames_uz_Arab$$static;
            interface _CurrencyNames_uz_Arab {
              _getContents(): any[][];
            }
            interface CurrencyNames_uz_Arab extends CombineTypes<[_CurrencyNames_uz_Arab, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_uz_Cyrl$$static extends ClassLike {
              new(): CurrencyNames_uz_Cyrl;
            }
            let CurrencyNames_uz_Cyrl: _CurrencyNames_uz_Cyrl$$static;
            interface _CurrencyNames_uz_Cyrl {
              _getContents(): any[][];
            }
            interface CurrencyNames_uz_Cyrl extends CombineTypes<[_CurrencyNames_uz_Cyrl, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_vai$$static extends ClassLike {
              new(): CurrencyNames_vai;
            }
            let CurrencyNames_vai: _CurrencyNames_vai$$static;
            interface _CurrencyNames_vai {
              _getContents(): any[][];
            }
            interface CurrencyNames_vai extends CombineTypes<[_CurrencyNames_vai, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_vai_Latn$$static extends ClassLike {
              new(): CurrencyNames_vai_Latn;
            }
            let CurrencyNames_vai_Latn: _CurrencyNames_vai_Latn$$static;
            interface _CurrencyNames_vai_Latn {
              _getContents(): any[][];
            }
            interface CurrencyNames_vai_Latn extends CombineTypes<[_CurrencyNames_vai_Latn, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_vi$$static extends ClassLike {
              new(): CurrencyNames_vi;
            }
            let CurrencyNames_vi: _CurrencyNames_vi$$static;
            interface _CurrencyNames_vi {
              _getContents(): any[][];
            }
            interface CurrencyNames_vi extends CombineTypes<[_CurrencyNames_vi, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_vun$$static extends ClassLike {
              new(): CurrencyNames_vun;
            }
            let CurrencyNames_vun: _CurrencyNames_vun$$static;
            interface _CurrencyNames_vun {
              _getContents(): any[][];
            }
            interface CurrencyNames_vun extends CombineTypes<[_CurrencyNames_vun, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_wae$$static extends ClassLike {
              new(): CurrencyNames_wae;
            }
            let CurrencyNames_wae: _CurrencyNames_wae$$static;
            interface _CurrencyNames_wae {
              _getContents(): any[][];
            }
            interface CurrencyNames_wae extends CombineTypes<[_CurrencyNames_wae, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_wo$$static extends ClassLike {
              new(): CurrencyNames_wo;
            }
            let CurrencyNames_wo: _CurrencyNames_wo$$static;
            interface _CurrencyNames_wo {
              _getContents(): any[][];
            }
            interface CurrencyNames_wo extends CombineTypes<[_CurrencyNames_wo, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_xh$$static extends ClassLike {
              new(): CurrencyNames_xh;
            }
            let CurrencyNames_xh: _CurrencyNames_xh$$static;
            interface _CurrencyNames_xh {
              _getContents(): any[][];
            }
            interface CurrencyNames_xh extends CombineTypes<[_CurrencyNames_xh, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_xog$$static extends ClassLike {
              new(): CurrencyNames_xog;
            }
            let CurrencyNames_xog: _CurrencyNames_xog$$static;
            interface _CurrencyNames_xog {
              _getContents(): any[][];
            }
            interface CurrencyNames_xog extends CombineTypes<[_CurrencyNames_xog, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_yav$$static extends ClassLike {
              new(): CurrencyNames_yav;
            }
            let CurrencyNames_yav: _CurrencyNames_yav$$static;
            interface _CurrencyNames_yav {
              _getContents(): any[][];
            }
            interface CurrencyNames_yav extends CombineTypes<[_CurrencyNames_yav, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_yi$$static extends ClassLike {
              new(): CurrencyNames_yi;
            }
            let CurrencyNames_yi: _CurrencyNames_yi$$static;
            interface _CurrencyNames_yi {
              _getContents(): any[][];
            }
            interface CurrencyNames_yi extends CombineTypes<[_CurrencyNames_yi, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_yo$$static extends ClassLike {
              new(): CurrencyNames_yo;
            }
            let CurrencyNames_yo: _CurrencyNames_yo$$static;
            interface _CurrencyNames_yo {
              _getContents(): any[][];
            }
            interface CurrencyNames_yo extends CombineTypes<[_CurrencyNames_yo, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_yo_BJ$$static extends ClassLike {
              new(): CurrencyNames_yo_BJ;
            }
            let CurrencyNames_yo_BJ: _CurrencyNames_yo_BJ$$static;
            interface _CurrencyNames_yo_BJ {
              _getContents(): any[][];
            }
            interface CurrencyNames_yo_BJ extends CombineTypes<[_CurrencyNames_yo_BJ, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_yrl$$static extends ClassLike {
              new(): CurrencyNames_yrl;
            }
            let CurrencyNames_yrl: _CurrencyNames_yrl$$static;
            interface _CurrencyNames_yrl {
              _getContents(): any[][];
            }
            interface CurrencyNames_yrl extends CombineTypes<[_CurrencyNames_yrl, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_yrl_CO$$static extends ClassLike {
              new(): CurrencyNames_yrl_CO;
            }
            let CurrencyNames_yrl_CO: _CurrencyNames_yrl_CO$$static;
            interface _CurrencyNames_yrl_CO {
              _getContents(): any[][];
            }
            interface CurrencyNames_yrl_CO extends CombineTypes<[_CurrencyNames_yrl_CO, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_yrl_VE$$static extends ClassLike {
              new(): CurrencyNames_yrl_VE;
            }
            let CurrencyNames_yrl_VE: _CurrencyNames_yrl_VE$$static;
            interface _CurrencyNames_yrl_VE {
              _getContents(): any[][];
            }
            interface CurrencyNames_yrl_VE extends CombineTypes<[_CurrencyNames_yrl_VE, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_yue$$static extends ClassLike {
              new(): CurrencyNames_yue;
            }
            let CurrencyNames_yue: _CurrencyNames_yue$$static;
            interface _CurrencyNames_yue {
              _getContents(): any[][];
            }
            interface CurrencyNames_yue extends CombineTypes<[_CurrencyNames_yue, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_yue_Hans$$static extends ClassLike {
              new(): CurrencyNames_yue_Hans;
            }
            let CurrencyNames_yue_Hans: _CurrencyNames_yue_Hans$$static;
            interface _CurrencyNames_yue_Hans {
              _getContents(): any[][];
            }
            interface CurrencyNames_yue_Hans extends CombineTypes<[_CurrencyNames_yue_Hans, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_zgh$$static extends ClassLike {
              new(): CurrencyNames_zgh;
            }
            let CurrencyNames_zgh: _CurrencyNames_zgh$$static;
            interface _CurrencyNames_zgh {
              _getContents(): any[][];
            }
            interface CurrencyNames_zgh extends CombineTypes<[_CurrencyNames_zgh, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_zh$$static extends ClassLike {
              new(): CurrencyNames_zh;
            }
            let CurrencyNames_zh: _CurrencyNames_zh$$static;
            interface _CurrencyNames_zh {
              _getContents(): any[][];
            }
            interface CurrencyNames_zh extends CombineTypes<[_CurrencyNames_zh, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_zh_Hans_HK$$static extends ClassLike {
              new(): CurrencyNames_zh_Hans_HK;
            }
            let CurrencyNames_zh_Hans_HK: _CurrencyNames_zh_Hans_HK$$static;
            interface _CurrencyNames_zh_Hans_HK {
              _getContents(): any[][];
            }
            interface CurrencyNames_zh_Hans_HK extends CombineTypes<[_CurrencyNames_zh_Hans_HK, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_zh_Hans_MO$$static extends ClassLike {
              new(): CurrencyNames_zh_Hans_MO;
            }
            let CurrencyNames_zh_Hans_MO: _CurrencyNames_zh_Hans_MO$$static;
            interface _CurrencyNames_zh_Hans_MO {
              _getContents(): any[][];
            }
            interface CurrencyNames_zh_Hans_MO extends CombineTypes<[_CurrencyNames_zh_Hans_MO, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_zh_Hans_SG$$static extends ClassLike {
              new(): CurrencyNames_zh_Hans_SG;
            }
            let CurrencyNames_zh_Hans_SG: _CurrencyNames_zh_Hans_SG$$static;
            interface _CurrencyNames_zh_Hans_SG {
              _getContents(): any[][];
            }
            interface CurrencyNames_zh_Hans_SG extends CombineTypes<[_CurrencyNames_zh_Hans_SG, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_zh_Hant$$static extends ClassLike {
              new(): CurrencyNames_zh_Hant;
            }
            let CurrencyNames_zh_Hant: _CurrencyNames_zh_Hant$$static;
            interface _CurrencyNames_zh_Hant {
              _getContents(): any[][];
            }
            interface CurrencyNames_zh_Hant extends CombineTypes<[_CurrencyNames_zh_Hant, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_zh_Hant_HK$$static extends ClassLike {
              new(): CurrencyNames_zh_Hant_HK;
            }
            let CurrencyNames_zh_Hant_HK: _CurrencyNames_zh_Hant_HK$$static;
            interface _CurrencyNames_zh_Hant_HK {
              _getContents(): any[][];
            }
            interface CurrencyNames_zh_Hant_HK extends CombineTypes<[_CurrencyNames_zh_Hant_HK, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_zh_Hant_MO$$static extends ClassLike {
              new(): CurrencyNames_zh_Hant_MO;
            }
            let CurrencyNames_zh_Hant_MO: _CurrencyNames_zh_Hant_MO$$static;
            interface _CurrencyNames_zh_Hant_MO {
              _getContents(): any[][];
            }
            interface CurrencyNames_zh_Hant_MO extends CombineTypes<[_CurrencyNames_zh_Hant_MO, sun.util.resources.OpenListResourceBundle]> {}
            interface _CurrencyNames_zu$$static extends ClassLike {
              new(): CurrencyNames_zu;
            }
            let CurrencyNames_zu: _CurrencyNames_zu$$static;
            interface _CurrencyNames_zu {
              _getContents(): any[][];
            }
            interface CurrencyNames_zu extends CombineTypes<[_CurrencyNames_zu, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_af$$static extends ClassLike {
              new(): LocaleNames_af;
            }
            let LocaleNames_af: _LocaleNames_af$$static;
            interface _LocaleNames_af {
              _getContents(): any[][];
            }
            interface LocaleNames_af extends CombineTypes<[_LocaleNames_af, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_agq$$static extends ClassLike {
              new(): LocaleNames_agq;
            }
            let LocaleNames_agq: _LocaleNames_agq$$static;
            interface _LocaleNames_agq {
              _getContents(): any[][];
            }
            interface LocaleNames_agq extends CombineTypes<[_LocaleNames_agq, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ak$$static extends ClassLike {
              new(): LocaleNames_ak;
            }
            let LocaleNames_ak: _LocaleNames_ak$$static;
            interface _LocaleNames_ak {
              _getContents(): any[][];
            }
            interface LocaleNames_ak extends CombineTypes<[_LocaleNames_ak, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_am$$static extends ClassLike {
              new(): LocaleNames_am;
            }
            let LocaleNames_am: _LocaleNames_am$$static;
            interface _LocaleNames_am {
              _getContents(): any[][];
            }
            interface LocaleNames_am extends CombineTypes<[_LocaleNames_am, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ann$$static extends ClassLike {
              new(): LocaleNames_ann;
            }
            let LocaleNames_ann: _LocaleNames_ann$$static;
            interface _LocaleNames_ann {
              _getContents(): any[][];
            }
            interface LocaleNames_ann extends CombineTypes<[_LocaleNames_ann, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ar$$static extends ClassLike {
              new(): LocaleNames_ar;
            }
            let LocaleNames_ar: _LocaleNames_ar$$static;
            interface _LocaleNames_ar {
              _getContents(): any[][];
            }
            interface LocaleNames_ar extends CombineTypes<[_LocaleNames_ar, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ar_EG$$static extends ClassLike {
              new(): LocaleNames_ar_EG;
            }
            let LocaleNames_ar_EG: _LocaleNames_ar_EG$$static;
            interface _LocaleNames_ar_EG {
              _getContents(): any[][];
            }
            interface LocaleNames_ar_EG extends CombineTypes<[_LocaleNames_ar_EG, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ar_LY$$static extends ClassLike {
              new(): LocaleNames_ar_LY;
            }
            let LocaleNames_ar_LY: _LocaleNames_ar_LY$$static;
            interface _LocaleNames_ar_LY {
              _getContents(): any[][];
            }
            interface LocaleNames_ar_LY extends CombineTypes<[_LocaleNames_ar_LY, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ar_SA$$static extends ClassLike {
              new(): LocaleNames_ar_SA;
            }
            let LocaleNames_ar_SA: _LocaleNames_ar_SA$$static;
            interface _LocaleNames_ar_SA {
              _getContents(): any[][];
            }
            interface LocaleNames_ar_SA extends CombineTypes<[_LocaleNames_ar_SA, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_as$$static extends ClassLike {
              new(): LocaleNames_as;
            }
            let LocaleNames_as: _LocaleNames_as$$static;
            interface _LocaleNames_as {
              _getContents(): any[][];
            }
            interface LocaleNames_as extends CombineTypes<[_LocaleNames_as, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_asa$$static extends ClassLike {
              new(): LocaleNames_asa;
            }
            let LocaleNames_asa: _LocaleNames_asa$$static;
            interface _LocaleNames_asa {
              _getContents(): any[][];
            }
            interface LocaleNames_asa extends CombineTypes<[_LocaleNames_asa, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ast$$static extends ClassLike {
              new(): LocaleNames_ast;
            }
            let LocaleNames_ast: _LocaleNames_ast$$static;
            interface _LocaleNames_ast {
              _getContents(): any[][];
            }
            interface LocaleNames_ast extends CombineTypes<[_LocaleNames_ast, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_az$$static extends ClassLike {
              new(): LocaleNames_az;
            }
            let LocaleNames_az: _LocaleNames_az$$static;
            interface _LocaleNames_az {
              _getContents(): any[][];
            }
            interface LocaleNames_az extends CombineTypes<[_LocaleNames_az, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_az_Cyrl$$static extends ClassLike {
              new(): LocaleNames_az_Cyrl;
            }
            let LocaleNames_az_Cyrl: _LocaleNames_az_Cyrl$$static;
            interface _LocaleNames_az_Cyrl {
              _getContents(): any[][];
            }
            interface LocaleNames_az_Cyrl extends CombineTypes<[_LocaleNames_az_Cyrl, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_bas$$static extends ClassLike {
              new(): LocaleNames_bas;
            }
            let LocaleNames_bas: _LocaleNames_bas$$static;
            interface _LocaleNames_bas {
              _getContents(): any[][];
            }
            interface LocaleNames_bas extends CombineTypes<[_LocaleNames_bas, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_be$$static extends ClassLike {
              new(): LocaleNames_be;
            }
            let LocaleNames_be: _LocaleNames_be$$static;
            interface _LocaleNames_be {
              _getContents(): any[][];
            }
            interface LocaleNames_be extends CombineTypes<[_LocaleNames_be, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_bem$$static extends ClassLike {
              new(): LocaleNames_bem;
            }
            let LocaleNames_bem: _LocaleNames_bem$$static;
            interface _LocaleNames_bem {
              _getContents(): any[][];
            }
            interface LocaleNames_bem extends CombineTypes<[_LocaleNames_bem, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_bez$$static extends ClassLike {
              new(): LocaleNames_bez;
            }
            let LocaleNames_bez: _LocaleNames_bez$$static;
            interface _LocaleNames_bez {
              _getContents(): any[][];
            }
            interface LocaleNames_bez extends CombineTypes<[_LocaleNames_bez, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_bg$$static extends ClassLike {
              new(): LocaleNames_bg;
            }
            let LocaleNames_bg: _LocaleNames_bg$$static;
            interface _LocaleNames_bg {
              _getContents(): any[][];
            }
            interface LocaleNames_bg extends CombineTypes<[_LocaleNames_bg, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_bgc$$static extends ClassLike {
              new(): LocaleNames_bgc;
            }
            let LocaleNames_bgc: _LocaleNames_bgc$$static;
            interface _LocaleNames_bgc {
              _getContents(): any[][];
            }
            interface LocaleNames_bgc extends CombineTypes<[_LocaleNames_bgc, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_bho$$static extends ClassLike {
              new(): LocaleNames_bho;
            }
            let LocaleNames_bho: _LocaleNames_bho$$static;
            interface _LocaleNames_bho {
              _getContents(): any[][];
            }
            interface LocaleNames_bho extends CombineTypes<[_LocaleNames_bho, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_bm$$static extends ClassLike {
              new(): LocaleNames_bm;
            }
            let LocaleNames_bm: _LocaleNames_bm$$static;
            interface _LocaleNames_bm {
              _getContents(): any[][];
            }
            interface LocaleNames_bm extends CombineTypes<[_LocaleNames_bm, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_bn$$static extends ClassLike {
              new(): LocaleNames_bn;
            }
            let LocaleNames_bn: _LocaleNames_bn$$static;
            interface _LocaleNames_bn {
              _getContents(): any[][];
            }
            interface LocaleNames_bn extends CombineTypes<[_LocaleNames_bn, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_bn_IN$$static extends ClassLike {
              new(): LocaleNames_bn_IN;
            }
            let LocaleNames_bn_IN: _LocaleNames_bn_IN$$static;
            interface _LocaleNames_bn_IN {
              _getContents(): any[][];
            }
            interface LocaleNames_bn_IN extends CombineTypes<[_LocaleNames_bn_IN, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_bo$$static extends ClassLike {
              new(): LocaleNames_bo;
            }
            let LocaleNames_bo: _LocaleNames_bo$$static;
            interface _LocaleNames_bo {
              _getContents(): any[][];
            }
            interface LocaleNames_bo extends CombineTypes<[_LocaleNames_bo, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_bo_IN$$static extends ClassLike {
              new(): LocaleNames_bo_IN;
            }
            let LocaleNames_bo_IN: _LocaleNames_bo_IN$$static;
            interface _LocaleNames_bo_IN {
              _getContents(): any[][];
            }
            interface LocaleNames_bo_IN extends CombineTypes<[_LocaleNames_bo_IN, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_br$$static extends ClassLike {
              new(): LocaleNames_br;
            }
            let LocaleNames_br: _LocaleNames_br$$static;
            interface _LocaleNames_br {
              _getContents(): any[][];
            }
            interface LocaleNames_br extends CombineTypes<[_LocaleNames_br, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_brx$$static extends ClassLike {
              new(): LocaleNames_brx;
            }
            let LocaleNames_brx: _LocaleNames_brx$$static;
            interface _LocaleNames_brx {
              _getContents(): any[][];
            }
            interface LocaleNames_brx extends CombineTypes<[_LocaleNames_brx, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_bs$$static extends ClassLike {
              new(): LocaleNames_bs;
            }
            let LocaleNames_bs: _LocaleNames_bs$$static;
            interface _LocaleNames_bs {
              _getContents(): any[][];
            }
            interface LocaleNames_bs extends CombineTypes<[_LocaleNames_bs, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_bs_Cyrl$$static extends ClassLike {
              new(): LocaleNames_bs_Cyrl;
            }
            let LocaleNames_bs_Cyrl: _LocaleNames_bs_Cyrl$$static;
            interface _LocaleNames_bs_Cyrl {
              _getContents(): any[][];
            }
            interface LocaleNames_bs_Cyrl extends CombineTypes<[_LocaleNames_bs_Cyrl, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ca$$static extends ClassLike {
              new(): LocaleNames_ca;
            }
            let LocaleNames_ca: _LocaleNames_ca$$static;
            interface _LocaleNames_ca {
              _getContents(): any[][];
            }
            interface LocaleNames_ca extends CombineTypes<[_LocaleNames_ca, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ccp$$static extends ClassLike {
              new(): LocaleNames_ccp;
            }
            let LocaleNames_ccp: _LocaleNames_ccp$$static;
            interface _LocaleNames_ccp {
              _getContents(): any[][];
            }
            interface LocaleNames_ccp extends CombineTypes<[_LocaleNames_ccp, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ce$$static extends ClassLike {
              new(): LocaleNames_ce;
            }
            let LocaleNames_ce: _LocaleNames_ce$$static;
            interface _LocaleNames_ce {
              _getContents(): any[][];
            }
            interface LocaleNames_ce extends CombineTypes<[_LocaleNames_ce, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ceb$$static extends ClassLike {
              new(): LocaleNames_ceb;
            }
            let LocaleNames_ceb: _LocaleNames_ceb$$static;
            interface _LocaleNames_ceb {
              _getContents(): any[][];
            }
            interface LocaleNames_ceb extends CombineTypes<[_LocaleNames_ceb, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_cgg$$static extends ClassLike {
              new(): LocaleNames_cgg;
            }
            let LocaleNames_cgg: _LocaleNames_cgg$$static;
            interface _LocaleNames_cgg {
              _getContents(): any[][];
            }
            interface LocaleNames_cgg extends CombineTypes<[_LocaleNames_cgg, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_chr$$static extends ClassLike {
              new(): LocaleNames_chr;
            }
            let LocaleNames_chr: _LocaleNames_chr$$static;
            interface _LocaleNames_chr {
              _getContents(): any[][];
            }
            interface LocaleNames_chr extends CombineTypes<[_LocaleNames_chr, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ckb$$static extends ClassLike {
              new(): LocaleNames_ckb;
            }
            let LocaleNames_ckb: _LocaleNames_ckb$$static;
            interface _LocaleNames_ckb {
              _getContents(): any[][];
            }
            interface LocaleNames_ckb extends CombineTypes<[_LocaleNames_ckb, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_cs$$static extends ClassLike {
              new(): LocaleNames_cs;
            }
            let LocaleNames_cs: _LocaleNames_cs$$static;
            interface _LocaleNames_cs {
              _getContents(): any[][];
            }
            interface LocaleNames_cs extends CombineTypes<[_LocaleNames_cs, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_cv$$static extends ClassLike {
              new(): LocaleNames_cv;
            }
            let LocaleNames_cv: _LocaleNames_cv$$static;
            interface _LocaleNames_cv {
              _getContents(): any[][];
            }
            interface LocaleNames_cv extends CombineTypes<[_LocaleNames_cv, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_cy$$static extends ClassLike {
              new(): LocaleNames_cy;
            }
            let LocaleNames_cy: _LocaleNames_cy$$static;
            interface _LocaleNames_cy {
              _getContents(): any[][];
            }
            interface LocaleNames_cy extends CombineTypes<[_LocaleNames_cy, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_da$$static extends ClassLike {
              new(): LocaleNames_da;
            }
            let LocaleNames_da: _LocaleNames_da$$static;
            interface _LocaleNames_da {
              _getContents(): any[][];
            }
            interface LocaleNames_da extends CombineTypes<[_LocaleNames_da, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_dav$$static extends ClassLike {
              new(): LocaleNames_dav;
            }
            let LocaleNames_dav: _LocaleNames_dav$$static;
            interface _LocaleNames_dav {
              _getContents(): any[][];
            }
            interface LocaleNames_dav extends CombineTypes<[_LocaleNames_dav, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_de$$static extends ClassLike {
              new(): LocaleNames_de;
            }
            let LocaleNames_de: _LocaleNames_de$$static;
            interface _LocaleNames_de {
              _getContents(): any[][];
            }
            interface LocaleNames_de extends CombineTypes<[_LocaleNames_de, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_de_AT$$static extends ClassLike {
              new(): LocaleNames_de_AT;
            }
            let LocaleNames_de_AT: _LocaleNames_de_AT$$static;
            interface _LocaleNames_de_AT {
              _getContents(): any[][];
            }
            interface LocaleNames_de_AT extends CombineTypes<[_LocaleNames_de_AT, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_de_CH$$static extends ClassLike {
              new(): LocaleNames_de_CH;
            }
            let LocaleNames_de_CH: _LocaleNames_de_CH$$static;
            interface _LocaleNames_de_CH {
              _getContents(): any[][];
            }
            interface LocaleNames_de_CH extends CombineTypes<[_LocaleNames_de_CH, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_dje$$static extends ClassLike {
              new(): LocaleNames_dje;
            }
            let LocaleNames_dje: _LocaleNames_dje$$static;
            interface _LocaleNames_dje {
              _getContents(): any[][];
            }
            interface LocaleNames_dje extends CombineTypes<[_LocaleNames_dje, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_doi$$static extends ClassLike {
              new(): LocaleNames_doi;
            }
            let LocaleNames_doi: _LocaleNames_doi$$static;
            interface _LocaleNames_doi {
              _getContents(): any[][];
            }
            interface LocaleNames_doi extends CombineTypes<[_LocaleNames_doi, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_dsb$$static extends ClassLike {
              new(): LocaleNames_dsb;
            }
            let LocaleNames_dsb: _LocaleNames_dsb$$static;
            interface _LocaleNames_dsb {
              _getContents(): any[][];
            }
            interface LocaleNames_dsb extends CombineTypes<[_LocaleNames_dsb, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_dua$$static extends ClassLike {
              new(): LocaleNames_dua;
            }
            let LocaleNames_dua: _LocaleNames_dua$$static;
            interface _LocaleNames_dua {
              _getContents(): any[][];
            }
            interface LocaleNames_dua extends CombineTypes<[_LocaleNames_dua, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_dyo$$static extends ClassLike {
              new(): LocaleNames_dyo;
            }
            let LocaleNames_dyo: _LocaleNames_dyo$$static;
            interface _LocaleNames_dyo {
              _getContents(): any[][];
            }
            interface LocaleNames_dyo extends CombineTypes<[_LocaleNames_dyo, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_dz$$static extends ClassLike {
              new(): LocaleNames_dz;
            }
            let LocaleNames_dz: _LocaleNames_dz$$static;
            interface _LocaleNames_dz {
              _getContents(): any[][];
            }
            interface LocaleNames_dz extends CombineTypes<[_LocaleNames_dz, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ebu$$static extends ClassLike {
              new(): LocaleNames_ebu;
            }
            let LocaleNames_ebu: _LocaleNames_ebu$$static;
            interface _LocaleNames_ebu {
              _getContents(): any[][];
            }
            interface LocaleNames_ebu extends CombineTypes<[_LocaleNames_ebu, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ee$$static extends ClassLike {
              new(): LocaleNames_ee;
            }
            let LocaleNames_ee: _LocaleNames_ee$$static;
            interface _LocaleNames_ee {
              _getContents(): any[][];
            }
            interface LocaleNames_ee extends CombineTypes<[_LocaleNames_ee, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_el$$static extends ClassLike {
              new(): LocaleNames_el;
            }
            let LocaleNames_el: _LocaleNames_el$$static;
            interface _LocaleNames_el {
              _getContents(): any[][];
            }
            interface LocaleNames_el extends CombineTypes<[_LocaleNames_el, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_el_POLYTON$$static extends ClassLike {
              new(): LocaleNames_el_POLYTON;
            }
            let LocaleNames_el_POLYTON: _LocaleNames_el_POLYTON$$static;
            interface _LocaleNames_el_POLYTON {
              _getContents(): any[][];
            }
            interface LocaleNames_el_POLYTON extends CombineTypes<[_LocaleNames_el_POLYTON, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_en_001$$static extends ClassLike {
              new(): LocaleNames_en_001;
            }
            let LocaleNames_en_001: _LocaleNames_en_001$$static;
            interface _LocaleNames_en_001 {
              _getContents(): any[][];
            }
            interface LocaleNames_en_001 extends CombineTypes<[_LocaleNames_en_001, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_en_AU$$static extends ClassLike {
              new(): LocaleNames_en_AU;
            }
            let LocaleNames_en_AU: _LocaleNames_en_AU$$static;
            interface _LocaleNames_en_AU {
              _getContents(): any[][];
            }
            interface LocaleNames_en_AU extends CombineTypes<[_LocaleNames_en_AU, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_en_CA$$static extends ClassLike {
              new(): LocaleNames_en_CA;
            }
            let LocaleNames_en_CA: _LocaleNames_en_CA$$static;
            interface _LocaleNames_en_CA {
              _getContents(): any[][];
            }
            interface LocaleNames_en_CA extends CombineTypes<[_LocaleNames_en_CA, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_en_GB$$static extends ClassLike {
              new(): LocaleNames_en_GB;
            }
            let LocaleNames_en_GB: _LocaleNames_en_GB$$static;
            interface _LocaleNames_en_GB {
              _getContents(): any[][];
            }
            interface LocaleNames_en_GB extends CombineTypes<[_LocaleNames_en_GB, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_en_IN$$static extends ClassLike {
              new(): LocaleNames_en_IN;
            }
            let LocaleNames_en_IN: _LocaleNames_en_IN$$static;
            interface _LocaleNames_en_IN {
              _getContents(): any[][];
            }
            interface LocaleNames_en_IN extends CombineTypes<[_LocaleNames_en_IN, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_eo$$static extends ClassLike {
              new(): LocaleNames_eo;
            }
            let LocaleNames_eo: _LocaleNames_eo$$static;
            interface _LocaleNames_eo {
              _getContents(): any[][];
            }
            interface LocaleNames_eo extends CombineTypes<[_LocaleNames_eo, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_es$$static extends ClassLike {
              new(): LocaleNames_es;
            }
            let LocaleNames_es: _LocaleNames_es$$static;
            interface _LocaleNames_es {
              _getContents(): any[][];
            }
            interface LocaleNames_es extends CombineTypes<[_LocaleNames_es, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_es_419$$static extends ClassLike {
              new(): LocaleNames_es_419;
            }
            let LocaleNames_es_419: _LocaleNames_es_419$$static;
            interface _LocaleNames_es_419 {
              _getContents(): any[][];
            }
            interface LocaleNames_es_419 extends CombineTypes<[_LocaleNames_es_419, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_es_AR$$static extends ClassLike {
              new(): LocaleNames_es_AR;
            }
            let LocaleNames_es_AR: _LocaleNames_es_AR$$static;
            interface _LocaleNames_es_AR {
              _getContents(): any[][];
            }
            interface LocaleNames_es_AR extends CombineTypes<[_LocaleNames_es_AR, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_es_BO$$static extends ClassLike {
              new(): LocaleNames_es_BO;
            }
            let LocaleNames_es_BO: _LocaleNames_es_BO$$static;
            interface _LocaleNames_es_BO {
              _getContents(): any[][];
            }
            interface LocaleNames_es_BO extends CombineTypes<[_LocaleNames_es_BO, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_es_CL$$static extends ClassLike {
              new(): LocaleNames_es_CL;
            }
            let LocaleNames_es_CL: _LocaleNames_es_CL$$static;
            interface _LocaleNames_es_CL {
              _getContents(): any[][];
            }
            interface LocaleNames_es_CL extends CombineTypes<[_LocaleNames_es_CL, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_es_CO$$static extends ClassLike {
              new(): LocaleNames_es_CO;
            }
            let LocaleNames_es_CO: _LocaleNames_es_CO$$static;
            interface _LocaleNames_es_CO {
              _getContents(): any[][];
            }
            interface LocaleNames_es_CO extends CombineTypes<[_LocaleNames_es_CO, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_es_CR$$static extends ClassLike {
              new(): LocaleNames_es_CR;
            }
            let LocaleNames_es_CR: _LocaleNames_es_CR$$static;
            interface _LocaleNames_es_CR {
              _getContents(): any[][];
            }
            interface LocaleNames_es_CR extends CombineTypes<[_LocaleNames_es_CR, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_es_DO$$static extends ClassLike {
              new(): LocaleNames_es_DO;
            }
            let LocaleNames_es_DO: _LocaleNames_es_DO$$static;
            interface _LocaleNames_es_DO {
              _getContents(): any[][];
            }
            interface LocaleNames_es_DO extends CombineTypes<[_LocaleNames_es_DO, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_es_EC$$static extends ClassLike {
              new(): LocaleNames_es_EC;
            }
            let LocaleNames_es_EC: _LocaleNames_es_EC$$static;
            interface _LocaleNames_es_EC {
              _getContents(): any[][];
            }
            interface LocaleNames_es_EC extends CombineTypes<[_LocaleNames_es_EC, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_es_GT$$static extends ClassLike {
              new(): LocaleNames_es_GT;
            }
            let LocaleNames_es_GT: _LocaleNames_es_GT$$static;
            interface _LocaleNames_es_GT {
              _getContents(): any[][];
            }
            interface LocaleNames_es_GT extends CombineTypes<[_LocaleNames_es_GT, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_es_HN$$static extends ClassLike {
              new(): LocaleNames_es_HN;
            }
            let LocaleNames_es_HN: _LocaleNames_es_HN$$static;
            interface _LocaleNames_es_HN {
              _getContents(): any[][];
            }
            interface LocaleNames_es_HN extends CombineTypes<[_LocaleNames_es_HN, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_es_MX$$static extends ClassLike {
              new(): LocaleNames_es_MX;
            }
            let LocaleNames_es_MX: _LocaleNames_es_MX$$static;
            interface _LocaleNames_es_MX {
              _getContents(): any[][];
            }
            interface LocaleNames_es_MX extends CombineTypes<[_LocaleNames_es_MX, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_es_NI$$static extends ClassLike {
              new(): LocaleNames_es_NI;
            }
            let LocaleNames_es_NI: _LocaleNames_es_NI$$static;
            interface _LocaleNames_es_NI {
              _getContents(): any[][];
            }
            interface LocaleNames_es_NI extends CombineTypes<[_LocaleNames_es_NI, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_es_PA$$static extends ClassLike {
              new(): LocaleNames_es_PA;
            }
            let LocaleNames_es_PA: _LocaleNames_es_PA$$static;
            interface _LocaleNames_es_PA {
              _getContents(): any[][];
            }
            interface LocaleNames_es_PA extends CombineTypes<[_LocaleNames_es_PA, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_es_PE$$static extends ClassLike {
              new(): LocaleNames_es_PE;
            }
            let LocaleNames_es_PE: _LocaleNames_es_PE$$static;
            interface _LocaleNames_es_PE {
              _getContents(): any[][];
            }
            interface LocaleNames_es_PE extends CombineTypes<[_LocaleNames_es_PE, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_es_PR$$static extends ClassLike {
              new(): LocaleNames_es_PR;
            }
            let LocaleNames_es_PR: _LocaleNames_es_PR$$static;
            interface _LocaleNames_es_PR {
              _getContents(): any[][];
            }
            interface LocaleNames_es_PR extends CombineTypes<[_LocaleNames_es_PR, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_es_PY$$static extends ClassLike {
              new(): LocaleNames_es_PY;
            }
            let LocaleNames_es_PY: _LocaleNames_es_PY$$static;
            interface _LocaleNames_es_PY {
              _getContents(): any[][];
            }
            interface LocaleNames_es_PY extends CombineTypes<[_LocaleNames_es_PY, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_es_SV$$static extends ClassLike {
              new(): LocaleNames_es_SV;
            }
            let LocaleNames_es_SV: _LocaleNames_es_SV$$static;
            interface _LocaleNames_es_SV {
              _getContents(): any[][];
            }
            interface LocaleNames_es_SV extends CombineTypes<[_LocaleNames_es_SV, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_es_US$$static extends ClassLike {
              new(): LocaleNames_es_US;
            }
            let LocaleNames_es_US: _LocaleNames_es_US$$static;
            interface _LocaleNames_es_US {
              _getContents(): any[][];
            }
            interface LocaleNames_es_US extends CombineTypes<[_LocaleNames_es_US, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_es_VE$$static extends ClassLike {
              new(): LocaleNames_es_VE;
            }
            let LocaleNames_es_VE: _LocaleNames_es_VE$$static;
            interface _LocaleNames_es_VE {
              _getContents(): any[][];
            }
            interface LocaleNames_es_VE extends CombineTypes<[_LocaleNames_es_VE, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_et$$static extends ClassLike {
              new(): LocaleNames_et;
            }
            let LocaleNames_et: _LocaleNames_et$$static;
            interface _LocaleNames_et {
              _getContents(): any[][];
            }
            interface LocaleNames_et extends CombineTypes<[_LocaleNames_et, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_eu$$static extends ClassLike {
              new(): LocaleNames_eu;
            }
            let LocaleNames_eu: _LocaleNames_eu$$static;
            interface _LocaleNames_eu {
              _getContents(): any[][];
            }
            interface LocaleNames_eu extends CombineTypes<[_LocaleNames_eu, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ewo$$static extends ClassLike {
              new(): LocaleNames_ewo;
            }
            let LocaleNames_ewo: _LocaleNames_ewo$$static;
            interface _LocaleNames_ewo {
              _getContents(): any[][];
            }
            interface LocaleNames_ewo extends CombineTypes<[_LocaleNames_ewo, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_fa$$static extends ClassLike {
              new(): LocaleNames_fa;
            }
            let LocaleNames_fa: _LocaleNames_fa$$static;
            interface _LocaleNames_fa {
              _getContents(): any[][];
            }
            interface LocaleNames_fa extends CombineTypes<[_LocaleNames_fa, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_fa_AF$$static extends ClassLike {
              new(): LocaleNames_fa_AF;
            }
            let LocaleNames_fa_AF: _LocaleNames_fa_AF$$static;
            interface _LocaleNames_fa_AF {
              _getContents(): any[][];
            }
            interface LocaleNames_fa_AF extends CombineTypes<[_LocaleNames_fa_AF, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ff$$static extends ClassLike {
              new(): LocaleNames_ff;
            }
            let LocaleNames_ff: _LocaleNames_ff$$static;
            interface _LocaleNames_ff {
              _getContents(): any[][];
            }
            interface LocaleNames_ff extends CombineTypes<[_LocaleNames_ff, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ff_Adlm$$static extends ClassLike {
              new(): LocaleNames_ff_Adlm;
            }
            let LocaleNames_ff_Adlm: _LocaleNames_ff_Adlm$$static;
            interface _LocaleNames_ff_Adlm {
              _getContents(): any[][];
            }
            interface LocaleNames_ff_Adlm extends CombineTypes<[_LocaleNames_ff_Adlm, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_fi$$static extends ClassLike {
              new(): LocaleNames_fi;
            }
            let LocaleNames_fi: _LocaleNames_fi$$static;
            interface _LocaleNames_fi {
              _getContents(): any[][];
            }
            interface LocaleNames_fi extends CombineTypes<[_LocaleNames_fi, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_fil$$static extends ClassLike {
              new(): LocaleNames_fil;
            }
            let LocaleNames_fil: _LocaleNames_fil$$static;
            interface _LocaleNames_fil {
              _getContents(): any[][];
            }
            interface LocaleNames_fil extends CombineTypes<[_LocaleNames_fil, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_fo$$static extends ClassLike {
              new(): LocaleNames_fo;
            }
            let LocaleNames_fo: _LocaleNames_fo$$static;
            interface _LocaleNames_fo {
              _getContents(): any[][];
            }
            interface LocaleNames_fo extends CombineTypes<[_LocaleNames_fo, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_fr$$static extends ClassLike {
              new(): LocaleNames_fr;
            }
            let LocaleNames_fr: _LocaleNames_fr$$static;
            interface _LocaleNames_fr {
              _getContents(): any[][];
            }
            interface LocaleNames_fr extends CombineTypes<[_LocaleNames_fr, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_fr_BE$$static extends ClassLike {
              new(): LocaleNames_fr_BE;
            }
            let LocaleNames_fr_BE: _LocaleNames_fr_BE$$static;
            interface _LocaleNames_fr_BE {
              _getContents(): any[][];
            }
            interface LocaleNames_fr_BE extends CombineTypes<[_LocaleNames_fr_BE, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_fr_CA$$static extends ClassLike {
              new(): LocaleNames_fr_CA;
            }
            let LocaleNames_fr_CA: _LocaleNames_fr_CA$$static;
            interface _LocaleNames_fr_CA {
              _getContents(): any[][];
            }
            interface LocaleNames_fr_CA extends CombineTypes<[_LocaleNames_fr_CA, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_fr_CH$$static extends ClassLike {
              new(): LocaleNames_fr_CH;
            }
            let LocaleNames_fr_CH: _LocaleNames_fr_CH$$static;
            interface _LocaleNames_fr_CH {
              _getContents(): any[][];
            }
            interface LocaleNames_fr_CH extends CombineTypes<[_LocaleNames_fr_CH, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_frr$$static extends ClassLike {
              new(): LocaleNames_frr;
            }
            let LocaleNames_frr: _LocaleNames_frr$$static;
            interface _LocaleNames_frr {
              _getContents(): any[][];
            }
            interface LocaleNames_frr extends CombineTypes<[_LocaleNames_frr, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_fur$$static extends ClassLike {
              new(): LocaleNames_fur;
            }
            let LocaleNames_fur: _LocaleNames_fur$$static;
            interface _LocaleNames_fur {
              _getContents(): any[][];
            }
            interface LocaleNames_fur extends CombineTypes<[_LocaleNames_fur, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_fy$$static extends ClassLike {
              new(): LocaleNames_fy;
            }
            let LocaleNames_fy: _LocaleNames_fy$$static;
            interface _LocaleNames_fy {
              _getContents(): any[][];
            }
            interface LocaleNames_fy extends CombineTypes<[_LocaleNames_fy, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ga$$static extends ClassLike {
              new(): LocaleNames_ga;
            }
            let LocaleNames_ga: _LocaleNames_ga$$static;
            interface _LocaleNames_ga {
              _getContents(): any[][];
            }
            interface LocaleNames_ga extends CombineTypes<[_LocaleNames_ga, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_gd$$static extends ClassLike {
              new(): LocaleNames_gd;
            }
            let LocaleNames_gd: _LocaleNames_gd$$static;
            interface _LocaleNames_gd {
              _getContents(): any[][];
            }
            interface LocaleNames_gd extends CombineTypes<[_LocaleNames_gd, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_gl$$static extends ClassLike {
              new(): LocaleNames_gl;
            }
            let LocaleNames_gl: _LocaleNames_gl$$static;
            interface _LocaleNames_gl {
              _getContents(): any[][];
            }
            interface LocaleNames_gl extends CombineTypes<[_LocaleNames_gl, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_gsw$$static extends ClassLike {
              new(): LocaleNames_gsw;
            }
            let LocaleNames_gsw: _LocaleNames_gsw$$static;
            interface _LocaleNames_gsw {
              _getContents(): any[][];
            }
            interface LocaleNames_gsw extends CombineTypes<[_LocaleNames_gsw, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_gu$$static extends ClassLike {
              new(): LocaleNames_gu;
            }
            let LocaleNames_gu: _LocaleNames_gu$$static;
            interface _LocaleNames_gu {
              _getContents(): any[][];
            }
            interface LocaleNames_gu extends CombineTypes<[_LocaleNames_gu, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_guz$$static extends ClassLike {
              new(): LocaleNames_guz;
            }
            let LocaleNames_guz: _LocaleNames_guz$$static;
            interface _LocaleNames_guz {
              _getContents(): any[][];
            }
            interface LocaleNames_guz extends CombineTypes<[_LocaleNames_guz, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_gv$$static extends ClassLike {
              new(): LocaleNames_gv;
            }
            let LocaleNames_gv: _LocaleNames_gv$$static;
            interface _LocaleNames_gv {
              _getContents(): any[][];
            }
            interface LocaleNames_gv extends CombineTypes<[_LocaleNames_gv, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ha$$static extends ClassLike {
              new(): LocaleNames_ha;
            }
            let LocaleNames_ha: _LocaleNames_ha$$static;
            interface _LocaleNames_ha {
              _getContents(): any[][];
            }
            interface LocaleNames_ha extends CombineTypes<[_LocaleNames_ha, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ha_NE$$static extends ClassLike {
              new(): LocaleNames_ha_NE;
            }
            let LocaleNames_ha_NE: _LocaleNames_ha_NE$$static;
            interface _LocaleNames_ha_NE {
              _getContents(): any[][];
            }
            interface LocaleNames_ha_NE extends CombineTypes<[_LocaleNames_ha_NE, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_haw$$static extends ClassLike {
              new(): LocaleNames_haw;
            }
            let LocaleNames_haw: _LocaleNames_haw$$static;
            interface _LocaleNames_haw {
              _getContents(): any[][];
            }
            interface LocaleNames_haw extends CombineTypes<[_LocaleNames_haw, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_he$$static extends ClassLike {
              new(): LocaleNames_he;
            }
            let LocaleNames_he: _LocaleNames_he$$static;
            interface _LocaleNames_he {
              _getContents(): any[][];
            }
            interface LocaleNames_he extends CombineTypes<[_LocaleNames_he, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_hi$$static extends ClassLike {
              new(): LocaleNames_hi;
            }
            let LocaleNames_hi: _LocaleNames_hi$$static;
            interface _LocaleNames_hi {
              _getContents(): any[][];
            }
            interface LocaleNames_hi extends CombineTypes<[_LocaleNames_hi, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_hi_Latn$$static extends ClassLike {
              new(): LocaleNames_hi_Latn;
            }
            let LocaleNames_hi_Latn: _LocaleNames_hi_Latn$$static;
            interface _LocaleNames_hi_Latn {
              _getContents(): any[][];
            }
            interface LocaleNames_hi_Latn extends CombineTypes<[_LocaleNames_hi_Latn, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_hr$$static extends ClassLike {
              new(): LocaleNames_hr;
            }
            let LocaleNames_hr: _LocaleNames_hr$$static;
            interface _LocaleNames_hr {
              _getContents(): any[][];
            }
            interface LocaleNames_hr extends CombineTypes<[_LocaleNames_hr, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_hsb$$static extends ClassLike {
              new(): LocaleNames_hsb;
            }
            let LocaleNames_hsb: _LocaleNames_hsb$$static;
            interface _LocaleNames_hsb {
              _getContents(): any[][];
            }
            interface LocaleNames_hsb extends CombineTypes<[_LocaleNames_hsb, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_hu$$static extends ClassLike {
              new(): LocaleNames_hu;
            }
            let LocaleNames_hu: _LocaleNames_hu$$static;
            interface _LocaleNames_hu {
              _getContents(): any[][];
            }
            interface LocaleNames_hu extends CombineTypes<[_LocaleNames_hu, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_hy$$static extends ClassLike {
              new(): LocaleNames_hy;
            }
            let LocaleNames_hy: _LocaleNames_hy$$static;
            interface _LocaleNames_hy {
              _getContents(): any[][];
            }
            interface LocaleNames_hy extends CombineTypes<[_LocaleNames_hy, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ia$$static extends ClassLike {
              new(): LocaleNames_ia;
            }
            let LocaleNames_ia: _LocaleNames_ia$$static;
            interface _LocaleNames_ia {
              _getContents(): any[][];
            }
            interface LocaleNames_ia extends CombineTypes<[_LocaleNames_ia, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_id$$static extends ClassLike {
              new(): LocaleNames_id;
            }
            let LocaleNames_id: _LocaleNames_id$$static;
            interface _LocaleNames_id {
              _getContents(): any[][];
            }
            interface LocaleNames_id extends CombineTypes<[_LocaleNames_id, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ig$$static extends ClassLike {
              new(): LocaleNames_ig;
            }
            let LocaleNames_ig: _LocaleNames_ig$$static;
            interface _LocaleNames_ig {
              _getContents(): any[][];
            }
            interface LocaleNames_ig extends CombineTypes<[_LocaleNames_ig, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ii$$static extends ClassLike {
              new(): LocaleNames_ii;
            }
            let LocaleNames_ii: _LocaleNames_ii$$static;
            interface _LocaleNames_ii {
              _getContents(): any[][];
            }
            interface LocaleNames_ii extends CombineTypes<[_LocaleNames_ii, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_is$$static extends ClassLike {
              new(): LocaleNames_is;
            }
            let LocaleNames_is: _LocaleNames_is$$static;
            interface _LocaleNames_is {
              _getContents(): any[][];
            }
            interface LocaleNames_is extends CombineTypes<[_LocaleNames_is, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_it$$static extends ClassLike {
              new(): LocaleNames_it;
            }
            let LocaleNames_it: _LocaleNames_it$$static;
            interface _LocaleNames_it {
              _getContents(): any[][];
            }
            interface LocaleNames_it extends CombineTypes<[_LocaleNames_it, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ja$$static extends ClassLike {
              new(): LocaleNames_ja;
            }
            let LocaleNames_ja: _LocaleNames_ja$$static;
            interface _LocaleNames_ja {
              _getContents(): any[][];
            }
            interface LocaleNames_ja extends CombineTypes<[_LocaleNames_ja, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_jgo$$static extends ClassLike {
              new(): LocaleNames_jgo;
            }
            let LocaleNames_jgo: _LocaleNames_jgo$$static;
            interface _LocaleNames_jgo {
              _getContents(): any[][];
            }
            interface LocaleNames_jgo extends CombineTypes<[_LocaleNames_jgo, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_jmc$$static extends ClassLike {
              new(): LocaleNames_jmc;
            }
            let LocaleNames_jmc: _LocaleNames_jmc$$static;
            interface _LocaleNames_jmc {
              _getContents(): any[][];
            }
            interface LocaleNames_jmc extends CombineTypes<[_LocaleNames_jmc, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_jv$$static extends ClassLike {
              new(): LocaleNames_jv;
            }
            let LocaleNames_jv: _LocaleNames_jv$$static;
            interface _LocaleNames_jv {
              _getContents(): any[][];
            }
            interface LocaleNames_jv extends CombineTypes<[_LocaleNames_jv, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ka$$static extends ClassLike {
              new(): LocaleNames_ka;
            }
            let LocaleNames_ka: _LocaleNames_ka$$static;
            interface _LocaleNames_ka {
              _getContents(): any[][];
            }
            interface LocaleNames_ka extends CombineTypes<[_LocaleNames_ka, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_kab$$static extends ClassLike {
              new(): LocaleNames_kab;
            }
            let LocaleNames_kab: _LocaleNames_kab$$static;
            interface _LocaleNames_kab {
              _getContents(): any[][];
            }
            interface LocaleNames_kab extends CombineTypes<[_LocaleNames_kab, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_kam$$static extends ClassLike {
              new(): LocaleNames_kam;
            }
            let LocaleNames_kam: _LocaleNames_kam$$static;
            interface _LocaleNames_kam {
              _getContents(): any[][];
            }
            interface LocaleNames_kam extends CombineTypes<[_LocaleNames_kam, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_kde$$static extends ClassLike {
              new(): LocaleNames_kde;
            }
            let LocaleNames_kde: _LocaleNames_kde$$static;
            interface _LocaleNames_kde {
              _getContents(): any[][];
            }
            interface LocaleNames_kde extends CombineTypes<[_LocaleNames_kde, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_kea$$static extends ClassLike {
              new(): LocaleNames_kea;
            }
            let LocaleNames_kea: _LocaleNames_kea$$static;
            interface _LocaleNames_kea {
              _getContents(): any[][];
            }
            interface LocaleNames_kea extends CombineTypes<[_LocaleNames_kea, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_kgp$$static extends ClassLike {
              new(): LocaleNames_kgp;
            }
            let LocaleNames_kgp: _LocaleNames_kgp$$static;
            interface _LocaleNames_kgp {
              _getContents(): any[][];
            }
            interface LocaleNames_kgp extends CombineTypes<[_LocaleNames_kgp, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_khq$$static extends ClassLike {
              new(): LocaleNames_khq;
            }
            let LocaleNames_khq: _LocaleNames_khq$$static;
            interface _LocaleNames_khq {
              _getContents(): any[][];
            }
            interface LocaleNames_khq extends CombineTypes<[_LocaleNames_khq, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ki$$static extends ClassLike {
              new(): LocaleNames_ki;
            }
            let LocaleNames_ki: _LocaleNames_ki$$static;
            interface _LocaleNames_ki {
              _getContents(): any[][];
            }
            interface LocaleNames_ki extends CombineTypes<[_LocaleNames_ki, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_kk$$static extends ClassLike {
              new(): LocaleNames_kk;
            }
            let LocaleNames_kk: _LocaleNames_kk$$static;
            interface _LocaleNames_kk {
              _getContents(): any[][];
            }
            interface LocaleNames_kk extends CombineTypes<[_LocaleNames_kk, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_kkj$$static extends ClassLike {
              new(): LocaleNames_kkj;
            }
            let LocaleNames_kkj: _LocaleNames_kkj$$static;
            interface _LocaleNames_kkj {
              _getContents(): any[][];
            }
            interface LocaleNames_kkj extends CombineTypes<[_LocaleNames_kkj, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_kl$$static extends ClassLike {
              new(): LocaleNames_kl;
            }
            let LocaleNames_kl: _LocaleNames_kl$$static;
            interface _LocaleNames_kl {
              _getContents(): any[][];
            }
            interface LocaleNames_kl extends CombineTypes<[_LocaleNames_kl, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_kln$$static extends ClassLike {
              new(): LocaleNames_kln;
            }
            let LocaleNames_kln: _LocaleNames_kln$$static;
            interface _LocaleNames_kln {
              _getContents(): any[][];
            }
            interface LocaleNames_kln extends CombineTypes<[_LocaleNames_kln, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_km$$static extends ClassLike {
              new(): LocaleNames_km;
            }
            let LocaleNames_km: _LocaleNames_km$$static;
            interface _LocaleNames_km {
              _getContents(): any[][];
            }
            interface LocaleNames_km extends CombineTypes<[_LocaleNames_km, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_kn$$static extends ClassLike {
              new(): LocaleNames_kn;
            }
            let LocaleNames_kn: _LocaleNames_kn$$static;
            interface _LocaleNames_kn {
              _getContents(): any[][];
            }
            interface LocaleNames_kn extends CombineTypes<[_LocaleNames_kn, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ko$$static extends ClassLike {
              new(): LocaleNames_ko;
            }
            let LocaleNames_ko: _LocaleNames_ko$$static;
            interface _LocaleNames_ko {
              _getContents(): any[][];
            }
            interface LocaleNames_ko extends CombineTypes<[_LocaleNames_ko, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ko_KP$$static extends ClassLike {
              new(): LocaleNames_ko_KP;
            }
            let LocaleNames_ko_KP: _LocaleNames_ko_KP$$static;
            interface _LocaleNames_ko_KP {
              _getContents(): any[][];
            }
            interface LocaleNames_ko_KP extends CombineTypes<[_LocaleNames_ko_KP, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_kok$$static extends ClassLike {
              new(): LocaleNames_kok;
            }
            let LocaleNames_kok: _LocaleNames_kok$$static;
            interface _LocaleNames_kok {
              _getContents(): any[][];
            }
            interface LocaleNames_kok extends CombineTypes<[_LocaleNames_kok, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ks$$static extends ClassLike {
              new(): LocaleNames_ks;
            }
            let LocaleNames_ks: _LocaleNames_ks$$static;
            interface _LocaleNames_ks {
              _getContents(): any[][];
            }
            interface LocaleNames_ks extends CombineTypes<[_LocaleNames_ks, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ks_Deva$$static extends ClassLike {
              new(): LocaleNames_ks_Deva;
            }
            let LocaleNames_ks_Deva: _LocaleNames_ks_Deva$$static;
            interface _LocaleNames_ks_Deva {
              _getContents(): any[][];
            }
            interface LocaleNames_ks_Deva extends CombineTypes<[_LocaleNames_ks_Deva, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ksb$$static extends ClassLike {
              new(): LocaleNames_ksb;
            }
            let LocaleNames_ksb: _LocaleNames_ksb$$static;
            interface _LocaleNames_ksb {
              _getContents(): any[][];
            }
            interface LocaleNames_ksb extends CombineTypes<[_LocaleNames_ksb, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ksf$$static extends ClassLike {
              new(): LocaleNames_ksf;
            }
            let LocaleNames_ksf: _LocaleNames_ksf$$static;
            interface _LocaleNames_ksf {
              _getContents(): any[][];
            }
            interface LocaleNames_ksf extends CombineTypes<[_LocaleNames_ksf, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ksh$$static extends ClassLike {
              new(): LocaleNames_ksh;
            }
            let LocaleNames_ksh: _LocaleNames_ksh$$static;
            interface _LocaleNames_ksh {
              _getContents(): any[][];
            }
            interface LocaleNames_ksh extends CombineTypes<[_LocaleNames_ksh, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ku$$static extends ClassLike {
              new(): LocaleNames_ku;
            }
            let LocaleNames_ku: _LocaleNames_ku$$static;
            interface _LocaleNames_ku {
              _getContents(): any[][];
            }
            interface LocaleNames_ku extends CombineTypes<[_LocaleNames_ku, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_kw$$static extends ClassLike {
              new(): LocaleNames_kw;
            }
            let LocaleNames_kw: _LocaleNames_kw$$static;
            interface _LocaleNames_kw {
              _getContents(): any[][];
            }
            interface LocaleNames_kw extends CombineTypes<[_LocaleNames_kw, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ky$$static extends ClassLike {
              new(): LocaleNames_ky;
            }
            let LocaleNames_ky: _LocaleNames_ky$$static;
            interface _LocaleNames_ky {
              _getContents(): any[][];
            }
            interface LocaleNames_ky extends CombineTypes<[_LocaleNames_ky, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_lag$$static extends ClassLike {
              new(): LocaleNames_lag;
            }
            let LocaleNames_lag: _LocaleNames_lag$$static;
            interface _LocaleNames_lag {
              _getContents(): any[][];
            }
            interface LocaleNames_lag extends CombineTypes<[_LocaleNames_lag, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_lb$$static extends ClassLike {
              new(): LocaleNames_lb;
            }
            let LocaleNames_lb: _LocaleNames_lb$$static;
            interface _LocaleNames_lb {
              _getContents(): any[][];
            }
            interface LocaleNames_lb extends CombineTypes<[_LocaleNames_lb, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_lg$$static extends ClassLike {
              new(): LocaleNames_lg;
            }
            let LocaleNames_lg: _LocaleNames_lg$$static;
            interface _LocaleNames_lg {
              _getContents(): any[][];
            }
            interface LocaleNames_lg extends CombineTypes<[_LocaleNames_lg, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_lkt$$static extends ClassLike {
              new(): LocaleNames_lkt;
            }
            let LocaleNames_lkt: _LocaleNames_lkt$$static;
            interface _LocaleNames_lkt {
              _getContents(): any[][];
            }
            interface LocaleNames_lkt extends CombineTypes<[_LocaleNames_lkt, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ln$$static extends ClassLike {
              new(): LocaleNames_ln;
            }
            let LocaleNames_ln: _LocaleNames_ln$$static;
            interface _LocaleNames_ln {
              _getContents(): any[][];
            }
            interface LocaleNames_ln extends CombineTypes<[_LocaleNames_ln, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_lo$$static extends ClassLike {
              new(): LocaleNames_lo;
            }
            let LocaleNames_lo: _LocaleNames_lo$$static;
            interface _LocaleNames_lo {
              _getContents(): any[][];
            }
            interface LocaleNames_lo extends CombineTypes<[_LocaleNames_lo, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_lrc$$static extends ClassLike {
              new(): LocaleNames_lrc;
            }
            let LocaleNames_lrc: _LocaleNames_lrc$$static;
            interface _LocaleNames_lrc {
              _getContents(): any[][];
            }
            interface LocaleNames_lrc extends CombineTypes<[_LocaleNames_lrc, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_lt$$static extends ClassLike {
              new(): LocaleNames_lt;
            }
            let LocaleNames_lt: _LocaleNames_lt$$static;
            interface _LocaleNames_lt {
              _getContents(): any[][];
            }
            interface LocaleNames_lt extends CombineTypes<[_LocaleNames_lt, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_lu$$static extends ClassLike {
              new(): LocaleNames_lu;
            }
            let LocaleNames_lu: _LocaleNames_lu$$static;
            interface _LocaleNames_lu {
              _getContents(): any[][];
            }
            interface LocaleNames_lu extends CombineTypes<[_LocaleNames_lu, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_luo$$static extends ClassLike {
              new(): LocaleNames_luo;
            }
            let LocaleNames_luo: _LocaleNames_luo$$static;
            interface _LocaleNames_luo {
              _getContents(): any[][];
            }
            interface LocaleNames_luo extends CombineTypes<[_LocaleNames_luo, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_luy$$static extends ClassLike {
              new(): LocaleNames_luy;
            }
            let LocaleNames_luy: _LocaleNames_luy$$static;
            interface _LocaleNames_luy {
              _getContents(): any[][];
            }
            interface LocaleNames_luy extends CombineTypes<[_LocaleNames_luy, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_lv$$static extends ClassLike {
              new(): LocaleNames_lv;
            }
            let LocaleNames_lv: _LocaleNames_lv$$static;
            interface _LocaleNames_lv {
              _getContents(): any[][];
            }
            interface LocaleNames_lv extends CombineTypes<[_LocaleNames_lv, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_mai$$static extends ClassLike {
              new(): LocaleNames_mai;
            }
            let LocaleNames_mai: _LocaleNames_mai$$static;
            interface _LocaleNames_mai {
              _getContents(): any[][];
            }
            interface LocaleNames_mai extends CombineTypes<[_LocaleNames_mai, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_mas$$static extends ClassLike {
              new(): LocaleNames_mas;
            }
            let LocaleNames_mas: _LocaleNames_mas$$static;
            interface _LocaleNames_mas {
              _getContents(): any[][];
            }
            interface LocaleNames_mas extends CombineTypes<[_LocaleNames_mas, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_mdf$$static extends ClassLike {
              new(): LocaleNames_mdf;
            }
            let LocaleNames_mdf: _LocaleNames_mdf$$static;
            interface _LocaleNames_mdf {
              _getContents(): any[][];
            }
            interface LocaleNames_mdf extends CombineTypes<[_LocaleNames_mdf, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_mer$$static extends ClassLike {
              new(): LocaleNames_mer;
            }
            let LocaleNames_mer: _LocaleNames_mer$$static;
            interface _LocaleNames_mer {
              _getContents(): any[][];
            }
            interface LocaleNames_mer extends CombineTypes<[_LocaleNames_mer, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_mfe$$static extends ClassLike {
              new(): LocaleNames_mfe;
            }
            let LocaleNames_mfe: _LocaleNames_mfe$$static;
            interface _LocaleNames_mfe {
              _getContents(): any[][];
            }
            interface LocaleNames_mfe extends CombineTypes<[_LocaleNames_mfe, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_mg$$static extends ClassLike {
              new(): LocaleNames_mg;
            }
            let LocaleNames_mg: _LocaleNames_mg$$static;
            interface _LocaleNames_mg {
              _getContents(): any[][];
            }
            interface LocaleNames_mg extends CombineTypes<[_LocaleNames_mg, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_mgh$$static extends ClassLike {
              new(): LocaleNames_mgh;
            }
            let LocaleNames_mgh: _LocaleNames_mgh$$static;
            interface _LocaleNames_mgh {
              _getContents(): any[][];
            }
            interface LocaleNames_mgh extends CombineTypes<[_LocaleNames_mgh, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_mgo$$static extends ClassLike {
              new(): LocaleNames_mgo;
            }
            let LocaleNames_mgo: _LocaleNames_mgo$$static;
            interface _LocaleNames_mgo {
              _getContents(): any[][];
            }
            interface LocaleNames_mgo extends CombineTypes<[_LocaleNames_mgo, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_mi$$static extends ClassLike {
              new(): LocaleNames_mi;
            }
            let LocaleNames_mi: _LocaleNames_mi$$static;
            interface _LocaleNames_mi {
              _getContents(): any[][];
            }
            interface LocaleNames_mi extends CombineTypes<[_LocaleNames_mi, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_mk$$static extends ClassLike {
              new(): LocaleNames_mk;
            }
            let LocaleNames_mk: _LocaleNames_mk$$static;
            interface _LocaleNames_mk {
              _getContents(): any[][];
            }
            interface LocaleNames_mk extends CombineTypes<[_LocaleNames_mk, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ml$$static extends ClassLike {
              new(): LocaleNames_ml;
            }
            let LocaleNames_ml: _LocaleNames_ml$$static;
            interface _LocaleNames_ml {
              _getContents(): any[][];
            }
            interface LocaleNames_ml extends CombineTypes<[_LocaleNames_ml, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_mn$$static extends ClassLike {
              new(): LocaleNames_mn;
            }
            let LocaleNames_mn: _LocaleNames_mn$$static;
            interface _LocaleNames_mn {
              _getContents(): any[][];
            }
            interface LocaleNames_mn extends CombineTypes<[_LocaleNames_mn, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_mni$$static extends ClassLike {
              new(): LocaleNames_mni;
            }
            let LocaleNames_mni: _LocaleNames_mni$$static;
            interface _LocaleNames_mni {
              _getContents(): any[][];
            }
            interface LocaleNames_mni extends CombineTypes<[_LocaleNames_mni, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_mr$$static extends ClassLike {
              new(): LocaleNames_mr;
            }
            let LocaleNames_mr: _LocaleNames_mr$$static;
            interface _LocaleNames_mr {
              _getContents(): any[][];
            }
            interface LocaleNames_mr extends CombineTypes<[_LocaleNames_mr, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ms$$static extends ClassLike {
              new(): LocaleNames_ms;
            }
            let LocaleNames_ms: _LocaleNames_ms$$static;
            interface _LocaleNames_ms {
              _getContents(): any[][];
            }
            interface LocaleNames_ms extends CombineTypes<[_LocaleNames_ms, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_mt$$static extends ClassLike {
              new(): LocaleNames_mt;
            }
            let LocaleNames_mt: _LocaleNames_mt$$static;
            interface _LocaleNames_mt {
              _getContents(): any[][];
            }
            interface LocaleNames_mt extends CombineTypes<[_LocaleNames_mt, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_mua$$static extends ClassLike {
              new(): LocaleNames_mua;
            }
            let LocaleNames_mua: _LocaleNames_mua$$static;
            interface _LocaleNames_mua {
              _getContents(): any[][];
            }
            interface LocaleNames_mua extends CombineTypes<[_LocaleNames_mua, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_my$$static extends ClassLike {
              new(): LocaleNames_my;
            }
            let LocaleNames_my: _LocaleNames_my$$static;
            interface _LocaleNames_my {
              _getContents(): any[][];
            }
            interface LocaleNames_my extends CombineTypes<[_LocaleNames_my, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_mzn$$static extends ClassLike {
              new(): LocaleNames_mzn;
            }
            let LocaleNames_mzn: _LocaleNames_mzn$$static;
            interface _LocaleNames_mzn {
              _getContents(): any[][];
            }
            interface LocaleNames_mzn extends CombineTypes<[_LocaleNames_mzn, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_naq$$static extends ClassLike {
              new(): LocaleNames_naq;
            }
            let LocaleNames_naq: _LocaleNames_naq$$static;
            interface _LocaleNames_naq {
              _getContents(): any[][];
            }
            interface LocaleNames_naq extends CombineTypes<[_LocaleNames_naq, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_nd$$static extends ClassLike {
              new(): LocaleNames_nd;
            }
            let LocaleNames_nd: _LocaleNames_nd$$static;
            interface _LocaleNames_nd {
              _getContents(): any[][];
            }
            interface LocaleNames_nd extends CombineTypes<[_LocaleNames_nd, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ne$$static extends ClassLike {
              new(): LocaleNames_ne;
            }
            let LocaleNames_ne: _LocaleNames_ne$$static;
            interface _LocaleNames_ne {
              _getContents(): any[][];
            }
            interface LocaleNames_ne extends CombineTypes<[_LocaleNames_ne, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_nl$$static extends ClassLike {
              new(): LocaleNames_nl;
            }
            let LocaleNames_nl: _LocaleNames_nl$$static;
            interface _LocaleNames_nl {
              _getContents(): any[][];
            }
            interface LocaleNames_nl extends CombineTypes<[_LocaleNames_nl, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_nmg$$static extends ClassLike {
              new(): LocaleNames_nmg;
            }
            let LocaleNames_nmg: _LocaleNames_nmg$$static;
            interface _LocaleNames_nmg {
              _getContents(): any[][];
            }
            interface LocaleNames_nmg extends CombineTypes<[_LocaleNames_nmg, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_nn$$static extends ClassLike {
              new(): LocaleNames_nn;
            }
            let LocaleNames_nn: _LocaleNames_nn$$static;
            interface _LocaleNames_nn {
              _getContents(): any[][];
            }
            interface LocaleNames_nn extends CombineTypes<[_LocaleNames_nn, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_nnh$$static extends ClassLike {
              new(): LocaleNames_nnh;
            }
            let LocaleNames_nnh: _LocaleNames_nnh$$static;
            interface _LocaleNames_nnh {
              _getContents(): any[][];
            }
            interface LocaleNames_nnh extends CombineTypes<[_LocaleNames_nnh, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_no$$static extends ClassLike {
              new(): LocaleNames_no;
            }
            let LocaleNames_no: _LocaleNames_no$$static;
            interface _LocaleNames_no {
              _getContents(): any[][];
            }
            interface LocaleNames_no extends CombineTypes<[_LocaleNames_no, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_nus$$static extends ClassLike {
              new(): LocaleNames_nus;
            }
            let LocaleNames_nus: _LocaleNames_nus$$static;
            interface _LocaleNames_nus {
              _getContents(): any[][];
            }
            interface LocaleNames_nus extends CombineTypes<[_LocaleNames_nus, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_nyn$$static extends ClassLike {
              new(): LocaleNames_nyn;
            }
            let LocaleNames_nyn: _LocaleNames_nyn$$static;
            interface _LocaleNames_nyn {
              _getContents(): any[][];
            }
            interface LocaleNames_nyn extends CombineTypes<[_LocaleNames_nyn, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_oc$$static extends ClassLike {
              new(): LocaleNames_oc;
            }
            let LocaleNames_oc: _LocaleNames_oc$$static;
            interface _LocaleNames_oc {
              _getContents(): any[][];
            }
            interface LocaleNames_oc extends CombineTypes<[_LocaleNames_oc, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_om$$static extends ClassLike {
              new(): LocaleNames_om;
            }
            let LocaleNames_om: _LocaleNames_om$$static;
            interface _LocaleNames_om {
              _getContents(): any[][];
            }
            interface LocaleNames_om extends CombineTypes<[_LocaleNames_om, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_or$$static extends ClassLike {
              new(): LocaleNames_or;
            }
            let LocaleNames_or: _LocaleNames_or$$static;
            interface _LocaleNames_or {
              _getContents(): any[][];
            }
            interface LocaleNames_or extends CombineTypes<[_LocaleNames_or, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_os$$static extends ClassLike {
              new(): LocaleNames_os;
            }
            let LocaleNames_os: _LocaleNames_os$$static;
            interface _LocaleNames_os {
              _getContents(): any[][];
            }
            interface LocaleNames_os extends CombineTypes<[_LocaleNames_os, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_pa$$static extends ClassLike {
              new(): LocaleNames_pa;
            }
            let LocaleNames_pa: _LocaleNames_pa$$static;
            interface _LocaleNames_pa {
              _getContents(): any[][];
            }
            interface LocaleNames_pa extends CombineTypes<[_LocaleNames_pa, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_pa_Arab$$static extends ClassLike {
              new(): LocaleNames_pa_Arab;
            }
            let LocaleNames_pa_Arab: _LocaleNames_pa_Arab$$static;
            interface _LocaleNames_pa_Arab {
              _getContents(): any[][];
            }
            interface LocaleNames_pa_Arab extends CombineTypes<[_LocaleNames_pa_Arab, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_pcm$$static extends ClassLike {
              new(): LocaleNames_pcm;
            }
            let LocaleNames_pcm: _LocaleNames_pcm$$static;
            interface _LocaleNames_pcm {
              _getContents(): any[][];
            }
            interface LocaleNames_pcm extends CombineTypes<[_LocaleNames_pcm, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_pis$$static extends ClassLike {
              new(): LocaleNames_pis;
            }
            let LocaleNames_pis: _LocaleNames_pis$$static;
            interface _LocaleNames_pis {
              _getContents(): any[][];
            }
            interface LocaleNames_pis extends CombineTypes<[_LocaleNames_pis, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_pl$$static extends ClassLike {
              new(): LocaleNames_pl;
            }
            let LocaleNames_pl: _LocaleNames_pl$$static;
            interface _LocaleNames_pl {
              _getContents(): any[][];
            }
            interface LocaleNames_pl extends CombineTypes<[_LocaleNames_pl, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ps$$static extends ClassLike {
              new(): LocaleNames_ps;
            }
            let LocaleNames_ps: _LocaleNames_ps$$static;
            interface _LocaleNames_ps {
              _getContents(): any[][];
            }
            interface LocaleNames_ps extends CombineTypes<[_LocaleNames_ps, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ps_PK$$static extends ClassLike {
              new(): LocaleNames_ps_PK;
            }
            let LocaleNames_ps_PK: _LocaleNames_ps_PK$$static;
            interface _LocaleNames_ps_PK {
              _getContents(): any[][];
            }
            interface LocaleNames_ps_PK extends CombineTypes<[_LocaleNames_ps_PK, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_pt$$static extends ClassLike {
              new(): LocaleNames_pt;
            }
            let LocaleNames_pt: _LocaleNames_pt$$static;
            interface _LocaleNames_pt {
              _getContents(): any[][];
            }
            interface LocaleNames_pt extends CombineTypes<[_LocaleNames_pt, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_pt_PT$$static extends ClassLike {
              new(): LocaleNames_pt_PT;
            }
            let LocaleNames_pt_PT: _LocaleNames_pt_PT$$static;
            interface _LocaleNames_pt_PT {
              _getContents(): any[][];
            }
            interface LocaleNames_pt_PT extends CombineTypes<[_LocaleNames_pt_PT, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_qu$$static extends ClassLike {
              new(): LocaleNames_qu;
            }
            let LocaleNames_qu: _LocaleNames_qu$$static;
            interface _LocaleNames_qu {
              _getContents(): any[][];
            }
            interface LocaleNames_qu extends CombineTypes<[_LocaleNames_qu, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_raj$$static extends ClassLike {
              new(): LocaleNames_raj;
            }
            let LocaleNames_raj: _LocaleNames_raj$$static;
            interface _LocaleNames_raj {
              _getContents(): any[][];
            }
            interface LocaleNames_raj extends CombineTypes<[_LocaleNames_raj, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_rm$$static extends ClassLike {
              new(): LocaleNames_rm;
            }
            let LocaleNames_rm: _LocaleNames_rm$$static;
            interface _LocaleNames_rm {
              _getContents(): any[][];
            }
            interface LocaleNames_rm extends CombineTypes<[_LocaleNames_rm, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_rn$$static extends ClassLike {
              new(): LocaleNames_rn;
            }
            let LocaleNames_rn: _LocaleNames_rn$$static;
            interface _LocaleNames_rn {
              _getContents(): any[][];
            }
            interface LocaleNames_rn extends CombineTypes<[_LocaleNames_rn, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ro$$static extends ClassLike {
              new(): LocaleNames_ro;
            }
            let LocaleNames_ro: _LocaleNames_ro$$static;
            interface _LocaleNames_ro {
              _getContents(): any[][];
            }
            interface LocaleNames_ro extends CombineTypes<[_LocaleNames_ro, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ro_MD$$static extends ClassLike {
              new(): LocaleNames_ro_MD;
            }
            let LocaleNames_ro_MD: _LocaleNames_ro_MD$$static;
            interface _LocaleNames_ro_MD {
              _getContents(): any[][];
            }
            interface LocaleNames_ro_MD extends CombineTypes<[_LocaleNames_ro_MD, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_rof$$static extends ClassLike {
              new(): LocaleNames_rof;
            }
            let LocaleNames_rof: _LocaleNames_rof$$static;
            interface _LocaleNames_rof {
              _getContents(): any[][];
            }
            interface LocaleNames_rof extends CombineTypes<[_LocaleNames_rof, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ru$$static extends ClassLike {
              new(): LocaleNames_ru;
            }
            let LocaleNames_ru: _LocaleNames_ru$$static;
            interface _LocaleNames_ru {
              _getContents(): any[][];
            }
            interface LocaleNames_ru extends CombineTypes<[_LocaleNames_ru, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ru_UA$$static extends ClassLike {
              new(): LocaleNames_ru_UA;
            }
            let LocaleNames_ru_UA: _LocaleNames_ru_UA$$static;
            interface _LocaleNames_ru_UA {
              _getContents(): any[][];
            }
            interface LocaleNames_ru_UA extends CombineTypes<[_LocaleNames_ru_UA, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_rw$$static extends ClassLike {
              new(): LocaleNames_rw;
            }
            let LocaleNames_rw: _LocaleNames_rw$$static;
            interface _LocaleNames_rw {
              _getContents(): any[][];
            }
            interface LocaleNames_rw extends CombineTypes<[_LocaleNames_rw, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_rwk$$static extends ClassLike {
              new(): LocaleNames_rwk;
            }
            let LocaleNames_rwk: _LocaleNames_rwk$$static;
            interface _LocaleNames_rwk {
              _getContents(): any[][];
            }
            interface LocaleNames_rwk extends CombineTypes<[_LocaleNames_rwk, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_sa$$static extends ClassLike {
              new(): LocaleNames_sa;
            }
            let LocaleNames_sa: _LocaleNames_sa$$static;
            interface _LocaleNames_sa {
              _getContents(): any[][];
            }
            interface LocaleNames_sa extends CombineTypes<[_LocaleNames_sa, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_sah$$static extends ClassLike {
              new(): LocaleNames_sah;
            }
            let LocaleNames_sah: _LocaleNames_sah$$static;
            interface _LocaleNames_sah {
              _getContents(): any[][];
            }
            interface LocaleNames_sah extends CombineTypes<[_LocaleNames_sah, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_saq$$static extends ClassLike {
              new(): LocaleNames_saq;
            }
            let LocaleNames_saq: _LocaleNames_saq$$static;
            interface _LocaleNames_saq {
              _getContents(): any[][];
            }
            interface LocaleNames_saq extends CombineTypes<[_LocaleNames_saq, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_sat$$static extends ClassLike {
              new(): LocaleNames_sat;
            }
            let LocaleNames_sat: _LocaleNames_sat$$static;
            interface _LocaleNames_sat {
              _getContents(): any[][];
            }
            interface LocaleNames_sat extends CombineTypes<[_LocaleNames_sat, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_sbp$$static extends ClassLike {
              new(): LocaleNames_sbp;
            }
            let LocaleNames_sbp: _LocaleNames_sbp$$static;
            interface _LocaleNames_sbp {
              _getContents(): any[][];
            }
            interface LocaleNames_sbp extends CombineTypes<[_LocaleNames_sbp, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_sc$$static extends ClassLike {
              new(): LocaleNames_sc;
            }
            let LocaleNames_sc: _LocaleNames_sc$$static;
            interface _LocaleNames_sc {
              _getContents(): any[][];
            }
            interface LocaleNames_sc extends CombineTypes<[_LocaleNames_sc, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_sd$$static extends ClassLike {
              new(): LocaleNames_sd;
            }
            let LocaleNames_sd: _LocaleNames_sd$$static;
            interface _LocaleNames_sd {
              _getContents(): any[][];
            }
            interface LocaleNames_sd extends CombineTypes<[_LocaleNames_sd, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_sd_Deva$$static extends ClassLike {
              new(): LocaleNames_sd_Deva;
            }
            let LocaleNames_sd_Deva: _LocaleNames_sd_Deva$$static;
            interface _LocaleNames_sd_Deva {
              _getContents(): any[][];
            }
            interface LocaleNames_sd_Deva extends CombineTypes<[_LocaleNames_sd_Deva, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_se$$static extends ClassLike {
              new(): LocaleNames_se;
            }
            let LocaleNames_se: _LocaleNames_se$$static;
            interface _LocaleNames_se {
              _getContents(): any[][];
            }
            interface LocaleNames_se extends CombineTypes<[_LocaleNames_se, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_se_FI$$static extends ClassLike {
              new(): LocaleNames_se_FI;
            }
            let LocaleNames_se_FI: _LocaleNames_se_FI$$static;
            interface _LocaleNames_se_FI {
              _getContents(): any[][];
            }
            interface LocaleNames_se_FI extends CombineTypes<[_LocaleNames_se_FI, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_seh$$static extends ClassLike {
              new(): LocaleNames_seh;
            }
            let LocaleNames_seh: _LocaleNames_seh$$static;
            interface _LocaleNames_seh {
              _getContents(): any[][];
            }
            interface LocaleNames_seh extends CombineTypes<[_LocaleNames_seh, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ses$$static extends ClassLike {
              new(): LocaleNames_ses;
            }
            let LocaleNames_ses: _LocaleNames_ses$$static;
            interface _LocaleNames_ses {
              _getContents(): any[][];
            }
            interface LocaleNames_ses extends CombineTypes<[_LocaleNames_ses, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_sg$$static extends ClassLike {
              new(): LocaleNames_sg;
            }
            let LocaleNames_sg: _LocaleNames_sg$$static;
            interface _LocaleNames_sg {
              _getContents(): any[][];
            }
            interface LocaleNames_sg extends CombineTypes<[_LocaleNames_sg, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_shi$$static extends ClassLike {
              new(): LocaleNames_shi;
            }
            let LocaleNames_shi: _LocaleNames_shi$$static;
            interface _LocaleNames_shi {
              _getContents(): any[][];
            }
            interface LocaleNames_shi extends CombineTypes<[_LocaleNames_shi, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_shi_Latn$$static extends ClassLike {
              new(): LocaleNames_shi_Latn;
            }
            let LocaleNames_shi_Latn: _LocaleNames_shi_Latn$$static;
            interface _LocaleNames_shi_Latn {
              _getContents(): any[][];
            }
            interface LocaleNames_shi_Latn extends CombineTypes<[_LocaleNames_shi_Latn, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_si$$static extends ClassLike {
              new(): LocaleNames_si;
            }
            let LocaleNames_si: _LocaleNames_si$$static;
            interface _LocaleNames_si {
              _getContents(): any[][];
            }
            interface LocaleNames_si extends CombineTypes<[_LocaleNames_si, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_sk$$static extends ClassLike {
              new(): LocaleNames_sk;
            }
            let LocaleNames_sk: _LocaleNames_sk$$static;
            interface _LocaleNames_sk {
              _getContents(): any[][];
            }
            interface LocaleNames_sk extends CombineTypes<[_LocaleNames_sk, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_sl$$static extends ClassLike {
              new(): LocaleNames_sl;
            }
            let LocaleNames_sl: _LocaleNames_sl$$static;
            interface _LocaleNames_sl {
              _getContents(): any[][];
            }
            interface LocaleNames_sl extends CombineTypes<[_LocaleNames_sl, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_smn$$static extends ClassLike {
              new(): LocaleNames_smn;
            }
            let LocaleNames_smn: _LocaleNames_smn$$static;
            interface _LocaleNames_smn {
              _getContents(): any[][];
            }
            interface LocaleNames_smn extends CombineTypes<[_LocaleNames_smn, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_sms$$static extends ClassLike {
              new(): LocaleNames_sms;
            }
            let LocaleNames_sms: _LocaleNames_sms$$static;
            interface _LocaleNames_sms {
              _getContents(): any[][];
            }
            interface LocaleNames_sms extends CombineTypes<[_LocaleNames_sms, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_sn$$static extends ClassLike {
              new(): LocaleNames_sn;
            }
            let LocaleNames_sn: _LocaleNames_sn$$static;
            interface _LocaleNames_sn {
              _getContents(): any[][];
            }
            interface LocaleNames_sn extends CombineTypes<[_LocaleNames_sn, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_so$$static extends ClassLike {
              new(): LocaleNames_so;
            }
            let LocaleNames_so: _LocaleNames_so$$static;
            interface _LocaleNames_so {
              _getContents(): any[][];
            }
            interface LocaleNames_so extends CombineTypes<[_LocaleNames_so, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_sq$$static extends ClassLike {
              new(): LocaleNames_sq;
            }
            let LocaleNames_sq: _LocaleNames_sq$$static;
            interface _LocaleNames_sq {
              _getContents(): any[][];
            }
            interface LocaleNames_sq extends CombineTypes<[_LocaleNames_sq, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_sr$$static extends ClassLike {
              new(): LocaleNames_sr;
            }
            let LocaleNames_sr: _LocaleNames_sr$$static;
            interface _LocaleNames_sr {
              _getContents(): any[][];
            }
            interface LocaleNames_sr extends CombineTypes<[_LocaleNames_sr, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_sr_Cyrl_BA$$static extends ClassLike {
              new(): LocaleNames_sr_Cyrl_BA;
            }
            let LocaleNames_sr_Cyrl_BA: _LocaleNames_sr_Cyrl_BA$$static;
            interface _LocaleNames_sr_Cyrl_BA {
              _getContents(): any[][];
            }
            interface LocaleNames_sr_Cyrl_BA extends CombineTypes<[_LocaleNames_sr_Cyrl_BA, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_sr_Cyrl_ME$$static extends ClassLike {
              new(): LocaleNames_sr_Cyrl_ME;
            }
            let LocaleNames_sr_Cyrl_ME: _LocaleNames_sr_Cyrl_ME$$static;
            interface _LocaleNames_sr_Cyrl_ME {
              _getContents(): any[][];
            }
            interface LocaleNames_sr_Cyrl_ME extends CombineTypes<[_LocaleNames_sr_Cyrl_ME, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_sr_Cyrl_XK$$static extends ClassLike {
              new(): LocaleNames_sr_Cyrl_XK;
            }
            let LocaleNames_sr_Cyrl_XK: _LocaleNames_sr_Cyrl_XK$$static;
            interface _LocaleNames_sr_Cyrl_XK {
              _getContents(): any[][];
            }
            interface LocaleNames_sr_Cyrl_XK extends CombineTypes<[_LocaleNames_sr_Cyrl_XK, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_sr_Latn$$static extends ClassLike {
              new(): LocaleNames_sr_Latn;
            }
            let LocaleNames_sr_Latn: _LocaleNames_sr_Latn$$static;
            interface _LocaleNames_sr_Latn {
              _getContents(): any[][];
            }
            interface LocaleNames_sr_Latn extends CombineTypes<[_LocaleNames_sr_Latn, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_sr_Latn_BA$$static extends ClassLike {
              new(): LocaleNames_sr_Latn_BA;
            }
            let LocaleNames_sr_Latn_BA: _LocaleNames_sr_Latn_BA$$static;
            interface _LocaleNames_sr_Latn_BA {
              _getContents(): any[][];
            }
            interface LocaleNames_sr_Latn_BA extends CombineTypes<[_LocaleNames_sr_Latn_BA, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_sr_Latn_ME$$static extends ClassLike {
              new(): LocaleNames_sr_Latn_ME;
            }
            let LocaleNames_sr_Latn_ME: _LocaleNames_sr_Latn_ME$$static;
            interface _LocaleNames_sr_Latn_ME {
              _getContents(): any[][];
            }
            interface LocaleNames_sr_Latn_ME extends CombineTypes<[_LocaleNames_sr_Latn_ME, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_sr_Latn_XK$$static extends ClassLike {
              new(): LocaleNames_sr_Latn_XK;
            }
            let LocaleNames_sr_Latn_XK: _LocaleNames_sr_Latn_XK$$static;
            interface _LocaleNames_sr_Latn_XK {
              _getContents(): any[][];
            }
            interface LocaleNames_sr_Latn_XK extends CombineTypes<[_LocaleNames_sr_Latn_XK, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_su$$static extends ClassLike {
              new(): LocaleNames_su;
            }
            let LocaleNames_su: _LocaleNames_su$$static;
            interface _LocaleNames_su {
              _getContents(): any[][];
            }
            interface LocaleNames_su extends CombineTypes<[_LocaleNames_su, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_sv$$static extends ClassLike {
              new(): LocaleNames_sv;
            }
            let LocaleNames_sv: _LocaleNames_sv$$static;
            interface _LocaleNames_sv {
              _getContents(): any[][];
            }
            interface LocaleNames_sv extends CombineTypes<[_LocaleNames_sv, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_sv_FI$$static extends ClassLike {
              new(): LocaleNames_sv_FI;
            }
            let LocaleNames_sv_FI: _LocaleNames_sv_FI$$static;
            interface _LocaleNames_sv_FI {
              _getContents(): any[][];
            }
            interface LocaleNames_sv_FI extends CombineTypes<[_LocaleNames_sv_FI, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_sw$$static extends ClassLike {
              new(): LocaleNames_sw;
            }
            let LocaleNames_sw: _LocaleNames_sw$$static;
            interface _LocaleNames_sw {
              _getContents(): any[][];
            }
            interface LocaleNames_sw extends CombineTypes<[_LocaleNames_sw, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_sw_CD$$static extends ClassLike {
              new(): LocaleNames_sw_CD;
            }
            let LocaleNames_sw_CD: _LocaleNames_sw_CD$$static;
            interface _LocaleNames_sw_CD {
              _getContents(): any[][];
            }
            interface LocaleNames_sw_CD extends CombineTypes<[_LocaleNames_sw_CD, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_sw_KE$$static extends ClassLike {
              new(): LocaleNames_sw_KE;
            }
            let LocaleNames_sw_KE: _LocaleNames_sw_KE$$static;
            interface _LocaleNames_sw_KE {
              _getContents(): any[][];
            }
            interface LocaleNames_sw_KE extends CombineTypes<[_LocaleNames_sw_KE, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ta$$static extends ClassLike {
              new(): LocaleNames_ta;
            }
            let LocaleNames_ta: _LocaleNames_ta$$static;
            interface _LocaleNames_ta {
              _getContents(): any[][];
            }
            interface LocaleNames_ta extends CombineTypes<[_LocaleNames_ta, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_te$$static extends ClassLike {
              new(): LocaleNames_te;
            }
            let LocaleNames_te: _LocaleNames_te$$static;
            interface _LocaleNames_te {
              _getContents(): any[][];
            }
            interface LocaleNames_te extends CombineTypes<[_LocaleNames_te, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_teo$$static extends ClassLike {
              new(): LocaleNames_teo;
            }
            let LocaleNames_teo: _LocaleNames_teo$$static;
            interface _LocaleNames_teo {
              _getContents(): any[][];
            }
            interface LocaleNames_teo extends CombineTypes<[_LocaleNames_teo, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_tg$$static extends ClassLike {
              new(): LocaleNames_tg;
            }
            let LocaleNames_tg: _LocaleNames_tg$$static;
            interface _LocaleNames_tg {
              _getContents(): any[][];
            }
            interface LocaleNames_tg extends CombineTypes<[_LocaleNames_tg, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_th$$static extends ClassLike {
              new(): LocaleNames_th;
            }
            let LocaleNames_th: _LocaleNames_th$$static;
            interface _LocaleNames_th {
              _getContents(): any[][];
            }
            interface LocaleNames_th extends CombineTypes<[_LocaleNames_th, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ti$$static extends ClassLike {
              new(): LocaleNames_ti;
            }
            let LocaleNames_ti: _LocaleNames_ti$$static;
            interface _LocaleNames_ti {
              _getContents(): any[][];
            }
            interface LocaleNames_ti extends CombineTypes<[_LocaleNames_ti, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ti_ER$$static extends ClassLike {
              new(): LocaleNames_ti_ER;
            }
            let LocaleNames_ti_ER: _LocaleNames_ti_ER$$static;
            interface _LocaleNames_ti_ER {
              _getContents(): any[][];
            }
            interface LocaleNames_ti_ER extends CombineTypes<[_LocaleNames_ti_ER, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_tk$$static extends ClassLike {
              new(): LocaleNames_tk;
            }
            let LocaleNames_tk: _LocaleNames_tk$$static;
            interface _LocaleNames_tk {
              _getContents(): any[][];
            }
            interface LocaleNames_tk extends CombineTypes<[_LocaleNames_tk, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_to$$static extends ClassLike {
              new(): LocaleNames_to;
            }
            let LocaleNames_to: _LocaleNames_to$$static;
            interface _LocaleNames_to {
              _getContents(): any[][];
            }
            interface LocaleNames_to extends CombineTypes<[_LocaleNames_to, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_tok$$static extends ClassLike {
              new(): LocaleNames_tok;
            }
            let LocaleNames_tok: _LocaleNames_tok$$static;
            interface _LocaleNames_tok {
              _getContents(): any[][];
            }
            interface LocaleNames_tok extends CombineTypes<[_LocaleNames_tok, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_tr$$static extends ClassLike {
              new(): LocaleNames_tr;
            }
            let LocaleNames_tr: _LocaleNames_tr$$static;
            interface _LocaleNames_tr {
              _getContents(): any[][];
            }
            interface LocaleNames_tr extends CombineTypes<[_LocaleNames_tr, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_tt$$static extends ClassLike {
              new(): LocaleNames_tt;
            }
            let LocaleNames_tt: _LocaleNames_tt$$static;
            interface _LocaleNames_tt {
              _getContents(): any[][];
            }
            interface LocaleNames_tt extends CombineTypes<[_LocaleNames_tt, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_twq$$static extends ClassLike {
              new(): LocaleNames_twq;
            }
            let LocaleNames_twq: _LocaleNames_twq$$static;
            interface _LocaleNames_twq {
              _getContents(): any[][];
            }
            interface LocaleNames_twq extends CombineTypes<[_LocaleNames_twq, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_tzm$$static extends ClassLike {
              new(): LocaleNames_tzm;
            }
            let LocaleNames_tzm: _LocaleNames_tzm$$static;
            interface _LocaleNames_tzm {
              _getContents(): any[][];
            }
            interface LocaleNames_tzm extends CombineTypes<[_LocaleNames_tzm, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ug$$static extends ClassLike {
              new(): LocaleNames_ug;
            }
            let LocaleNames_ug: _LocaleNames_ug$$static;
            interface _LocaleNames_ug {
              _getContents(): any[][];
            }
            interface LocaleNames_ug extends CombineTypes<[_LocaleNames_ug, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_uk$$static extends ClassLike {
              new(): LocaleNames_uk;
            }
            let LocaleNames_uk: _LocaleNames_uk$$static;
            interface _LocaleNames_uk {
              _getContents(): any[][];
            }
            interface LocaleNames_uk extends CombineTypes<[_LocaleNames_uk, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ur$$static extends ClassLike {
              new(): LocaleNames_ur;
            }
            let LocaleNames_ur: _LocaleNames_ur$$static;
            interface _LocaleNames_ur {
              _getContents(): any[][];
            }
            interface LocaleNames_ur extends CombineTypes<[_LocaleNames_ur, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_ur_IN$$static extends ClassLike {
              new(): LocaleNames_ur_IN;
            }
            let LocaleNames_ur_IN: _LocaleNames_ur_IN$$static;
            interface _LocaleNames_ur_IN {
              _getContents(): any[][];
            }
            interface LocaleNames_ur_IN extends CombineTypes<[_LocaleNames_ur_IN, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_uz$$static extends ClassLike {
              new(): LocaleNames_uz;
            }
            let LocaleNames_uz: _LocaleNames_uz$$static;
            interface _LocaleNames_uz {
              _getContents(): any[][];
            }
            interface LocaleNames_uz extends CombineTypes<[_LocaleNames_uz, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_uz_Arab$$static extends ClassLike {
              new(): LocaleNames_uz_Arab;
            }
            let LocaleNames_uz_Arab: _LocaleNames_uz_Arab$$static;
            interface _LocaleNames_uz_Arab {
              _getContents(): any[][];
            }
            interface LocaleNames_uz_Arab extends CombineTypes<[_LocaleNames_uz_Arab, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_uz_Cyrl$$static extends ClassLike {
              new(): LocaleNames_uz_Cyrl;
            }
            let LocaleNames_uz_Cyrl: _LocaleNames_uz_Cyrl$$static;
            interface _LocaleNames_uz_Cyrl {
              _getContents(): any[][];
            }
            interface LocaleNames_uz_Cyrl extends CombineTypes<[_LocaleNames_uz_Cyrl, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_vai$$static extends ClassLike {
              new(): LocaleNames_vai;
            }
            let LocaleNames_vai: _LocaleNames_vai$$static;
            interface _LocaleNames_vai {
              _getContents(): any[][];
            }
            interface LocaleNames_vai extends CombineTypes<[_LocaleNames_vai, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_vai_Latn$$static extends ClassLike {
              new(): LocaleNames_vai_Latn;
            }
            let LocaleNames_vai_Latn: _LocaleNames_vai_Latn$$static;
            interface _LocaleNames_vai_Latn {
              _getContents(): any[][];
            }
            interface LocaleNames_vai_Latn extends CombineTypes<[_LocaleNames_vai_Latn, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_vi$$static extends ClassLike {
              new(): LocaleNames_vi;
            }
            let LocaleNames_vi: _LocaleNames_vi$$static;
            interface _LocaleNames_vi {
              _getContents(): any[][];
            }
            interface LocaleNames_vi extends CombineTypes<[_LocaleNames_vi, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_vun$$static extends ClassLike {
              new(): LocaleNames_vun;
            }
            let LocaleNames_vun: _LocaleNames_vun$$static;
            interface _LocaleNames_vun {
              _getContents(): any[][];
            }
            interface LocaleNames_vun extends CombineTypes<[_LocaleNames_vun, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_wae$$static extends ClassLike {
              new(): LocaleNames_wae;
            }
            let LocaleNames_wae: _LocaleNames_wae$$static;
            interface _LocaleNames_wae {
              _getContents(): any[][];
            }
            interface LocaleNames_wae extends CombineTypes<[_LocaleNames_wae, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_wo$$static extends ClassLike {
              new(): LocaleNames_wo;
            }
            let LocaleNames_wo: _LocaleNames_wo$$static;
            interface _LocaleNames_wo {
              _getContents(): any[][];
            }
            interface LocaleNames_wo extends CombineTypes<[_LocaleNames_wo, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_xh$$static extends ClassLike {
              new(): LocaleNames_xh;
            }
            let LocaleNames_xh: _LocaleNames_xh$$static;
            interface _LocaleNames_xh {
              _getContents(): any[][];
            }
            interface LocaleNames_xh extends CombineTypes<[_LocaleNames_xh, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_xog$$static extends ClassLike {
              new(): LocaleNames_xog;
            }
            let LocaleNames_xog: _LocaleNames_xog$$static;
            interface _LocaleNames_xog {
              _getContents(): any[][];
            }
            interface LocaleNames_xog extends CombineTypes<[_LocaleNames_xog, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_yav$$static extends ClassLike {
              new(): LocaleNames_yav;
            }
            let LocaleNames_yav: _LocaleNames_yav$$static;
            interface _LocaleNames_yav {
              _getContents(): any[][];
            }
            interface LocaleNames_yav extends CombineTypes<[_LocaleNames_yav, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_yi$$static extends ClassLike {
              new(): LocaleNames_yi;
            }
            let LocaleNames_yi: _LocaleNames_yi$$static;
            interface _LocaleNames_yi {
              _getContents(): any[][];
            }
            interface LocaleNames_yi extends CombineTypes<[_LocaleNames_yi, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_yo$$static extends ClassLike {
              new(): LocaleNames_yo;
            }
            let LocaleNames_yo: _LocaleNames_yo$$static;
            interface _LocaleNames_yo {
              _getContents(): any[][];
            }
            interface LocaleNames_yo extends CombineTypes<[_LocaleNames_yo, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_yo_BJ$$static extends ClassLike {
              new(): LocaleNames_yo_BJ;
            }
            let LocaleNames_yo_BJ: _LocaleNames_yo_BJ$$static;
            interface _LocaleNames_yo_BJ {
              _getContents(): any[][];
            }
            interface LocaleNames_yo_BJ extends CombineTypes<[_LocaleNames_yo_BJ, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_yrl$$static extends ClassLike {
              new(): LocaleNames_yrl;
            }
            let LocaleNames_yrl: _LocaleNames_yrl$$static;
            interface _LocaleNames_yrl {
              _getContents(): any[][];
            }
            interface LocaleNames_yrl extends CombineTypes<[_LocaleNames_yrl, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_yrl_CO$$static extends ClassLike {
              new(): LocaleNames_yrl_CO;
            }
            let LocaleNames_yrl_CO: _LocaleNames_yrl_CO$$static;
            interface _LocaleNames_yrl_CO {
              _getContents(): any[][];
            }
            interface LocaleNames_yrl_CO extends CombineTypes<[_LocaleNames_yrl_CO, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_yrl_VE$$static extends ClassLike {
              new(): LocaleNames_yrl_VE;
            }
            let LocaleNames_yrl_VE: _LocaleNames_yrl_VE$$static;
            interface _LocaleNames_yrl_VE {
              _getContents(): any[][];
            }
            interface LocaleNames_yrl_VE extends CombineTypes<[_LocaleNames_yrl_VE, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_yue$$static extends ClassLike {
              new(): LocaleNames_yue;
            }
            let LocaleNames_yue: _LocaleNames_yue$$static;
            interface _LocaleNames_yue {
              _getContents(): any[][];
            }
            interface LocaleNames_yue extends CombineTypes<[_LocaleNames_yue, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_yue_Hans$$static extends ClassLike {
              new(): LocaleNames_yue_Hans;
            }
            let LocaleNames_yue_Hans: _LocaleNames_yue_Hans$$static;
            interface _LocaleNames_yue_Hans {
              _getContents(): any[][];
            }
            interface LocaleNames_yue_Hans extends CombineTypes<[_LocaleNames_yue_Hans, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_zgh$$static extends ClassLike {
              new(): LocaleNames_zgh;
            }
            let LocaleNames_zgh: _LocaleNames_zgh$$static;
            interface _LocaleNames_zgh {
              _getContents(): any[][];
            }
            interface LocaleNames_zgh extends CombineTypes<[_LocaleNames_zgh, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_zh$$static extends ClassLike {
              new(): LocaleNames_zh;
            }
            let LocaleNames_zh: _LocaleNames_zh$$static;
            interface _LocaleNames_zh {
              _getContents(): any[][];
            }
            interface LocaleNames_zh extends CombineTypes<[_LocaleNames_zh, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_zh_Hant$$static extends ClassLike {
              new(): LocaleNames_zh_Hant;
            }
            let LocaleNames_zh_Hant: _LocaleNames_zh_Hant$$static;
            interface _LocaleNames_zh_Hant {
              _getContents(): any[][];
            }
            interface LocaleNames_zh_Hant extends CombineTypes<[_LocaleNames_zh_Hant, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_zh_Hant_HK$$static extends ClassLike {
              new(): LocaleNames_zh_Hant_HK;
            }
            let LocaleNames_zh_Hant_HK: _LocaleNames_zh_Hant_HK$$static;
            interface _LocaleNames_zh_Hant_HK {
              _getContents(): any[][];
            }
            interface LocaleNames_zh_Hant_HK extends CombineTypes<[_LocaleNames_zh_Hant_HK, sun.util.resources.OpenListResourceBundle]> {}
            interface _LocaleNames_zu$$static extends ClassLike {
              new(): LocaleNames_zu;
            }
            let LocaleNames_zu: _LocaleNames_zu$$static;
            interface _LocaleNames_zu {
              _getContents(): any[][];
            }
            interface LocaleNames_zu extends CombineTypes<[_LocaleNames_zu, sun.util.resources.OpenListResourceBundle]> {}
            interface _TimeZoneNames_af$$static extends ClassLike {
              new(): TimeZoneNames_af;
            }
            let TimeZoneNames_af: _TimeZoneNames_af$$static;
            interface _TimeZoneNames_af {
              _getContents(): any[][];
            }
            interface TimeZoneNames_af extends CombineTypes<[_TimeZoneNames_af, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_am$$static extends ClassLike {
              new(): TimeZoneNames_am;
            }
            let TimeZoneNames_am: _TimeZoneNames_am$$static;
            interface _TimeZoneNames_am {
              _getContents(): any[][];
            }
            interface TimeZoneNames_am extends CombineTypes<[_TimeZoneNames_am, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_ar$$static extends ClassLike {
              new(): TimeZoneNames_ar;
            }
            let TimeZoneNames_ar: _TimeZoneNames_ar$$static;
            interface _TimeZoneNames_ar {
              _getContents(): any[][];
            }
            interface TimeZoneNames_ar extends CombineTypes<[_TimeZoneNames_ar, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_as$$static extends ClassLike {
              new(): TimeZoneNames_as;
            }
            let TimeZoneNames_as: _TimeZoneNames_as$$static;
            interface _TimeZoneNames_as {
              _getContents(): any[][];
            }
            interface TimeZoneNames_as extends CombineTypes<[_TimeZoneNames_as, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_ast$$static extends ClassLike {
              new(): TimeZoneNames_ast;
            }
            let TimeZoneNames_ast: _TimeZoneNames_ast$$static;
            interface _TimeZoneNames_ast {
              _getContents(): any[][];
            }
            interface TimeZoneNames_ast extends CombineTypes<[_TimeZoneNames_ast, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_az$$static extends ClassLike {
              new(): TimeZoneNames_az;
            }
            let TimeZoneNames_az: _TimeZoneNames_az$$static;
            interface _TimeZoneNames_az {
              _getContents(): any[][];
            }
            interface TimeZoneNames_az extends CombineTypes<[_TimeZoneNames_az, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_be$$static extends ClassLike {
              new(): TimeZoneNames_be;
            }
            let TimeZoneNames_be: _TimeZoneNames_be$$static;
            interface _TimeZoneNames_be {
              _getContents(): any[][];
            }
            interface TimeZoneNames_be extends CombineTypes<[_TimeZoneNames_be, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_bg$$static extends ClassLike {
              new(): TimeZoneNames_bg;
            }
            let TimeZoneNames_bg: _TimeZoneNames_bg$$static;
            interface _TimeZoneNames_bg {
              _getContents(): any[][];
            }
            interface TimeZoneNames_bg extends CombineTypes<[_TimeZoneNames_bg, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_bgc$$static extends ClassLike {
              new(): TimeZoneNames_bgc;
            }
            let TimeZoneNames_bgc: _TimeZoneNames_bgc$$static;
            interface _TimeZoneNames_bgc {
              _getContents(): any[][];
            }
            interface TimeZoneNames_bgc extends CombineTypes<[_TimeZoneNames_bgc, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_bho$$static extends ClassLike {
              new(): TimeZoneNames_bho;
            }
            let TimeZoneNames_bho: _TimeZoneNames_bho$$static;
            interface _TimeZoneNames_bho {
              _getContents(): any[][];
            }
            interface TimeZoneNames_bho extends CombineTypes<[_TimeZoneNames_bho, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_bn$$static extends ClassLike {
              new(): TimeZoneNames_bn;
            }
            let TimeZoneNames_bn: _TimeZoneNames_bn$$static;
            interface _TimeZoneNames_bn {
              _getContents(): any[][];
            }
            interface TimeZoneNames_bn extends CombineTypes<[_TimeZoneNames_bn, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_bo$$static extends ClassLike {
              new(): TimeZoneNames_bo;
            }
            let TimeZoneNames_bo: _TimeZoneNames_bo$$static;
            interface _TimeZoneNames_bo {
              _getContents(): any[][];
            }
            interface TimeZoneNames_bo extends CombineTypes<[_TimeZoneNames_bo, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_br$$static extends ClassLike {
              new(): TimeZoneNames_br;
            }
            let TimeZoneNames_br: _TimeZoneNames_br$$static;
            interface _TimeZoneNames_br {
              _getContents(): any[][];
            }
            interface TimeZoneNames_br extends CombineTypes<[_TimeZoneNames_br, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_brx$$static extends ClassLike {
              new(): TimeZoneNames_brx;
            }
            let TimeZoneNames_brx: _TimeZoneNames_brx$$static;
            interface _TimeZoneNames_brx {
              _getContents(): any[][];
            }
            interface TimeZoneNames_brx extends CombineTypes<[_TimeZoneNames_brx, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_bs$$static extends ClassLike {
              new(): TimeZoneNames_bs;
            }
            let TimeZoneNames_bs: _TimeZoneNames_bs$$static;
            interface _TimeZoneNames_bs {
              _getContents(): any[][];
            }
            interface TimeZoneNames_bs extends CombineTypes<[_TimeZoneNames_bs, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_bs_Cyrl$$static extends ClassLike {
              new(): TimeZoneNames_bs_Cyrl;
            }
            let TimeZoneNames_bs_Cyrl: _TimeZoneNames_bs_Cyrl$$static;
            interface _TimeZoneNames_bs_Cyrl {
              _getContents(): any[][];
            }
            interface TimeZoneNames_bs_Cyrl extends CombineTypes<[_TimeZoneNames_bs_Cyrl, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_ca$$static extends ClassLike {
              new(): TimeZoneNames_ca;
            }
            let TimeZoneNames_ca: _TimeZoneNames_ca$$static;
            interface _TimeZoneNames_ca {
              _getContents(): any[][];
            }
            interface TimeZoneNames_ca extends CombineTypes<[_TimeZoneNames_ca, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_ccp$$static extends ClassLike {
              new(): TimeZoneNames_ccp;
            }
            let TimeZoneNames_ccp: _TimeZoneNames_ccp$$static;
            interface _TimeZoneNames_ccp {
              _getContents(): any[][];
            }
            interface TimeZoneNames_ccp extends CombineTypes<[_TimeZoneNames_ccp, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_ce$$static extends ClassLike {
              new(): TimeZoneNames_ce;
            }
            let TimeZoneNames_ce: _TimeZoneNames_ce$$static;
            interface _TimeZoneNames_ce {
              _getContents(): any[][];
            }
            interface TimeZoneNames_ce extends CombineTypes<[_TimeZoneNames_ce, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_ceb$$static extends ClassLike {
              new(): TimeZoneNames_ceb;
            }
            let TimeZoneNames_ceb: _TimeZoneNames_ceb$$static;
            interface _TimeZoneNames_ceb {
              _getContents(): any[][];
            }
            interface TimeZoneNames_ceb extends CombineTypes<[_TimeZoneNames_ceb, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_chr$$static extends ClassLike {
              new(): TimeZoneNames_chr;
            }
            let TimeZoneNames_chr: _TimeZoneNames_chr$$static;
            interface _TimeZoneNames_chr {
              _getContents(): any[][];
            }
            interface TimeZoneNames_chr extends CombineTypes<[_TimeZoneNames_chr, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_cs$$static extends ClassLike {
              new(): TimeZoneNames_cs;
            }
            let TimeZoneNames_cs: _TimeZoneNames_cs$$static;
            interface _TimeZoneNames_cs {
              _getContents(): any[][];
            }
            interface TimeZoneNames_cs extends CombineTypes<[_TimeZoneNames_cs, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_cv$$static extends ClassLike {
              new(): TimeZoneNames_cv;
            }
            let TimeZoneNames_cv: _TimeZoneNames_cv$$static;
            interface _TimeZoneNames_cv {
              _getContents(): any[][];
            }
            interface TimeZoneNames_cv extends CombineTypes<[_TimeZoneNames_cv, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_cy$$static extends ClassLike {
              new(): TimeZoneNames_cy;
            }
            let TimeZoneNames_cy: _TimeZoneNames_cy$$static;
            interface _TimeZoneNames_cy {
              _getContents(): any[][];
            }
            interface TimeZoneNames_cy extends CombineTypes<[_TimeZoneNames_cy, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_da$$static extends ClassLike {
              new(): TimeZoneNames_da;
            }
            let TimeZoneNames_da: _TimeZoneNames_da$$static;
            interface _TimeZoneNames_da {
              _getContents(): any[][];
            }
            interface TimeZoneNames_da extends CombineTypes<[_TimeZoneNames_da, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_de$$static extends ClassLike {
              new(): TimeZoneNames_de;
            }
            let TimeZoneNames_de: _TimeZoneNames_de$$static;
            interface _TimeZoneNames_de {
              _getContents(): any[][];
            }
            interface TimeZoneNames_de extends CombineTypes<[_TimeZoneNames_de, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_de_CH$$static extends ClassLike {
              new(): TimeZoneNames_de_CH;
            }
            let TimeZoneNames_de_CH: _TimeZoneNames_de_CH$$static;
            interface _TimeZoneNames_de_CH {
              _getContents(): any[][];
            }
            interface TimeZoneNames_de_CH extends CombineTypes<[_TimeZoneNames_de_CH, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_doi$$static extends ClassLike {
              new(): TimeZoneNames_doi;
            }
            let TimeZoneNames_doi: _TimeZoneNames_doi$$static;
            interface _TimeZoneNames_doi {
              _getContents(): any[][];
            }
            interface TimeZoneNames_doi extends CombineTypes<[_TimeZoneNames_doi, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_dsb$$static extends ClassLike {
              new(): TimeZoneNames_dsb;
            }
            let TimeZoneNames_dsb: _TimeZoneNames_dsb$$static;
            interface _TimeZoneNames_dsb {
              _getContents(): any[][];
            }
            interface TimeZoneNames_dsb extends CombineTypes<[_TimeZoneNames_dsb, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_dz$$static extends ClassLike {
              new(): TimeZoneNames_dz;
            }
            let TimeZoneNames_dz: _TimeZoneNames_dz$$static;
            interface _TimeZoneNames_dz {
              _getContents(): any[][];
            }
            interface TimeZoneNames_dz extends CombineTypes<[_TimeZoneNames_dz, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_ee$$static extends ClassLike {
              new(): TimeZoneNames_ee;
            }
            let TimeZoneNames_ee: _TimeZoneNames_ee$$static;
            interface _TimeZoneNames_ee {
              _getContents(): any[][];
            }
            interface TimeZoneNames_ee extends CombineTypes<[_TimeZoneNames_ee, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_el$$static extends ClassLike {
              new(): TimeZoneNames_el;
            }
            let TimeZoneNames_el: _TimeZoneNames_el$$static;
            interface _TimeZoneNames_el {
              _getContents(): any[][];
            }
            interface TimeZoneNames_el extends CombineTypes<[_TimeZoneNames_el, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_001$$static extends ClassLike {
              new(): TimeZoneNames_en_001;
            }
            let TimeZoneNames_en_001: _TimeZoneNames_en_001$$static;
            interface _TimeZoneNames_en_001 {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_001 extends CombineTypes<[_TimeZoneNames_en_001, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_150$$static extends ClassLike {
              new(): TimeZoneNames_en_150;
            }
            let TimeZoneNames_en_150: _TimeZoneNames_en_150$$static;
            interface _TimeZoneNames_en_150 {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_150 extends CombineTypes<[_TimeZoneNames_en_150, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_AE$$static extends ClassLike {
              new(): TimeZoneNames_en_AE;
            }
            let TimeZoneNames_en_AE: _TimeZoneNames_en_AE$$static;
            interface _TimeZoneNames_en_AE {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_AE extends CombineTypes<[_TimeZoneNames_en_AE, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_AU$$static extends ClassLike {
              new(): TimeZoneNames_en_AU;
            }
            let TimeZoneNames_en_AU: _TimeZoneNames_en_AU$$static;
            interface _TimeZoneNames_en_AU {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_AU extends CombineTypes<[_TimeZoneNames_en_AU, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_BW$$static extends ClassLike {
              new(): TimeZoneNames_en_BW;
            }
            let TimeZoneNames_en_BW: _TimeZoneNames_en_BW$$static;
            interface _TimeZoneNames_en_BW {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_BW extends CombineTypes<[_TimeZoneNames_en_BW, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_CA$$static extends ClassLike {
              new(): TimeZoneNames_en_CA;
            }
            let TimeZoneNames_en_CA: _TimeZoneNames_en_CA$$static;
            interface _TimeZoneNames_en_CA {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_CA extends CombineTypes<[_TimeZoneNames_en_CA, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_CM$$static extends ClassLike {
              new(): TimeZoneNames_en_CM;
            }
            let TimeZoneNames_en_CM: _TimeZoneNames_en_CM$$static;
            interface _TimeZoneNames_en_CM {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_CM extends CombineTypes<[_TimeZoneNames_en_CM, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_ER$$static extends ClassLike {
              new(): TimeZoneNames_en_ER;
            }
            let TimeZoneNames_en_ER: _TimeZoneNames_en_ER$$static;
            interface _TimeZoneNames_en_ER {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_ER extends CombineTypes<[_TimeZoneNames_en_ER, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_GB$$static extends ClassLike {
              new(): TimeZoneNames_en_GB;
            }
            let TimeZoneNames_en_GB: _TimeZoneNames_en_GB$$static;
            interface _TimeZoneNames_en_GB {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_GB extends CombineTypes<[_TimeZoneNames_en_GB, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_GH$$static extends ClassLike {
              new(): TimeZoneNames_en_GH;
            }
            let TimeZoneNames_en_GH: _TimeZoneNames_en_GH$$static;
            interface _TimeZoneNames_en_GH {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_GH extends CombineTypes<[_TimeZoneNames_en_GH, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_GM$$static extends ClassLike {
              new(): TimeZoneNames_en_GM;
            }
            let TimeZoneNames_en_GM: _TimeZoneNames_en_GM$$static;
            interface _TimeZoneNames_en_GM {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_GM extends CombineTypes<[_TimeZoneNames_en_GM, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_GU$$static extends ClassLike {
              new(): TimeZoneNames_en_GU;
            }
            let TimeZoneNames_en_GU: _TimeZoneNames_en_GU$$static;
            interface _TimeZoneNames_en_GU {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_GU extends CombineTypes<[_TimeZoneNames_en_GU, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_GY$$static extends ClassLike {
              new(): TimeZoneNames_en_GY;
            }
            let TimeZoneNames_en_GY: _TimeZoneNames_en_GY$$static;
            interface _TimeZoneNames_en_GY {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_GY extends CombineTypes<[_TimeZoneNames_en_GY, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_HK$$static extends ClassLike {
              new(): TimeZoneNames_en_HK;
            }
            let TimeZoneNames_en_HK: _TimeZoneNames_en_HK$$static;
            interface _TimeZoneNames_en_HK {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_HK extends CombineTypes<[_TimeZoneNames_en_HK, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_IE$$static extends ClassLike {
              new(): TimeZoneNames_en_IE;
            }
            let TimeZoneNames_en_IE: _TimeZoneNames_en_IE$$static;
            interface _TimeZoneNames_en_IE {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_IE extends CombineTypes<[_TimeZoneNames_en_IE, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_IN$$static extends ClassLike {
              new(): TimeZoneNames_en_IN;
            }
            let TimeZoneNames_en_IN: _TimeZoneNames_en_IN$$static;
            interface _TimeZoneNames_en_IN {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_IN extends CombineTypes<[_TimeZoneNames_en_IN, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_KE$$static extends ClassLike {
              new(): TimeZoneNames_en_KE;
            }
            let TimeZoneNames_en_KE: _TimeZoneNames_en_KE$$static;
            interface _TimeZoneNames_en_KE {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_KE extends CombineTypes<[_TimeZoneNames_en_KE, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_LR$$static extends ClassLike {
              new(): TimeZoneNames_en_LR;
            }
            let TimeZoneNames_en_LR: _TimeZoneNames_en_LR$$static;
            interface _TimeZoneNames_en_LR {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_LR extends CombineTypes<[_TimeZoneNames_en_LR, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_LS$$static extends ClassLike {
              new(): TimeZoneNames_en_LS;
            }
            let TimeZoneNames_en_LS: _TimeZoneNames_en_LS$$static;
            interface _TimeZoneNames_en_LS {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_LS extends CombineTypes<[_TimeZoneNames_en_LS, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_MG$$static extends ClassLike {
              new(): TimeZoneNames_en_MG;
            }
            let TimeZoneNames_en_MG: _TimeZoneNames_en_MG$$static;
            interface _TimeZoneNames_en_MG {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_MG extends CombineTypes<[_TimeZoneNames_en_MG, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_MH$$static extends ClassLike {
              new(): TimeZoneNames_en_MH;
            }
            let TimeZoneNames_en_MH: _TimeZoneNames_en_MH$$static;
            interface _TimeZoneNames_en_MH {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_MH extends CombineTypes<[_TimeZoneNames_en_MH, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_MO$$static extends ClassLike {
              new(): TimeZoneNames_en_MO;
            }
            let TimeZoneNames_en_MO: _TimeZoneNames_en_MO$$static;
            interface _TimeZoneNames_en_MO {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_MO extends CombineTypes<[_TimeZoneNames_en_MO, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_MP$$static extends ClassLike {
              new(): TimeZoneNames_en_MP;
            }
            let TimeZoneNames_en_MP: _TimeZoneNames_en_MP$$static;
            interface _TimeZoneNames_en_MP {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_MP extends CombineTypes<[_TimeZoneNames_en_MP, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_MU$$static extends ClassLike {
              new(): TimeZoneNames_en_MU;
            }
            let TimeZoneNames_en_MU: _TimeZoneNames_en_MU$$static;
            interface _TimeZoneNames_en_MU {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_MU extends CombineTypes<[_TimeZoneNames_en_MU, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_MW$$static extends ClassLike {
              new(): TimeZoneNames_en_MW;
            }
            let TimeZoneNames_en_MW: _TimeZoneNames_en_MW$$static;
            interface _TimeZoneNames_en_MW {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_MW extends CombineTypes<[_TimeZoneNames_en_MW, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_MY$$static extends ClassLike {
              new(): TimeZoneNames_en_MY;
            }
            let TimeZoneNames_en_MY: _TimeZoneNames_en_MY$$static;
            interface _TimeZoneNames_en_MY {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_MY extends CombineTypes<[_TimeZoneNames_en_MY, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_NA$$static extends ClassLike {
              new(): TimeZoneNames_en_NA;
            }
            let TimeZoneNames_en_NA: _TimeZoneNames_en_NA$$static;
            interface _TimeZoneNames_en_NA {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_NA extends CombineTypes<[_TimeZoneNames_en_NA, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_NG$$static extends ClassLike {
              new(): TimeZoneNames_en_NG;
            }
            let TimeZoneNames_en_NG: _TimeZoneNames_en_NG$$static;
            interface _TimeZoneNames_en_NG {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_NG extends CombineTypes<[_TimeZoneNames_en_NG, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_NZ$$static extends ClassLike {
              new(): TimeZoneNames_en_NZ;
            }
            let TimeZoneNames_en_NZ: _TimeZoneNames_en_NZ$$static;
            interface _TimeZoneNames_en_NZ {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_NZ extends CombineTypes<[_TimeZoneNames_en_NZ, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_RW$$static extends ClassLike {
              new(): TimeZoneNames_en_RW;
            }
            let TimeZoneNames_en_RW: _TimeZoneNames_en_RW$$static;
            interface _TimeZoneNames_en_RW {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_RW extends CombineTypes<[_TimeZoneNames_en_RW, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_SD$$static extends ClassLike {
              new(): TimeZoneNames_en_SD;
            }
            let TimeZoneNames_en_SD: _TimeZoneNames_en_SD$$static;
            interface _TimeZoneNames_en_SD {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_SD extends CombineTypes<[_TimeZoneNames_en_SD, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_SG$$static extends ClassLike {
              new(): TimeZoneNames_en_SG;
            }
            let TimeZoneNames_en_SG: _TimeZoneNames_en_SG$$static;
            interface _TimeZoneNames_en_SG {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_SG extends CombineTypes<[_TimeZoneNames_en_SG, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_SL$$static extends ClassLike {
              new(): TimeZoneNames_en_SL;
            }
            let TimeZoneNames_en_SL: _TimeZoneNames_en_SL$$static;
            interface _TimeZoneNames_en_SL {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_SL extends CombineTypes<[_TimeZoneNames_en_SL, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_SS$$static extends ClassLike {
              new(): TimeZoneNames_en_SS;
            }
            let TimeZoneNames_en_SS: _TimeZoneNames_en_SS$$static;
            interface _TimeZoneNames_en_SS {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_SS extends CombineTypes<[_TimeZoneNames_en_SS, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_SZ$$static extends ClassLike {
              new(): TimeZoneNames_en_SZ;
            }
            let TimeZoneNames_en_SZ: _TimeZoneNames_en_SZ$$static;
            interface _TimeZoneNames_en_SZ {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_SZ extends CombineTypes<[_TimeZoneNames_en_SZ, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_TZ$$static extends ClassLike {
              new(): TimeZoneNames_en_TZ;
            }
            let TimeZoneNames_en_TZ: _TimeZoneNames_en_TZ$$static;
            interface _TimeZoneNames_en_TZ {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_TZ extends CombineTypes<[_TimeZoneNames_en_TZ, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_UG$$static extends ClassLike {
              new(): TimeZoneNames_en_UG;
            }
            let TimeZoneNames_en_UG: _TimeZoneNames_en_UG$$static;
            interface _TimeZoneNames_en_UG {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_UG extends CombineTypes<[_TimeZoneNames_en_UG, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_ZA$$static extends ClassLike {
              new(): TimeZoneNames_en_ZA;
            }
            let TimeZoneNames_en_ZA: _TimeZoneNames_en_ZA$$static;
            interface _TimeZoneNames_en_ZA {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_ZA extends CombineTypes<[_TimeZoneNames_en_ZA, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_ZM$$static extends ClassLike {
              new(): TimeZoneNames_en_ZM;
            }
            let TimeZoneNames_en_ZM: _TimeZoneNames_en_ZM$$static;
            interface _TimeZoneNames_en_ZM {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_ZM extends CombineTypes<[_TimeZoneNames_en_ZM, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_en_ZW$$static extends ClassLike {
              new(): TimeZoneNames_en_ZW;
            }
            let TimeZoneNames_en_ZW: _TimeZoneNames_en_ZW$$static;
            interface _TimeZoneNames_en_ZW {
              _getContents(): any[][];
            }
            interface TimeZoneNames_en_ZW extends CombineTypes<[_TimeZoneNames_en_ZW, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_es$$static extends ClassLike {
              new(): TimeZoneNames_es;
            }
            let TimeZoneNames_es: _TimeZoneNames_es$$static;
            interface _TimeZoneNames_es {
              _getContents(): any[][];
            }
            interface TimeZoneNames_es extends CombineTypes<[_TimeZoneNames_es, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_es_419$$static extends ClassLike {
              new(): TimeZoneNames_es_419;
            }
            let TimeZoneNames_es_419: _TimeZoneNames_es_419$$static;
            interface _TimeZoneNames_es_419 {
              _getContents(): any[][];
            }
            interface TimeZoneNames_es_419 extends CombineTypes<[_TimeZoneNames_es_419, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_es_AR$$static extends ClassLike {
              new(): TimeZoneNames_es_AR;
            }
            let TimeZoneNames_es_AR: _TimeZoneNames_es_AR$$static;
            interface _TimeZoneNames_es_AR {
              _getContents(): any[][];
            }
            interface TimeZoneNames_es_AR extends CombineTypes<[_TimeZoneNames_es_AR, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_es_BO$$static extends ClassLike {
              new(): TimeZoneNames_es_BO;
            }
            let TimeZoneNames_es_BO: _TimeZoneNames_es_BO$$static;
            interface _TimeZoneNames_es_BO {
              _getContents(): any[][];
            }
            interface TimeZoneNames_es_BO extends CombineTypes<[_TimeZoneNames_es_BO, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_es_CL$$static extends ClassLike {
              new(): TimeZoneNames_es_CL;
            }
            let TimeZoneNames_es_CL: _TimeZoneNames_es_CL$$static;
            interface _TimeZoneNames_es_CL {
              _getContents(): any[][];
            }
            interface TimeZoneNames_es_CL extends CombineTypes<[_TimeZoneNames_es_CL, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_es_CO$$static extends ClassLike {
              new(): TimeZoneNames_es_CO;
            }
            let TimeZoneNames_es_CO: _TimeZoneNames_es_CO$$static;
            interface _TimeZoneNames_es_CO {
              _getContents(): any[][];
            }
            interface TimeZoneNames_es_CO extends CombineTypes<[_TimeZoneNames_es_CO, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_es_EC$$static extends ClassLike {
              new(): TimeZoneNames_es_EC;
            }
            let TimeZoneNames_es_EC: _TimeZoneNames_es_EC$$static;
            interface _TimeZoneNames_es_EC {
              _getContents(): any[][];
            }
            interface TimeZoneNames_es_EC extends CombineTypes<[_TimeZoneNames_es_EC, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_es_MX$$static extends ClassLike {
              new(): TimeZoneNames_es_MX;
            }
            let TimeZoneNames_es_MX: _TimeZoneNames_es_MX$$static;
            interface _TimeZoneNames_es_MX {
              _getContents(): any[][];
            }
            interface TimeZoneNames_es_MX extends CombineTypes<[_TimeZoneNames_es_MX, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_es_PE$$static extends ClassLike {
              new(): TimeZoneNames_es_PE;
            }
            let TimeZoneNames_es_PE: _TimeZoneNames_es_PE$$static;
            interface _TimeZoneNames_es_PE {
              _getContents(): any[][];
            }
            interface TimeZoneNames_es_PE extends CombineTypes<[_TimeZoneNames_es_PE, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_es_US$$static extends ClassLike {
              new(): TimeZoneNames_es_US;
            }
            let TimeZoneNames_es_US: _TimeZoneNames_es_US$$static;
            interface _TimeZoneNames_es_US {
              _getContents(): any[][];
            }
            interface TimeZoneNames_es_US extends CombineTypes<[_TimeZoneNames_es_US, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_es_UY$$static extends ClassLike {
              new(): TimeZoneNames_es_UY;
            }
            let TimeZoneNames_es_UY: _TimeZoneNames_es_UY$$static;
            interface _TimeZoneNames_es_UY {
              _getContents(): any[][];
            }
            interface TimeZoneNames_es_UY extends CombineTypes<[_TimeZoneNames_es_UY, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_es_VE$$static extends ClassLike {
              new(): TimeZoneNames_es_VE;
            }
            let TimeZoneNames_es_VE: _TimeZoneNames_es_VE$$static;
            interface _TimeZoneNames_es_VE {
              _getContents(): any[][];
            }
            interface TimeZoneNames_es_VE extends CombineTypes<[_TimeZoneNames_es_VE, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_et$$static extends ClassLike {
              new(): TimeZoneNames_et;
            }
            let TimeZoneNames_et: _TimeZoneNames_et$$static;
            interface _TimeZoneNames_et {
              _getContents(): any[][];
            }
            interface TimeZoneNames_et extends CombineTypes<[_TimeZoneNames_et, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_eu$$static extends ClassLike {
              new(): TimeZoneNames_eu;
            }
            let TimeZoneNames_eu: _TimeZoneNames_eu$$static;
            interface _TimeZoneNames_eu {
              _getContents(): any[][];
            }
            interface TimeZoneNames_eu extends CombineTypes<[_TimeZoneNames_eu, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_fa$$static extends ClassLike {
              new(): TimeZoneNames_fa;
            }
            let TimeZoneNames_fa: _TimeZoneNames_fa$$static;
            interface _TimeZoneNames_fa {
              _getContents(): any[][];
            }
            interface TimeZoneNames_fa extends CombineTypes<[_TimeZoneNames_fa, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_ff_Adlm$$static extends ClassLike {
              new(): TimeZoneNames_ff_Adlm;
            }
            let TimeZoneNames_ff_Adlm: _TimeZoneNames_ff_Adlm$$static;
            interface _TimeZoneNames_ff_Adlm {
              _getContents(): any[][];
            }
            interface TimeZoneNames_ff_Adlm extends CombineTypes<[_TimeZoneNames_ff_Adlm, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_fi$$static extends ClassLike {
              new(): TimeZoneNames_fi;
            }
            let TimeZoneNames_fi: _TimeZoneNames_fi$$static;
            interface _TimeZoneNames_fi {
              _getContents(): any[][];
            }
            interface TimeZoneNames_fi extends CombineTypes<[_TimeZoneNames_fi, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_fil$$static extends ClassLike {
              new(): TimeZoneNames_fil;
            }
            let TimeZoneNames_fil: _TimeZoneNames_fil$$static;
            interface _TimeZoneNames_fil {
              _getContents(): any[][];
            }
            interface TimeZoneNames_fil extends CombineTypes<[_TimeZoneNames_fil, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_fo$$static extends ClassLike {
              new(): TimeZoneNames_fo;
            }
            let TimeZoneNames_fo: _TimeZoneNames_fo$$static;
            interface _TimeZoneNames_fo {
              _getContents(): any[][];
            }
            interface TimeZoneNames_fo extends CombineTypes<[_TimeZoneNames_fo, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_fr$$static extends ClassLike {
              new(): TimeZoneNames_fr;
            }
            let TimeZoneNames_fr: _TimeZoneNames_fr$$static;
            interface _TimeZoneNames_fr {
              _getContents(): any[][];
            }
            interface TimeZoneNames_fr extends CombineTypes<[_TimeZoneNames_fr, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_fr_CA$$static extends ClassLike {
              new(): TimeZoneNames_fr_CA;
            }
            let TimeZoneNames_fr_CA: _TimeZoneNames_fr_CA$$static;
            interface _TimeZoneNames_fr_CA {
              _getContents(): any[][];
            }
            interface TimeZoneNames_fr_CA extends CombineTypes<[_TimeZoneNames_fr_CA, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_fr_GF$$static extends ClassLike {
              new(): TimeZoneNames_fr_GF;
            }
            let TimeZoneNames_fr_GF: _TimeZoneNames_fr_GF$$static;
            interface _TimeZoneNames_fr_GF {
              _getContents(): any[][];
            }
            interface TimeZoneNames_fr_GF extends CombineTypes<[_TimeZoneNames_fr_GF, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_fur$$static extends ClassLike {
              new(): TimeZoneNames_fur;
            }
            let TimeZoneNames_fur: _TimeZoneNames_fur$$static;
            interface _TimeZoneNames_fur {
              _getContents(): any[][];
            }
            interface TimeZoneNames_fur extends CombineTypes<[_TimeZoneNames_fur, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_fy$$static extends ClassLike {
              new(): TimeZoneNames_fy;
            }
            let TimeZoneNames_fy: _TimeZoneNames_fy$$static;
            interface _TimeZoneNames_fy {
              _getContents(): any[][];
            }
            interface TimeZoneNames_fy extends CombineTypes<[_TimeZoneNames_fy, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_ga$$static extends ClassLike {
              new(): TimeZoneNames_ga;
            }
            let TimeZoneNames_ga: _TimeZoneNames_ga$$static;
            interface _TimeZoneNames_ga {
              _getContents(): any[][];
            }
            interface TimeZoneNames_ga extends CombineTypes<[_TimeZoneNames_ga, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_gd$$static extends ClassLike {
              new(): TimeZoneNames_gd;
            }
            let TimeZoneNames_gd: _TimeZoneNames_gd$$static;
            interface _TimeZoneNames_gd {
              _getContents(): any[][];
            }
            interface TimeZoneNames_gd extends CombineTypes<[_TimeZoneNames_gd, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_gl$$static extends ClassLike {
              new(): TimeZoneNames_gl;
            }
            let TimeZoneNames_gl: _TimeZoneNames_gl$$static;
            interface _TimeZoneNames_gl {
              _getContents(): any[][];
            }
            interface TimeZoneNames_gl extends CombineTypes<[_TimeZoneNames_gl, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_gsw$$static extends ClassLike {
              new(): TimeZoneNames_gsw;
            }
            let TimeZoneNames_gsw: _TimeZoneNames_gsw$$static;
            interface _TimeZoneNames_gsw {
              _getContents(): any[][];
            }
            interface TimeZoneNames_gsw extends CombineTypes<[_TimeZoneNames_gsw, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_gu$$static extends ClassLike {
              new(): TimeZoneNames_gu;
            }
            let TimeZoneNames_gu: _TimeZoneNames_gu$$static;
            interface _TimeZoneNames_gu {
              _getContents(): any[][];
            }
            interface TimeZoneNames_gu extends CombineTypes<[_TimeZoneNames_gu, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_ha$$static extends ClassLike {
              new(): TimeZoneNames_ha;
            }
            let TimeZoneNames_ha: _TimeZoneNames_ha$$static;
            interface _TimeZoneNames_ha {
              _getContents(): any[][];
            }
            interface TimeZoneNames_ha extends CombineTypes<[_TimeZoneNames_ha, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_haw$$static extends ClassLike {
              new(): TimeZoneNames_haw;
            }
            let TimeZoneNames_haw: _TimeZoneNames_haw$$static;
            interface _TimeZoneNames_haw {
              _getContents(): any[][];
            }
            interface TimeZoneNames_haw extends CombineTypes<[_TimeZoneNames_haw, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_he$$static extends ClassLike {
              new(): TimeZoneNames_he;
            }
            let TimeZoneNames_he: _TimeZoneNames_he$$static;
            interface _TimeZoneNames_he {
              _getContents(): any[][];
            }
            interface TimeZoneNames_he extends CombineTypes<[_TimeZoneNames_he, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_hi$$static extends ClassLike {
              new(): TimeZoneNames_hi;
            }
            let TimeZoneNames_hi: _TimeZoneNames_hi$$static;
            interface _TimeZoneNames_hi {
              _getContents(): any[][];
            }
            interface TimeZoneNames_hi extends CombineTypes<[_TimeZoneNames_hi, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_hi_Latn$$static extends ClassLike {
              new(): TimeZoneNames_hi_Latn;
            }
            let TimeZoneNames_hi_Latn: _TimeZoneNames_hi_Latn$$static;
            interface _TimeZoneNames_hi_Latn {
              _getContents(): any[][];
            }
            interface TimeZoneNames_hi_Latn extends CombineTypes<[_TimeZoneNames_hi_Latn, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_hr$$static extends ClassLike {
              new(): TimeZoneNames_hr;
            }
            let TimeZoneNames_hr: _TimeZoneNames_hr$$static;
            interface _TimeZoneNames_hr {
              _getContents(): any[][];
            }
            interface TimeZoneNames_hr extends CombineTypes<[_TimeZoneNames_hr, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_hsb$$static extends ClassLike {
              new(): TimeZoneNames_hsb;
            }
            let TimeZoneNames_hsb: _TimeZoneNames_hsb$$static;
            interface _TimeZoneNames_hsb {
              _getContents(): any[][];
            }
            interface TimeZoneNames_hsb extends CombineTypes<[_TimeZoneNames_hsb, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_hu$$static extends ClassLike {
              new(): TimeZoneNames_hu;
            }
            let TimeZoneNames_hu: _TimeZoneNames_hu$$static;
            interface _TimeZoneNames_hu {
              _getContents(): any[][];
            }
            interface TimeZoneNames_hu extends CombineTypes<[_TimeZoneNames_hu, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_hy$$static extends ClassLike {
              new(): TimeZoneNames_hy;
            }
            let TimeZoneNames_hy: _TimeZoneNames_hy$$static;
            interface _TimeZoneNames_hy {
              _getContents(): any[][];
            }
            interface TimeZoneNames_hy extends CombineTypes<[_TimeZoneNames_hy, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_ia$$static extends ClassLike {
              new(): TimeZoneNames_ia;
            }
            let TimeZoneNames_ia: _TimeZoneNames_ia$$static;
            interface _TimeZoneNames_ia {
              _getContents(): any[][];
            }
            interface TimeZoneNames_ia extends CombineTypes<[_TimeZoneNames_ia, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_id$$static extends ClassLike {
              new(): TimeZoneNames_id;
            }
            let TimeZoneNames_id: _TimeZoneNames_id$$static;
            interface _TimeZoneNames_id {
              _getContents(): any[][];
            }
            interface TimeZoneNames_id extends CombineTypes<[_TimeZoneNames_id, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_ig$$static extends ClassLike {
              new(): TimeZoneNames_ig;
            }
            let TimeZoneNames_ig: _TimeZoneNames_ig$$static;
            interface _TimeZoneNames_ig {
              _getContents(): any[][];
            }
            interface TimeZoneNames_ig extends CombineTypes<[_TimeZoneNames_ig, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_ii$$static extends ClassLike {
              new(): TimeZoneNames_ii;
            }
            let TimeZoneNames_ii: _TimeZoneNames_ii$$static;
            interface _TimeZoneNames_ii {
              _getContents(): any[][];
            }
            interface TimeZoneNames_ii extends CombineTypes<[_TimeZoneNames_ii, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_is$$static extends ClassLike {
              new(): TimeZoneNames_is;
            }
            let TimeZoneNames_is: _TimeZoneNames_is$$static;
            interface _TimeZoneNames_is {
              _getContents(): any[][];
            }
            interface TimeZoneNames_is extends CombineTypes<[_TimeZoneNames_is, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_it$$static extends ClassLike {
              new(): TimeZoneNames_it;
            }
            let TimeZoneNames_it: _TimeZoneNames_it$$static;
            interface _TimeZoneNames_it {
              _getContents(): any[][];
            }
            interface TimeZoneNames_it extends CombineTypes<[_TimeZoneNames_it, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_ja$$static extends ClassLike {
              new(): TimeZoneNames_ja;
            }
            let TimeZoneNames_ja: _TimeZoneNames_ja$$static;
            interface _TimeZoneNames_ja {
              _getContents(): any[][];
            }
            interface TimeZoneNames_ja extends CombineTypes<[_TimeZoneNames_ja, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_jv$$static extends ClassLike {
              new(): TimeZoneNames_jv;
            }
            let TimeZoneNames_jv: _TimeZoneNames_jv$$static;
            interface _TimeZoneNames_jv {
              _getContents(): any[][];
            }
            interface TimeZoneNames_jv extends CombineTypes<[_TimeZoneNames_jv, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_ka$$static extends ClassLike {
              new(): TimeZoneNames_ka;
            }
            let TimeZoneNames_ka: _TimeZoneNames_ka$$static;
            interface _TimeZoneNames_ka {
              _getContents(): any[][];
            }
            interface TimeZoneNames_ka extends CombineTypes<[_TimeZoneNames_ka, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_kea$$static extends ClassLike {
              new(): TimeZoneNames_kea;
            }
            let TimeZoneNames_kea: _TimeZoneNames_kea$$static;
            interface _TimeZoneNames_kea {
              _getContents(): any[][];
            }
            interface TimeZoneNames_kea extends CombineTypes<[_TimeZoneNames_kea, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_kgp$$static extends ClassLike {
              new(): TimeZoneNames_kgp;
            }
            let TimeZoneNames_kgp: _TimeZoneNames_kgp$$static;
            interface _TimeZoneNames_kgp {
              _getContents(): any[][];
            }
            interface TimeZoneNames_kgp extends CombineTypes<[_TimeZoneNames_kgp, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_kk$$static extends ClassLike {
              new(): TimeZoneNames_kk;
            }
            let TimeZoneNames_kk: _TimeZoneNames_kk$$static;
            interface _TimeZoneNames_kk {
              _getContents(): any[][];
            }
            interface TimeZoneNames_kk extends CombineTypes<[_TimeZoneNames_kk, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_km$$static extends ClassLike {
              new(): TimeZoneNames_km;
            }
            let TimeZoneNames_km: _TimeZoneNames_km$$static;
            interface _TimeZoneNames_km {
              _getContents(): any[][];
            }
            interface TimeZoneNames_km extends CombineTypes<[_TimeZoneNames_km, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_kn$$static extends ClassLike {
              new(): TimeZoneNames_kn;
            }
            let TimeZoneNames_kn: _TimeZoneNames_kn$$static;
            interface _TimeZoneNames_kn {
              _getContents(): any[][];
            }
            interface TimeZoneNames_kn extends CombineTypes<[_TimeZoneNames_kn, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_ko$$static extends ClassLike {
              new(): TimeZoneNames_ko;
            }
            let TimeZoneNames_ko: _TimeZoneNames_ko$$static;
            interface _TimeZoneNames_ko {
              _getContents(): any[][];
            }
            interface TimeZoneNames_ko extends CombineTypes<[_TimeZoneNames_ko, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_ko_KP$$static extends ClassLike {
              new(): TimeZoneNames_ko_KP;
            }
            let TimeZoneNames_ko_KP: _TimeZoneNames_ko_KP$$static;
            interface _TimeZoneNames_ko_KP {
              _getContents(): any[][];
            }
            interface TimeZoneNames_ko_KP extends CombineTypes<[_TimeZoneNames_ko_KP, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_kok$$static extends ClassLike {
              new(): TimeZoneNames_kok;
            }
            let TimeZoneNames_kok: _TimeZoneNames_kok$$static;
            interface _TimeZoneNames_kok {
              _getContents(): any[][];
            }
            interface TimeZoneNames_kok extends CombineTypes<[_TimeZoneNames_kok, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_ks$$static extends ClassLike {
              new(): TimeZoneNames_ks;
            }
            let TimeZoneNames_ks: _TimeZoneNames_ks$$static;
            interface _TimeZoneNames_ks {
              _getContents(): any[][];
            }
            interface TimeZoneNames_ks extends CombineTypes<[_TimeZoneNames_ks, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_ks_Deva$$static extends ClassLike {
              new(): TimeZoneNames_ks_Deva;
            }
            let TimeZoneNames_ks_Deva: _TimeZoneNames_ks_Deva$$static;
            interface _TimeZoneNames_ks_Deva {
              _getContents(): any[][];
            }
            interface TimeZoneNames_ks_Deva extends CombineTypes<[_TimeZoneNames_ks_Deva, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_ksh$$static extends ClassLike {
              new(): TimeZoneNames_ksh;
            }
            let TimeZoneNames_ksh: _TimeZoneNames_ksh$$static;
            interface _TimeZoneNames_ksh {
              _getContents(): any[][];
            }
            interface TimeZoneNames_ksh extends CombineTypes<[_TimeZoneNames_ksh, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_ky$$static extends ClassLike {
              new(): TimeZoneNames_ky;
            }
            let TimeZoneNames_ky: _TimeZoneNames_ky$$static;
            interface _TimeZoneNames_ky {
              _getContents(): any[][];
            }
            interface TimeZoneNames_ky extends CombineTypes<[_TimeZoneNames_ky, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_lb$$static extends ClassLike {
              new(): TimeZoneNames_lb;
            }
            let TimeZoneNames_lb: _TimeZoneNames_lb$$static;
            interface _TimeZoneNames_lb {
              _getContents(): any[][];
            }
            interface TimeZoneNames_lb extends CombineTypes<[_TimeZoneNames_lb, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_lo$$static extends ClassLike {
              new(): TimeZoneNames_lo;
            }
            let TimeZoneNames_lo: _TimeZoneNames_lo$$static;
            interface _TimeZoneNames_lo {
              _getContents(): any[][];
            }
            interface TimeZoneNames_lo extends CombineTypes<[_TimeZoneNames_lo, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_lrc$$static extends ClassLike {
              new(): TimeZoneNames_lrc;
            }
            let TimeZoneNames_lrc: _TimeZoneNames_lrc$$static;
            interface _TimeZoneNames_lrc {
              _getContents(): any[][];
            }
            interface TimeZoneNames_lrc extends CombineTypes<[_TimeZoneNames_lrc, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_lt$$static extends ClassLike {
              new(): TimeZoneNames_lt;
            }
            let TimeZoneNames_lt: _TimeZoneNames_lt$$static;
            interface _TimeZoneNames_lt {
              _getContents(): any[][];
            }
            interface TimeZoneNames_lt extends CombineTypes<[_TimeZoneNames_lt, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_lv$$static extends ClassLike {
              new(): TimeZoneNames_lv;
            }
            let TimeZoneNames_lv: _TimeZoneNames_lv$$static;
            interface _TimeZoneNames_lv {
              _getContents(): any[][];
            }
            interface TimeZoneNames_lv extends CombineTypes<[_TimeZoneNames_lv, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_mai$$static extends ClassLike {
              new(): TimeZoneNames_mai;
            }
            let TimeZoneNames_mai: _TimeZoneNames_mai$$static;
            interface _TimeZoneNames_mai {
              _getContents(): any[][];
            }
            interface TimeZoneNames_mai extends CombineTypes<[_TimeZoneNames_mai, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_mi$$static extends ClassLike {
              new(): TimeZoneNames_mi;
            }
            let TimeZoneNames_mi: _TimeZoneNames_mi$$static;
            interface _TimeZoneNames_mi {
              _getContents(): any[][];
            }
            interface TimeZoneNames_mi extends CombineTypes<[_TimeZoneNames_mi, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_mk$$static extends ClassLike {
              new(): TimeZoneNames_mk;
            }
            let TimeZoneNames_mk: _TimeZoneNames_mk$$static;
            interface _TimeZoneNames_mk {
              _getContents(): any[][];
            }
            interface TimeZoneNames_mk extends CombineTypes<[_TimeZoneNames_mk, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_ml$$static extends ClassLike {
              new(): TimeZoneNames_ml;
            }
            let TimeZoneNames_ml: _TimeZoneNames_ml$$static;
            interface _TimeZoneNames_ml {
              _getContents(): any[][];
            }
            interface TimeZoneNames_ml extends CombineTypes<[_TimeZoneNames_ml, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_mn$$static extends ClassLike {
              new(): TimeZoneNames_mn;
            }
            let TimeZoneNames_mn: _TimeZoneNames_mn$$static;
            interface _TimeZoneNames_mn {
              _getContents(): any[][];
            }
            interface TimeZoneNames_mn extends CombineTypes<[_TimeZoneNames_mn, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_mni$$static extends ClassLike {
              new(): TimeZoneNames_mni;
            }
            let TimeZoneNames_mni: _TimeZoneNames_mni$$static;
            interface _TimeZoneNames_mni {
              _getContents(): any[][];
            }
            interface TimeZoneNames_mni extends CombineTypes<[_TimeZoneNames_mni, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_mr$$static extends ClassLike {
              new(): TimeZoneNames_mr;
            }
            let TimeZoneNames_mr: _TimeZoneNames_mr$$static;
            interface _TimeZoneNames_mr {
              _getContents(): any[][];
            }
            interface TimeZoneNames_mr extends CombineTypes<[_TimeZoneNames_mr, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_ms$$static extends ClassLike {
              new(): TimeZoneNames_ms;
            }
            let TimeZoneNames_ms: _TimeZoneNames_ms$$static;
            interface _TimeZoneNames_ms {
              _getContents(): any[][];
            }
            interface TimeZoneNames_ms extends CombineTypes<[_TimeZoneNames_ms, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_mt$$static extends ClassLike {
              new(): TimeZoneNames_mt;
            }
            let TimeZoneNames_mt: _TimeZoneNames_mt$$static;
            interface _TimeZoneNames_mt {
              _getContents(): any[][];
            }
            interface TimeZoneNames_mt extends CombineTypes<[_TimeZoneNames_mt, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_my$$static extends ClassLike {
              new(): TimeZoneNames_my;
            }
            let TimeZoneNames_my: _TimeZoneNames_my$$static;
            interface _TimeZoneNames_my {
              _getContents(): any[][];
            }
            interface TimeZoneNames_my extends CombineTypes<[_TimeZoneNames_my, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_ne$$static extends ClassLike {
              new(): TimeZoneNames_ne;
            }
            let TimeZoneNames_ne: _TimeZoneNames_ne$$static;
            interface _TimeZoneNames_ne {
              _getContents(): any[][];
            }
            interface TimeZoneNames_ne extends CombineTypes<[_TimeZoneNames_ne, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_ne_IN$$static extends ClassLike {
              new(): TimeZoneNames_ne_IN;
            }
            let TimeZoneNames_ne_IN: _TimeZoneNames_ne_IN$$static;
            interface _TimeZoneNames_ne_IN {
              _getContents(): any[][];
            }
            interface TimeZoneNames_ne_IN extends CombineTypes<[_TimeZoneNames_ne_IN, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_nl$$static extends ClassLike {
              new(): TimeZoneNames_nl;
            }
            let TimeZoneNames_nl: _TimeZoneNames_nl$$static;
            interface _TimeZoneNames_nl {
              _getContents(): any[][];
            }
            interface TimeZoneNames_nl extends CombineTypes<[_TimeZoneNames_nl, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_nl_SR$$static extends ClassLike {
              new(): TimeZoneNames_nl_SR;
            }
            let TimeZoneNames_nl_SR: _TimeZoneNames_nl_SR$$static;
            interface _TimeZoneNames_nl_SR {
              _getContents(): any[][];
            }
            interface TimeZoneNames_nl_SR extends CombineTypes<[_TimeZoneNames_nl_SR, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_nn$$static extends ClassLike {
              new(): TimeZoneNames_nn;
            }
            let TimeZoneNames_nn: _TimeZoneNames_nn$$static;
            interface _TimeZoneNames_nn {
              _getContents(): any[][];
            }
            interface TimeZoneNames_nn extends CombineTypes<[_TimeZoneNames_nn, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_no$$static extends ClassLike {
              new(): TimeZoneNames_no;
            }
            let TimeZoneNames_no: _TimeZoneNames_no$$static;
            interface _TimeZoneNames_no {
              _getContents(): any[][];
            }
            interface TimeZoneNames_no extends CombineTypes<[_TimeZoneNames_no, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_or$$static extends ClassLike {
              new(): TimeZoneNames_or;
            }
            let TimeZoneNames_or: _TimeZoneNames_or$$static;
            interface _TimeZoneNames_or {
              _getContents(): any[][];
            }
            interface TimeZoneNames_or extends CombineTypes<[_TimeZoneNames_or, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_os$$static extends ClassLike {
              new(): TimeZoneNames_os;
            }
            let TimeZoneNames_os: _TimeZoneNames_os$$static;
            interface _TimeZoneNames_os {
              _getContents(): any[][];
            }
            interface TimeZoneNames_os extends CombineTypes<[_TimeZoneNames_os, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_pa$$static extends ClassLike {
              new(): TimeZoneNames_pa;
            }
            let TimeZoneNames_pa: _TimeZoneNames_pa$$static;
            interface _TimeZoneNames_pa {
              _getContents(): any[][];
            }
            interface TimeZoneNames_pa extends CombineTypes<[_TimeZoneNames_pa, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_pcm$$static extends ClassLike {
              new(): TimeZoneNames_pcm;
            }
            let TimeZoneNames_pcm: _TimeZoneNames_pcm$$static;
            interface _TimeZoneNames_pcm {
              _getContents(): any[][];
            }
            interface TimeZoneNames_pcm extends CombineTypes<[_TimeZoneNames_pcm, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_pis$$static extends ClassLike {
              new(): TimeZoneNames_pis;
            }
            let TimeZoneNames_pis: _TimeZoneNames_pis$$static;
            interface _TimeZoneNames_pis {
              _getContents(): any[][];
            }
            interface TimeZoneNames_pis extends CombineTypes<[_TimeZoneNames_pis, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_pl$$static extends ClassLike {
              new(): TimeZoneNames_pl;
            }
            let TimeZoneNames_pl: _TimeZoneNames_pl$$static;
            interface _TimeZoneNames_pl {
              _getContents(): any[][];
            }
            interface TimeZoneNames_pl extends CombineTypes<[_TimeZoneNames_pl, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_ps$$static extends ClassLike {
              new(): TimeZoneNames_ps;
            }
            let TimeZoneNames_ps: _TimeZoneNames_ps$$static;
            interface _TimeZoneNames_ps {
              _getContents(): any[][];
            }
            interface TimeZoneNames_ps extends CombineTypes<[_TimeZoneNames_ps, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_ps_PK$$static extends ClassLike {
              new(): TimeZoneNames_ps_PK;
            }
            let TimeZoneNames_ps_PK: _TimeZoneNames_ps_PK$$static;
            interface _TimeZoneNames_ps_PK {
              _getContents(): any[][];
            }
            interface TimeZoneNames_ps_PK extends CombineTypes<[_TimeZoneNames_ps_PK, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_pt$$static extends ClassLike {
              new(): TimeZoneNames_pt;
            }
            let TimeZoneNames_pt: _TimeZoneNames_pt$$static;
            interface _TimeZoneNames_pt {
              _getContents(): any[][];
            }
            interface TimeZoneNames_pt extends CombineTypes<[_TimeZoneNames_pt, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_pt_AO$$static extends ClassLike {
              new(): TimeZoneNames_pt_AO;
            }
            let TimeZoneNames_pt_AO: _TimeZoneNames_pt_AO$$static;
            interface _TimeZoneNames_pt_AO {
              _getContents(): any[][];
            }
            interface TimeZoneNames_pt_AO extends CombineTypes<[_TimeZoneNames_pt_AO, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_pt_CV$$static extends ClassLike {
              new(): TimeZoneNames_pt_CV;
            }
            let TimeZoneNames_pt_CV: _TimeZoneNames_pt_CV$$static;
            interface _TimeZoneNames_pt_CV {
              _getContents(): any[][];
            }
            interface TimeZoneNames_pt_CV extends CombineTypes<[_TimeZoneNames_pt_CV, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_pt_GW$$static extends ClassLike {
              new(): TimeZoneNames_pt_GW;
            }
            let TimeZoneNames_pt_GW: _TimeZoneNames_pt_GW$$static;
            interface _TimeZoneNames_pt_GW {
              _getContents(): any[][];
            }
            interface TimeZoneNames_pt_GW extends CombineTypes<[_TimeZoneNames_pt_GW, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_pt_MO$$static extends ClassLike {
              new(): TimeZoneNames_pt_MO;
            }
            let TimeZoneNames_pt_MO: _TimeZoneNames_pt_MO$$static;
            interface _TimeZoneNames_pt_MO {
              _getContents(): any[][];
            }
            interface TimeZoneNames_pt_MO extends CombineTypes<[_TimeZoneNames_pt_MO, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_pt_MZ$$static extends ClassLike {
              new(): TimeZoneNames_pt_MZ;
            }
            let TimeZoneNames_pt_MZ: _TimeZoneNames_pt_MZ$$static;
            interface _TimeZoneNames_pt_MZ {
              _getContents(): any[][];
            }
            interface TimeZoneNames_pt_MZ extends CombineTypes<[_TimeZoneNames_pt_MZ, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_pt_PT$$static extends ClassLike {
              new(): TimeZoneNames_pt_PT;
            }
            let TimeZoneNames_pt_PT: _TimeZoneNames_pt_PT$$static;
            interface _TimeZoneNames_pt_PT {
              _getContents(): any[][];
            }
            interface TimeZoneNames_pt_PT extends CombineTypes<[_TimeZoneNames_pt_PT, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_pt_ST$$static extends ClassLike {
              new(): TimeZoneNames_pt_ST;
            }
            let TimeZoneNames_pt_ST: _TimeZoneNames_pt_ST$$static;
            interface _TimeZoneNames_pt_ST {
              _getContents(): any[][];
            }
            interface TimeZoneNames_pt_ST extends CombineTypes<[_TimeZoneNames_pt_ST, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_pt_TL$$static extends ClassLike {
              new(): TimeZoneNames_pt_TL;
            }
            let TimeZoneNames_pt_TL: _TimeZoneNames_pt_TL$$static;
            interface _TimeZoneNames_pt_TL {
              _getContents(): any[][];
            }
            interface TimeZoneNames_pt_TL extends CombineTypes<[_TimeZoneNames_pt_TL, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_qu$$static extends ClassLike {
              new(): TimeZoneNames_qu;
            }
            let TimeZoneNames_qu: _TimeZoneNames_qu$$static;
            interface _TimeZoneNames_qu {
              _getContents(): any[][];
            }
            interface TimeZoneNames_qu extends CombineTypes<[_TimeZoneNames_qu, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_qu_BO$$static extends ClassLike {
              new(): TimeZoneNames_qu_BO;
            }
            let TimeZoneNames_qu_BO: _TimeZoneNames_qu_BO$$static;
            interface _TimeZoneNames_qu_BO {
              _getContents(): any[][];
            }
            interface TimeZoneNames_qu_BO extends CombineTypes<[_TimeZoneNames_qu_BO, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_qu_EC$$static extends ClassLike {
              new(): TimeZoneNames_qu_EC;
            }
            let TimeZoneNames_qu_EC: _TimeZoneNames_qu_EC$$static;
            interface _TimeZoneNames_qu_EC {
              _getContents(): any[][];
            }
            interface TimeZoneNames_qu_EC extends CombineTypes<[_TimeZoneNames_qu_EC, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_raj$$static extends ClassLike {
              new(): TimeZoneNames_raj;
            }
            let TimeZoneNames_raj: _TimeZoneNames_raj$$static;
            interface _TimeZoneNames_raj {
              _getContents(): any[][];
            }
            interface TimeZoneNames_raj extends CombineTypes<[_TimeZoneNames_raj, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_rm$$static extends ClassLike {
              new(): TimeZoneNames_rm;
            }
            let TimeZoneNames_rm: _TimeZoneNames_rm$$static;
            interface _TimeZoneNames_rm {
              _getContents(): any[][];
            }
            interface TimeZoneNames_rm extends CombineTypes<[_TimeZoneNames_rm, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_ro$$static extends ClassLike {
              new(): TimeZoneNames_ro;
            }
            let TimeZoneNames_ro: _TimeZoneNames_ro$$static;
            interface _TimeZoneNames_ro {
              _getContents(): any[][];
            }
            interface TimeZoneNames_ro extends CombineTypes<[_TimeZoneNames_ro, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_ru$$static extends ClassLike {
              new(): TimeZoneNames_ru;
            }
            let TimeZoneNames_ru: _TimeZoneNames_ru$$static;
            interface _TimeZoneNames_ru {
              _getContents(): any[][];
            }
            interface TimeZoneNames_ru extends CombineTypes<[_TimeZoneNames_ru, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_sa$$static extends ClassLike {
              new(): TimeZoneNames_sa;
            }
            let TimeZoneNames_sa: _TimeZoneNames_sa$$static;
            interface _TimeZoneNames_sa {
              _getContents(): any[][];
            }
            interface TimeZoneNames_sa extends CombineTypes<[_TimeZoneNames_sa, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_sah$$static extends ClassLike {
              new(): TimeZoneNames_sah;
            }
            let TimeZoneNames_sah: _TimeZoneNames_sah$$static;
            interface _TimeZoneNames_sah {
              _getContents(): any[][];
            }
            interface TimeZoneNames_sah extends CombineTypes<[_TimeZoneNames_sah, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_sat$$static extends ClassLike {
              new(): TimeZoneNames_sat;
            }
            let TimeZoneNames_sat: _TimeZoneNames_sat$$static;
            interface _TimeZoneNames_sat {
              _getContents(): any[][];
            }
            interface TimeZoneNames_sat extends CombineTypes<[_TimeZoneNames_sat, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_sc$$static extends ClassLike {
              new(): TimeZoneNames_sc;
            }
            let TimeZoneNames_sc: _TimeZoneNames_sc$$static;
            interface _TimeZoneNames_sc {
              _getContents(): any[][];
            }
            interface TimeZoneNames_sc extends CombineTypes<[_TimeZoneNames_sc, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_sd$$static extends ClassLike {
              new(): TimeZoneNames_sd;
            }
            let TimeZoneNames_sd: _TimeZoneNames_sd$$static;
            interface _TimeZoneNames_sd {
              _getContents(): any[][];
            }
            interface TimeZoneNames_sd extends CombineTypes<[_TimeZoneNames_sd, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_sd_Deva$$static extends ClassLike {
              new(): TimeZoneNames_sd_Deva;
            }
            let TimeZoneNames_sd_Deva: _TimeZoneNames_sd_Deva$$static;
            interface _TimeZoneNames_sd_Deva {
              _getContents(): any[][];
            }
            interface TimeZoneNames_sd_Deva extends CombineTypes<[_TimeZoneNames_sd_Deva, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_se$$static extends ClassLike {
              new(): TimeZoneNames_se;
            }
            let TimeZoneNames_se: _TimeZoneNames_se$$static;
            interface _TimeZoneNames_se {
              _getContents(): any[][];
            }
            interface TimeZoneNames_se extends CombineTypes<[_TimeZoneNames_se, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_se_FI$$static extends ClassLike {
              new(): TimeZoneNames_se_FI;
            }
            let TimeZoneNames_se_FI: _TimeZoneNames_se_FI$$static;
            interface _TimeZoneNames_se_FI {
              _getContents(): any[][];
            }
            interface TimeZoneNames_se_FI extends CombineTypes<[_TimeZoneNames_se_FI, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_si$$static extends ClassLike {
              new(): TimeZoneNames_si;
            }
            let TimeZoneNames_si: _TimeZoneNames_si$$static;
            interface _TimeZoneNames_si {
              _getContents(): any[][];
            }
            interface TimeZoneNames_si extends CombineTypes<[_TimeZoneNames_si, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_sk$$static extends ClassLike {
              new(): TimeZoneNames_sk;
            }
            let TimeZoneNames_sk: _TimeZoneNames_sk$$static;
            interface _TimeZoneNames_sk {
              _getContents(): any[][];
            }
            interface TimeZoneNames_sk extends CombineTypes<[_TimeZoneNames_sk, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_sl$$static extends ClassLike {
              new(): TimeZoneNames_sl;
            }
            let TimeZoneNames_sl: _TimeZoneNames_sl$$static;
            interface _TimeZoneNames_sl {
              _getContents(): any[][];
            }
            interface TimeZoneNames_sl extends CombineTypes<[_TimeZoneNames_sl, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_so$$static extends ClassLike {
              new(): TimeZoneNames_so;
            }
            let TimeZoneNames_so: _TimeZoneNames_so$$static;
            interface _TimeZoneNames_so {
              _getContents(): any[][];
            }
            interface TimeZoneNames_so extends CombineTypes<[_TimeZoneNames_so, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_sq$$static extends ClassLike {
              new(): TimeZoneNames_sq;
            }
            let TimeZoneNames_sq: _TimeZoneNames_sq$$static;
            interface _TimeZoneNames_sq {
              _getContents(): any[][];
            }
            interface TimeZoneNames_sq extends CombineTypes<[_TimeZoneNames_sq, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_sr$$static extends ClassLike {
              new(): TimeZoneNames_sr;
            }
            let TimeZoneNames_sr: _TimeZoneNames_sr$$static;
            interface _TimeZoneNames_sr {
              _getContents(): any[][];
            }
            interface TimeZoneNames_sr extends CombineTypes<[_TimeZoneNames_sr, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_sr_Cyrl_BA$$static extends ClassLike {
              new(): TimeZoneNames_sr_Cyrl_BA;
            }
            let TimeZoneNames_sr_Cyrl_BA: _TimeZoneNames_sr_Cyrl_BA$$static;
            interface _TimeZoneNames_sr_Cyrl_BA {
              _getContents(): any[][];
            }
            interface TimeZoneNames_sr_Cyrl_BA extends CombineTypes<[_TimeZoneNames_sr_Cyrl_BA, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_sr_Latn$$static extends ClassLike {
              new(): TimeZoneNames_sr_Latn;
            }
            let TimeZoneNames_sr_Latn: _TimeZoneNames_sr_Latn$$static;
            interface _TimeZoneNames_sr_Latn {
              _getContents(): any[][];
            }
            interface TimeZoneNames_sr_Latn extends CombineTypes<[_TimeZoneNames_sr_Latn, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_sr_Latn_BA$$static extends ClassLike {
              new(): TimeZoneNames_sr_Latn_BA;
            }
            let TimeZoneNames_sr_Latn_BA: _TimeZoneNames_sr_Latn_BA$$static;
            interface _TimeZoneNames_sr_Latn_BA {
              _getContents(): any[][];
            }
            interface TimeZoneNames_sr_Latn_BA extends CombineTypes<[_TimeZoneNames_sr_Latn_BA, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_su$$static extends ClassLike {
              new(): TimeZoneNames_su;
            }
            let TimeZoneNames_su: _TimeZoneNames_su$$static;
            interface _TimeZoneNames_su {
              _getContents(): any[][];
            }
            interface TimeZoneNames_su extends CombineTypes<[_TimeZoneNames_su, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_sv$$static extends ClassLike {
              new(): TimeZoneNames_sv;
            }
            let TimeZoneNames_sv: _TimeZoneNames_sv$$static;
            interface _TimeZoneNames_sv {
              _getContents(): any[][];
            }
            interface TimeZoneNames_sv extends CombineTypes<[_TimeZoneNames_sv, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_sw$$static extends ClassLike {
              new(): TimeZoneNames_sw;
            }
            let TimeZoneNames_sw: _TimeZoneNames_sw$$static;
            interface _TimeZoneNames_sw {
              _getContents(): any[][];
            }
            interface TimeZoneNames_sw extends CombineTypes<[_TimeZoneNames_sw, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_sw_KE$$static extends ClassLike {
              new(): TimeZoneNames_sw_KE;
            }
            let TimeZoneNames_sw_KE: _TimeZoneNames_sw_KE$$static;
            interface _TimeZoneNames_sw_KE {
              _getContents(): any[][];
            }
            interface TimeZoneNames_sw_KE extends CombineTypes<[_TimeZoneNames_sw_KE, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_ta$$static extends ClassLike {
              new(): TimeZoneNames_ta;
            }
            let TimeZoneNames_ta: _TimeZoneNames_ta$$static;
            interface _TimeZoneNames_ta {
              _getContents(): any[][];
            }
            interface TimeZoneNames_ta extends CombineTypes<[_TimeZoneNames_ta, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_ta_MY$$static extends ClassLike {
              new(): TimeZoneNames_ta_MY;
            }
            let TimeZoneNames_ta_MY: _TimeZoneNames_ta_MY$$static;
            interface _TimeZoneNames_ta_MY {
              _getContents(): any[][];
            }
            interface TimeZoneNames_ta_MY extends CombineTypes<[_TimeZoneNames_ta_MY, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_ta_SG$$static extends ClassLike {
              new(): TimeZoneNames_ta_SG;
            }
            let TimeZoneNames_ta_SG: _TimeZoneNames_ta_SG$$static;
            interface _TimeZoneNames_ta_SG {
              _getContents(): any[][];
            }
            interface TimeZoneNames_ta_SG extends CombineTypes<[_TimeZoneNames_ta_SG, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_te$$static extends ClassLike {
              new(): TimeZoneNames_te;
            }
            let TimeZoneNames_te: _TimeZoneNames_te$$static;
            interface _TimeZoneNames_te {
              _getContents(): any[][];
            }
            interface TimeZoneNames_te extends CombineTypes<[_TimeZoneNames_te, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_tg$$static extends ClassLike {
              new(): TimeZoneNames_tg;
            }
            let TimeZoneNames_tg: _TimeZoneNames_tg$$static;
            interface _TimeZoneNames_tg {
              _getContents(): any[][];
            }
            interface TimeZoneNames_tg extends CombineTypes<[_TimeZoneNames_tg, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_th$$static extends ClassLike {
              new(): TimeZoneNames_th;
            }
            let TimeZoneNames_th: _TimeZoneNames_th$$static;
            interface _TimeZoneNames_th {
              _getContents(): any[][];
            }
            interface TimeZoneNames_th extends CombineTypes<[_TimeZoneNames_th, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_ti$$static extends ClassLike {
              new(): TimeZoneNames_ti;
            }
            let TimeZoneNames_ti: _TimeZoneNames_ti$$static;
            interface _TimeZoneNames_ti {
              _getContents(): any[][];
            }
            interface TimeZoneNames_ti extends CombineTypes<[_TimeZoneNames_ti, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_tk$$static extends ClassLike {
              new(): TimeZoneNames_tk;
            }
            let TimeZoneNames_tk: _TimeZoneNames_tk$$static;
            interface _TimeZoneNames_tk {
              _getContents(): any[][];
            }
            interface TimeZoneNames_tk extends CombineTypes<[_TimeZoneNames_tk, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_to$$static extends ClassLike {
              new(): TimeZoneNames_to;
            }
            let TimeZoneNames_to: _TimeZoneNames_to$$static;
            interface _TimeZoneNames_to {
              _getContents(): any[][];
            }
            interface TimeZoneNames_to extends CombineTypes<[_TimeZoneNames_to, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_tr$$static extends ClassLike {
              new(): TimeZoneNames_tr;
            }
            let TimeZoneNames_tr: _TimeZoneNames_tr$$static;
            interface _TimeZoneNames_tr {
              _getContents(): any[][];
            }
            interface TimeZoneNames_tr extends CombineTypes<[_TimeZoneNames_tr, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_tt$$static extends ClassLike {
              new(): TimeZoneNames_tt;
            }
            let TimeZoneNames_tt: _TimeZoneNames_tt$$static;
            interface _TimeZoneNames_tt {
              _getContents(): any[][];
            }
            interface TimeZoneNames_tt extends CombineTypes<[_TimeZoneNames_tt, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_ug$$static extends ClassLike {
              new(): TimeZoneNames_ug;
            }
            let TimeZoneNames_ug: _TimeZoneNames_ug$$static;
            interface _TimeZoneNames_ug {
              _getContents(): any[][];
            }
            interface TimeZoneNames_ug extends CombineTypes<[_TimeZoneNames_ug, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_uk$$static extends ClassLike {
              new(): TimeZoneNames_uk;
            }
            let TimeZoneNames_uk: _TimeZoneNames_uk$$static;
            interface _TimeZoneNames_uk {
              _getContents(): any[][];
            }
            interface TimeZoneNames_uk extends CombineTypes<[_TimeZoneNames_uk, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_ur$$static extends ClassLike {
              new(): TimeZoneNames_ur;
            }
            let TimeZoneNames_ur: _TimeZoneNames_ur$$static;
            interface _TimeZoneNames_ur {
              _getContents(): any[][];
            }
            interface TimeZoneNames_ur extends CombineTypes<[_TimeZoneNames_ur, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_ur_IN$$static extends ClassLike {
              new(): TimeZoneNames_ur_IN;
            }
            let TimeZoneNames_ur_IN: _TimeZoneNames_ur_IN$$static;
            interface _TimeZoneNames_ur_IN {
              _getContents(): any[][];
            }
            interface TimeZoneNames_ur_IN extends CombineTypes<[_TimeZoneNames_ur_IN, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_uz$$static extends ClassLike {
              new(): TimeZoneNames_uz;
            }
            let TimeZoneNames_uz: _TimeZoneNames_uz$$static;
            interface _TimeZoneNames_uz {
              _getContents(): any[][];
            }
            interface TimeZoneNames_uz extends CombineTypes<[_TimeZoneNames_uz, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_uz_Arab$$static extends ClassLike {
              new(): TimeZoneNames_uz_Arab;
            }
            let TimeZoneNames_uz_Arab: _TimeZoneNames_uz_Arab$$static;
            interface _TimeZoneNames_uz_Arab {
              _getContents(): any[][];
            }
            interface TimeZoneNames_uz_Arab extends CombineTypes<[_TimeZoneNames_uz_Arab, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_uz_Cyrl$$static extends ClassLike {
              new(): TimeZoneNames_uz_Cyrl;
            }
            let TimeZoneNames_uz_Cyrl: _TimeZoneNames_uz_Cyrl$$static;
            interface _TimeZoneNames_uz_Cyrl {
              _getContents(): any[][];
            }
            interface TimeZoneNames_uz_Cyrl extends CombineTypes<[_TimeZoneNames_uz_Cyrl, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_vi$$static extends ClassLike {
              new(): TimeZoneNames_vi;
            }
            let TimeZoneNames_vi: _TimeZoneNames_vi$$static;
            interface _TimeZoneNames_vi {
              _getContents(): any[][];
            }
            interface TimeZoneNames_vi extends CombineTypes<[_TimeZoneNames_vi, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_wae$$static extends ClassLike {
              new(): TimeZoneNames_wae;
            }
            let TimeZoneNames_wae: _TimeZoneNames_wae$$static;
            interface _TimeZoneNames_wae {
              _getContents(): any[][];
            }
            interface TimeZoneNames_wae extends CombineTypes<[_TimeZoneNames_wae, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_wo$$static extends ClassLike {
              new(): TimeZoneNames_wo;
            }
            let TimeZoneNames_wo: _TimeZoneNames_wo$$static;
            interface _TimeZoneNames_wo {
              _getContents(): any[][];
            }
            interface TimeZoneNames_wo extends CombineTypes<[_TimeZoneNames_wo, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_xh$$static extends ClassLike {
              new(): TimeZoneNames_xh;
            }
            let TimeZoneNames_xh: _TimeZoneNames_xh$$static;
            interface _TimeZoneNames_xh {
              _getContents(): any[][];
            }
            interface TimeZoneNames_xh extends CombineTypes<[_TimeZoneNames_xh, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_yi$$static extends ClassLike {
              new(): TimeZoneNames_yi;
            }
            let TimeZoneNames_yi: _TimeZoneNames_yi$$static;
            interface _TimeZoneNames_yi {
              _getContents(): any[][];
            }
            interface TimeZoneNames_yi extends CombineTypes<[_TimeZoneNames_yi, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_yo$$static extends ClassLike {
              new(): TimeZoneNames_yo;
            }
            let TimeZoneNames_yo: _TimeZoneNames_yo$$static;
            interface _TimeZoneNames_yo {
              _getContents(): any[][];
            }
            interface TimeZoneNames_yo extends CombineTypes<[_TimeZoneNames_yo, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_yo_BJ$$static extends ClassLike {
              new(): TimeZoneNames_yo_BJ;
            }
            let TimeZoneNames_yo_BJ: _TimeZoneNames_yo_BJ$$static;
            interface _TimeZoneNames_yo_BJ {
              _getContents(): any[][];
            }
            interface TimeZoneNames_yo_BJ extends CombineTypes<[_TimeZoneNames_yo_BJ, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_yrl$$static extends ClassLike {
              new(): TimeZoneNames_yrl;
            }
            let TimeZoneNames_yrl: _TimeZoneNames_yrl$$static;
            interface _TimeZoneNames_yrl {
              _getContents(): any[][];
            }
            interface TimeZoneNames_yrl extends CombineTypes<[_TimeZoneNames_yrl, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_yrl_CO$$static extends ClassLike {
              new(): TimeZoneNames_yrl_CO;
            }
            let TimeZoneNames_yrl_CO: _TimeZoneNames_yrl_CO$$static;
            interface _TimeZoneNames_yrl_CO {
              _getContents(): any[][];
            }
            interface TimeZoneNames_yrl_CO extends CombineTypes<[_TimeZoneNames_yrl_CO, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_yrl_VE$$static extends ClassLike {
              new(): TimeZoneNames_yrl_VE;
            }
            let TimeZoneNames_yrl_VE: _TimeZoneNames_yrl_VE$$static;
            interface _TimeZoneNames_yrl_VE {
              _getContents(): any[][];
            }
            interface TimeZoneNames_yrl_VE extends CombineTypes<[_TimeZoneNames_yrl_VE, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_yue$$static extends ClassLike {
              new(): TimeZoneNames_yue;
            }
            let TimeZoneNames_yue: _TimeZoneNames_yue$$static;
            interface _TimeZoneNames_yue {
              _getContents(): any[][];
            }
            interface TimeZoneNames_yue extends CombineTypes<[_TimeZoneNames_yue, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_yue_Hans$$static extends ClassLike {
              new(): TimeZoneNames_yue_Hans;
            }
            let TimeZoneNames_yue_Hans: _TimeZoneNames_yue_Hans$$static;
            interface _TimeZoneNames_yue_Hans {
              _getContents(): any[][];
            }
            interface TimeZoneNames_yue_Hans extends CombineTypes<[_TimeZoneNames_yue_Hans, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_zh$$static extends ClassLike {
              new(): TimeZoneNames_zh;
            }
            let TimeZoneNames_zh: _TimeZoneNames_zh$$static;
            interface _TimeZoneNames_zh {
              _getContents(): any[][];
            }
            interface TimeZoneNames_zh extends CombineTypes<[_TimeZoneNames_zh, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_zh_Hans_SG$$static extends ClassLike {
              new(): TimeZoneNames_zh_Hans_SG;
            }
            let TimeZoneNames_zh_Hans_SG: _TimeZoneNames_zh_Hans_SG$$static;
            interface _TimeZoneNames_zh_Hans_SG {
              _getContents(): any[][];
            }
            interface TimeZoneNames_zh_Hans_SG extends CombineTypes<[_TimeZoneNames_zh_Hans_SG, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_zh_Hant$$static extends ClassLike {
              new(): TimeZoneNames_zh_Hant;
            }
            let TimeZoneNames_zh_Hant: _TimeZoneNames_zh_Hant$$static;
            interface _TimeZoneNames_zh_Hant {
              _getContents(): any[][];
            }
            interface TimeZoneNames_zh_Hant extends CombineTypes<[_TimeZoneNames_zh_Hant, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_zh_Hant_HK$$static extends ClassLike {
              new(): TimeZoneNames_zh_Hant_HK;
            }
            let TimeZoneNames_zh_Hant_HK: _TimeZoneNames_zh_Hant_HK$$static;
            interface _TimeZoneNames_zh_Hant_HK {
              _getContents(): any[][];
            }
            interface TimeZoneNames_zh_Hant_HK extends CombineTypes<[_TimeZoneNames_zh_Hant_HK, sun.util.resources.TimeZoneNamesBundle]> {}
            interface _TimeZoneNames_zu$$static extends ClassLike {
              new(): TimeZoneNames_zu;
            }
            let TimeZoneNames_zu: _TimeZoneNames_zu$$static;
            interface _TimeZoneNames_zu {
              _getContents(): any[][];
            }
            interface TimeZoneNames_zu extends CombineTypes<[_TimeZoneNames_zu, sun.util.resources.TimeZoneNamesBundle]> {}
          }
          module provider {
            interface _CLDRLocaleDataMetaInfo$$static extends ClassLike {
              _resourceNameToLocales: java.util.Map<string,string>;
              new(): CLDRLocaleDataMetaInfo;
            }
            let CLDRLocaleDataMetaInfo: _CLDRLocaleDataMetaInfo$$static;
            interface _CLDRLocaleDataMetaInfo {
              availableLanguageTags(category: string): string;
              getType(): util.locale.provider.LocaleProviderAdapter$Type;
            }
            interface CLDRLocaleDataMetaInfo extends CombineTypes<[_CLDRLocaleDataMetaInfo, sun.util.locale.provider.LocaleDataMetaInfo, java.lang.Object]> {}
          }
        }
        module ext {
          interface _CalendarData_ar$$static extends ClassLike {
            new(): CalendarData_ar;
          }
          let CalendarData_ar: _CalendarData_ar$$static;
          interface _CalendarData_ar {
            _getContents(): any[][];
          }
          interface CalendarData_ar extends CombineTypes<[_CalendarData_ar, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_be$$static extends ClassLike {
            new(): CalendarData_be;
          }
          let CalendarData_be: _CalendarData_be$$static;
          interface _CalendarData_be {
            _getContents(): any[][];
          }
          interface CalendarData_be extends CombineTypes<[_CalendarData_be, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_bg$$static extends ClassLike {
            new(): CalendarData_bg;
          }
          let CalendarData_bg: _CalendarData_bg$$static;
          interface _CalendarData_bg {
            _getContents(): any[][];
          }
          interface CalendarData_bg extends CombineTypes<[_CalendarData_bg, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_ca$$static extends ClassLike {
            new(): CalendarData_ca;
          }
          let CalendarData_ca: _CalendarData_ca$$static;
          interface _CalendarData_ca {
            _getContents(): any[][];
          }
          interface CalendarData_ca extends CombineTypes<[_CalendarData_ca, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_cs$$static extends ClassLike {
            new(): CalendarData_cs;
          }
          let CalendarData_cs: _CalendarData_cs$$static;
          interface _CalendarData_cs {
            _getContents(): any[][];
          }
          interface CalendarData_cs extends CombineTypes<[_CalendarData_cs, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_da$$static extends ClassLike {
            new(): CalendarData_da;
          }
          let CalendarData_da: _CalendarData_da$$static;
          interface _CalendarData_da {
            _getContents(): any[][];
          }
          interface CalendarData_da extends CombineTypes<[_CalendarData_da, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_de$$static extends ClassLike {
            new(): CalendarData_de;
          }
          let CalendarData_de: _CalendarData_de$$static;
          interface _CalendarData_de {
            _getContents(): any[][];
          }
          interface CalendarData_de extends CombineTypes<[_CalendarData_de, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_el$$static extends ClassLike {
            new(): CalendarData_el;
          }
          let CalendarData_el: _CalendarData_el$$static;
          interface _CalendarData_el {
            _getContents(): any[][];
          }
          interface CalendarData_el extends CombineTypes<[_CalendarData_el, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_el_CY$$static extends ClassLike {
            new(): CalendarData_el_CY;
          }
          let CalendarData_el_CY: _CalendarData_el_CY$$static;
          interface _CalendarData_el_CY {
            _getContents(): any[][];
          }
          interface CalendarData_el_CY extends CombineTypes<[_CalendarData_el_CY, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_en_GB$$static extends ClassLike {
            new(): CalendarData_en_GB;
          }
          let CalendarData_en_GB: _CalendarData_en_GB$$static;
          interface _CalendarData_en_GB {
            _getContents(): any[][];
          }
          interface CalendarData_en_GB extends CombineTypes<[_CalendarData_en_GB, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_en_IE$$static extends ClassLike {
            new(): CalendarData_en_IE;
          }
          let CalendarData_en_IE: _CalendarData_en_IE$$static;
          interface _CalendarData_en_IE {
            _getContents(): any[][];
          }
          interface CalendarData_en_IE extends CombineTypes<[_CalendarData_en_IE, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_en_MT$$static extends ClassLike {
            new(): CalendarData_en_MT;
          }
          let CalendarData_en_MT: _CalendarData_en_MT$$static;
          interface _CalendarData_en_MT {
            _getContents(): any[][];
          }
          interface CalendarData_en_MT extends CombineTypes<[_CalendarData_en_MT, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_es$$static extends ClassLike {
            new(): CalendarData_es;
          }
          let CalendarData_es: _CalendarData_es$$static;
          interface _CalendarData_es {
            _getContents(): any[][];
          }
          interface CalendarData_es extends CombineTypes<[_CalendarData_es, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_es_ES$$static extends ClassLike {
            new(): CalendarData_es_ES;
          }
          let CalendarData_es_ES: _CalendarData_es_ES$$static;
          interface _CalendarData_es_ES {
            _getContents(): any[][];
          }
          interface CalendarData_es_ES extends CombineTypes<[_CalendarData_es_ES, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_es_US$$static extends ClassLike {
            new(): CalendarData_es_US;
          }
          let CalendarData_es_US: _CalendarData_es_US$$static;
          interface _CalendarData_es_US {
            _getContents(): any[][];
          }
          interface CalendarData_es_US extends CombineTypes<[_CalendarData_es_US, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_et$$static extends ClassLike {
            new(): CalendarData_et;
          }
          let CalendarData_et: _CalendarData_et$$static;
          interface _CalendarData_et {
            _getContents(): any[][];
          }
          interface CalendarData_et extends CombineTypes<[_CalendarData_et, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_fi$$static extends ClassLike {
            new(): CalendarData_fi;
          }
          let CalendarData_fi: _CalendarData_fi$$static;
          interface _CalendarData_fi {
            _getContents(): any[][];
          }
          interface CalendarData_fi extends CombineTypes<[_CalendarData_fi, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_fr$$static extends ClassLike {
            new(): CalendarData_fr;
          }
          let CalendarData_fr: _CalendarData_fr$$static;
          interface _CalendarData_fr {
            _getContents(): any[][];
          }
          interface CalendarData_fr extends CombineTypes<[_CalendarData_fr, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_fr_CA$$static extends ClassLike {
            new(): CalendarData_fr_CA;
          }
          let CalendarData_fr_CA: _CalendarData_fr_CA$$static;
          interface _CalendarData_fr_CA {
            _getContents(): any[][];
          }
          interface CalendarData_fr_CA extends CombineTypes<[_CalendarData_fr_CA, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_he$$static extends ClassLike {
            new(): CalendarData_he;
          }
          let CalendarData_he: _CalendarData_he$$static;
          interface _CalendarData_he {
            _getContents(): any[][];
          }
          interface CalendarData_he extends CombineTypes<[_CalendarData_he, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_hi$$static extends ClassLike {
            new(): CalendarData_hi;
          }
          let CalendarData_hi: _CalendarData_hi$$static;
          interface _CalendarData_hi {
            _getContents(): any[][];
          }
          interface CalendarData_hi extends CombineTypes<[_CalendarData_hi, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_hr$$static extends ClassLike {
            new(): CalendarData_hr;
          }
          let CalendarData_hr: _CalendarData_hr$$static;
          interface _CalendarData_hr {
            _getContents(): any[][];
          }
          interface CalendarData_hr extends CombineTypes<[_CalendarData_hr, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_hu$$static extends ClassLike {
            new(): CalendarData_hu;
          }
          let CalendarData_hu: _CalendarData_hu$$static;
          interface _CalendarData_hu {
            _getContents(): any[][];
          }
          interface CalendarData_hu extends CombineTypes<[_CalendarData_hu, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_id_ID$$static extends ClassLike {
            new(): CalendarData_id_ID;
          }
          let CalendarData_id_ID: _CalendarData_id_ID$$static;
          interface _CalendarData_id_ID {
            _getContents(): any[][];
          }
          interface CalendarData_id_ID extends CombineTypes<[_CalendarData_id_ID, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_is$$static extends ClassLike {
            new(): CalendarData_is;
          }
          let CalendarData_is: _CalendarData_is$$static;
          interface _CalendarData_is {
            _getContents(): any[][];
          }
          interface CalendarData_is extends CombineTypes<[_CalendarData_is, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_it$$static extends ClassLike {
            new(): CalendarData_it;
          }
          let CalendarData_it: _CalendarData_it$$static;
          interface _CalendarData_it {
            _getContents(): any[][];
          }
          interface CalendarData_it extends CombineTypes<[_CalendarData_it, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_ja$$static extends ClassLike {
            new(): CalendarData_ja;
          }
          let CalendarData_ja: _CalendarData_ja$$static;
          interface _CalendarData_ja {
            _getContents(): any[][];
          }
          interface CalendarData_ja extends CombineTypes<[_CalendarData_ja, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_ko$$static extends ClassLike {
            new(): CalendarData_ko;
          }
          let CalendarData_ko: _CalendarData_ko$$static;
          interface _CalendarData_ko {
            _getContents(): any[][];
          }
          interface CalendarData_ko extends CombineTypes<[_CalendarData_ko, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_lt$$static extends ClassLike {
            new(): CalendarData_lt;
          }
          let CalendarData_lt: _CalendarData_lt$$static;
          interface _CalendarData_lt {
            _getContents(): any[][];
          }
          interface CalendarData_lt extends CombineTypes<[_CalendarData_lt, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_lv$$static extends ClassLike {
            new(): CalendarData_lv;
          }
          let CalendarData_lv: _CalendarData_lv$$static;
          interface _CalendarData_lv {
            _getContents(): any[][];
          }
          interface CalendarData_lv extends CombineTypes<[_CalendarData_lv, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_mk$$static extends ClassLike {
            new(): CalendarData_mk;
          }
          let CalendarData_mk: _CalendarData_mk$$static;
          interface _CalendarData_mk {
            _getContents(): any[][];
          }
          interface CalendarData_mk extends CombineTypes<[_CalendarData_mk, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_ms_MY$$static extends ClassLike {
            new(): CalendarData_ms_MY;
          }
          let CalendarData_ms_MY: _CalendarData_ms_MY$$static;
          interface _CalendarData_ms_MY {
            _getContents(): any[][];
          }
          interface CalendarData_ms_MY extends CombineTypes<[_CalendarData_ms_MY, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_mt$$static extends ClassLike {
            new(): CalendarData_mt;
          }
          let CalendarData_mt: _CalendarData_mt$$static;
          interface _CalendarData_mt {
            _getContents(): any[][];
          }
          interface CalendarData_mt extends CombineTypes<[_CalendarData_mt, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_mt_MT$$static extends ClassLike {
            new(): CalendarData_mt_MT;
          }
          let CalendarData_mt_MT: _CalendarData_mt_MT$$static;
          interface _CalendarData_mt_MT {
            _getContents(): any[][];
          }
          interface CalendarData_mt_MT extends CombineTypes<[_CalendarData_mt_MT, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_nl$$static extends ClassLike {
            new(): CalendarData_nl;
          }
          let CalendarData_nl: _CalendarData_nl$$static;
          interface _CalendarData_nl {
            _getContents(): any[][];
          }
          interface CalendarData_nl extends CombineTypes<[_CalendarData_nl, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_no$$static extends ClassLike {
            new(): CalendarData_no;
          }
          let CalendarData_no: _CalendarData_no$$static;
          interface _CalendarData_no {
            _getContents(): any[][];
          }
          interface CalendarData_no extends CombineTypes<[_CalendarData_no, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_pl$$static extends ClassLike {
            new(): CalendarData_pl;
          }
          let CalendarData_pl: _CalendarData_pl$$static;
          interface _CalendarData_pl {
            _getContents(): any[][];
          }
          interface CalendarData_pl extends CombineTypes<[_CalendarData_pl, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_pt$$static extends ClassLike {
            new(): CalendarData_pt;
          }
          let CalendarData_pt: _CalendarData_pt$$static;
          interface _CalendarData_pt {
            _getContents(): any[][];
          }
          interface CalendarData_pt extends CombineTypes<[_CalendarData_pt, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_pt_BR$$static extends ClassLike {
            new(): CalendarData_pt_BR;
          }
          let CalendarData_pt_BR: _CalendarData_pt_BR$$static;
          interface _CalendarData_pt_BR {
            _getContents(): any[][];
          }
          interface CalendarData_pt_BR extends CombineTypes<[_CalendarData_pt_BR, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_pt_PT$$static extends ClassLike {
            new(): CalendarData_pt_PT;
          }
          let CalendarData_pt_PT: _CalendarData_pt_PT$$static;
          interface _CalendarData_pt_PT {
            _getContents(): any[][];
          }
          interface CalendarData_pt_PT extends CombineTypes<[_CalendarData_pt_PT, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_ro$$static extends ClassLike {
            new(): CalendarData_ro;
          }
          let CalendarData_ro: _CalendarData_ro$$static;
          interface _CalendarData_ro {
            _getContents(): any[][];
          }
          interface CalendarData_ro extends CombineTypes<[_CalendarData_ro, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_ru$$static extends ClassLike {
            new(): CalendarData_ru;
          }
          let CalendarData_ru: _CalendarData_ru$$static;
          interface _CalendarData_ru {
            _getContents(): any[][];
          }
          interface CalendarData_ru extends CombineTypes<[_CalendarData_ru, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_sk$$static extends ClassLike {
            new(): CalendarData_sk;
          }
          let CalendarData_sk: _CalendarData_sk$$static;
          interface _CalendarData_sk {
            _getContents(): any[][];
          }
          interface CalendarData_sk extends CombineTypes<[_CalendarData_sk, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_sl$$static extends ClassLike {
            new(): CalendarData_sl;
          }
          let CalendarData_sl: _CalendarData_sl$$static;
          interface _CalendarData_sl {
            _getContents(): any[][];
          }
          interface CalendarData_sl extends CombineTypes<[_CalendarData_sl, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_sq$$static extends ClassLike {
            new(): CalendarData_sq;
          }
          let CalendarData_sq: _CalendarData_sq$$static;
          interface _CalendarData_sq {
            _getContents(): any[][];
          }
          interface CalendarData_sq extends CombineTypes<[_CalendarData_sq, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_sr$$static extends ClassLike {
            new(): CalendarData_sr;
          }
          let CalendarData_sr: _CalendarData_sr$$static;
          interface _CalendarData_sr {
            _getContents(): any[][];
          }
          interface CalendarData_sr extends CombineTypes<[_CalendarData_sr, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_sr_Latn_BA$$static extends ClassLike {
            new(): CalendarData_sr_Latn_BA;
          }
          let CalendarData_sr_Latn_BA: _CalendarData_sr_Latn_BA$$static;
          interface _CalendarData_sr_Latn_BA {
            _getContents(): any[][];
          }
          interface CalendarData_sr_Latn_BA extends CombineTypes<[_CalendarData_sr_Latn_BA, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_sr_Latn_ME$$static extends ClassLike {
            new(): CalendarData_sr_Latn_ME;
          }
          let CalendarData_sr_Latn_ME: _CalendarData_sr_Latn_ME$$static;
          interface _CalendarData_sr_Latn_ME {
            _getContents(): any[][];
          }
          interface CalendarData_sr_Latn_ME extends CombineTypes<[_CalendarData_sr_Latn_ME, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_sr_Latn_RS$$static extends ClassLike {
            new(): CalendarData_sr_Latn_RS;
          }
          let CalendarData_sr_Latn_RS: _CalendarData_sr_Latn_RS$$static;
          interface _CalendarData_sr_Latn_RS {
            _getContents(): any[][];
          }
          interface CalendarData_sr_Latn_RS extends CombineTypes<[_CalendarData_sr_Latn_RS, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_sv$$static extends ClassLike {
            new(): CalendarData_sv;
          }
          let CalendarData_sv: _CalendarData_sv$$static;
          interface _CalendarData_sv {
            _getContents(): any[][];
          }
          interface CalendarData_sv extends CombineTypes<[_CalendarData_sv, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_th$$static extends ClassLike {
            new(): CalendarData_th;
          }
          let CalendarData_th: _CalendarData_th$$static;
          interface _CalendarData_th {
            _getContents(): any[][];
          }
          interface CalendarData_th extends CombineTypes<[_CalendarData_th, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_tr$$static extends ClassLike {
            new(): CalendarData_tr;
          }
          let CalendarData_tr: _CalendarData_tr$$static;
          interface _CalendarData_tr {
            _getContents(): any[][];
          }
          interface CalendarData_tr extends CombineTypes<[_CalendarData_tr, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_uk$$static extends ClassLike {
            new(): CalendarData_uk;
          }
          let CalendarData_uk: _CalendarData_uk$$static;
          interface _CalendarData_uk {
            _getContents(): any[][];
          }
          interface CalendarData_uk extends CombineTypes<[_CalendarData_uk, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_vi$$static extends ClassLike {
            new(): CalendarData_vi;
          }
          let CalendarData_vi: _CalendarData_vi$$static;
          interface _CalendarData_vi {
            _getContents(): any[][];
          }
          interface CalendarData_vi extends CombineTypes<[_CalendarData_vi, sun.util.resources.LocaleNamesBundle]> {}
          interface _CalendarData_zh$$static extends ClassLike {
            new(): CalendarData_zh;
          }
          let CalendarData_zh: _CalendarData_zh$$static;
          interface _CalendarData_zh {
            _getContents(): any[][];
          }
          interface CalendarData_zh extends CombineTypes<[_CalendarData_zh, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_ar_AE$$static extends ClassLike {
            new(): CurrencyNames_ar_AE;
          }
          let CurrencyNames_ar_AE: _CurrencyNames_ar_AE$$static;
          interface _CurrencyNames_ar_AE {
            _getContents(): any[][];
          }
          interface CurrencyNames_ar_AE extends CombineTypes<[_CurrencyNames_ar_AE, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_ar_BH$$static extends ClassLike {
            new(): CurrencyNames_ar_BH;
          }
          let CurrencyNames_ar_BH: _CurrencyNames_ar_BH$$static;
          interface _CurrencyNames_ar_BH {
            _getContents(): any[][];
          }
          interface CurrencyNames_ar_BH extends CombineTypes<[_CurrencyNames_ar_BH, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_ar_DZ$$static extends ClassLike {
            new(): CurrencyNames_ar_DZ;
          }
          let CurrencyNames_ar_DZ: _CurrencyNames_ar_DZ$$static;
          interface _CurrencyNames_ar_DZ {
            _getContents(): any[][];
          }
          interface CurrencyNames_ar_DZ extends CombineTypes<[_CurrencyNames_ar_DZ, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_ar_EG$$static extends ClassLike {
            new(): CurrencyNames_ar_EG;
          }
          let CurrencyNames_ar_EG: _CurrencyNames_ar_EG$$static;
          interface _CurrencyNames_ar_EG {
            _getContents(): any[][];
          }
          interface CurrencyNames_ar_EG extends CombineTypes<[_CurrencyNames_ar_EG, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_ar_IQ$$static extends ClassLike {
            new(): CurrencyNames_ar_IQ;
          }
          let CurrencyNames_ar_IQ: _CurrencyNames_ar_IQ$$static;
          interface _CurrencyNames_ar_IQ {
            _getContents(): any[][];
          }
          interface CurrencyNames_ar_IQ extends CombineTypes<[_CurrencyNames_ar_IQ, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_ar_JO$$static extends ClassLike {
            new(): CurrencyNames_ar_JO;
          }
          let CurrencyNames_ar_JO: _CurrencyNames_ar_JO$$static;
          interface _CurrencyNames_ar_JO {
            _getContents(): any[][];
          }
          interface CurrencyNames_ar_JO extends CombineTypes<[_CurrencyNames_ar_JO, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_ar_KW$$static extends ClassLike {
            new(): CurrencyNames_ar_KW;
          }
          let CurrencyNames_ar_KW: _CurrencyNames_ar_KW$$static;
          interface _CurrencyNames_ar_KW {
            _getContents(): any[][];
          }
          interface CurrencyNames_ar_KW extends CombineTypes<[_CurrencyNames_ar_KW, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_ar_LB$$static extends ClassLike {
            new(): CurrencyNames_ar_LB;
          }
          let CurrencyNames_ar_LB: _CurrencyNames_ar_LB$$static;
          interface _CurrencyNames_ar_LB {
            _getContents(): any[][];
          }
          interface CurrencyNames_ar_LB extends CombineTypes<[_CurrencyNames_ar_LB, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_ar_LY$$static extends ClassLike {
            new(): CurrencyNames_ar_LY;
          }
          let CurrencyNames_ar_LY: _CurrencyNames_ar_LY$$static;
          interface _CurrencyNames_ar_LY {
            _getContents(): any[][];
          }
          interface CurrencyNames_ar_LY extends CombineTypes<[_CurrencyNames_ar_LY, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_ar_MA$$static extends ClassLike {
            new(): CurrencyNames_ar_MA;
          }
          let CurrencyNames_ar_MA: _CurrencyNames_ar_MA$$static;
          interface _CurrencyNames_ar_MA {
            _getContents(): any[][];
          }
          interface CurrencyNames_ar_MA extends CombineTypes<[_CurrencyNames_ar_MA, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_ar_OM$$static extends ClassLike {
            new(): CurrencyNames_ar_OM;
          }
          let CurrencyNames_ar_OM: _CurrencyNames_ar_OM$$static;
          interface _CurrencyNames_ar_OM {
            _getContents(): any[][];
          }
          interface CurrencyNames_ar_OM extends CombineTypes<[_CurrencyNames_ar_OM, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_ar_QA$$static extends ClassLike {
            new(): CurrencyNames_ar_QA;
          }
          let CurrencyNames_ar_QA: _CurrencyNames_ar_QA$$static;
          interface _CurrencyNames_ar_QA {
            _getContents(): any[][];
          }
          interface CurrencyNames_ar_QA extends CombineTypes<[_CurrencyNames_ar_QA, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_ar_SA$$static extends ClassLike {
            new(): CurrencyNames_ar_SA;
          }
          let CurrencyNames_ar_SA: _CurrencyNames_ar_SA$$static;
          interface _CurrencyNames_ar_SA {
            _getContents(): any[][];
          }
          interface CurrencyNames_ar_SA extends CombineTypes<[_CurrencyNames_ar_SA, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_ar_SD$$static extends ClassLike {
            new(): CurrencyNames_ar_SD;
          }
          let CurrencyNames_ar_SD: _CurrencyNames_ar_SD$$static;
          interface _CurrencyNames_ar_SD {
            _getContents(): any[][];
          }
          interface CurrencyNames_ar_SD extends CombineTypes<[_CurrencyNames_ar_SD, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_ar_SY$$static extends ClassLike {
            new(): CurrencyNames_ar_SY;
          }
          let CurrencyNames_ar_SY: _CurrencyNames_ar_SY$$static;
          interface _CurrencyNames_ar_SY {
            _getContents(): any[][];
          }
          interface CurrencyNames_ar_SY extends CombineTypes<[_CurrencyNames_ar_SY, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_ar_TN$$static extends ClassLike {
            new(): CurrencyNames_ar_TN;
          }
          let CurrencyNames_ar_TN: _CurrencyNames_ar_TN$$static;
          interface _CurrencyNames_ar_TN {
            _getContents(): any[][];
          }
          interface CurrencyNames_ar_TN extends CombineTypes<[_CurrencyNames_ar_TN, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_ar_YE$$static extends ClassLike {
            new(): CurrencyNames_ar_YE;
          }
          let CurrencyNames_ar_YE: _CurrencyNames_ar_YE$$static;
          interface _CurrencyNames_ar_YE {
            _getContents(): any[][];
          }
          interface CurrencyNames_ar_YE extends CombineTypes<[_CurrencyNames_ar_YE, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_be_BY$$static extends ClassLike {
            new(): CurrencyNames_be_BY;
          }
          let CurrencyNames_be_BY: _CurrencyNames_be_BY$$static;
          interface _CurrencyNames_be_BY {
            _getContents(): any[][];
          }
          interface CurrencyNames_be_BY extends CombineTypes<[_CurrencyNames_be_BY, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_bg_BG$$static extends ClassLike {
            new(): CurrencyNames_bg_BG;
          }
          let CurrencyNames_bg_BG: _CurrencyNames_bg_BG$$static;
          interface _CurrencyNames_bg_BG {
            _getContents(): any[][];
          }
          interface CurrencyNames_bg_BG extends CombineTypes<[_CurrencyNames_bg_BG, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_ca_ES$$static extends ClassLike {
            new(): CurrencyNames_ca_ES;
          }
          let CurrencyNames_ca_ES: _CurrencyNames_ca_ES$$static;
          interface _CurrencyNames_ca_ES {
            _getContents(): any[][];
          }
          interface CurrencyNames_ca_ES extends CombineTypes<[_CurrencyNames_ca_ES, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_cs_CZ$$static extends ClassLike {
            new(): CurrencyNames_cs_CZ;
          }
          let CurrencyNames_cs_CZ: _CurrencyNames_cs_CZ$$static;
          interface _CurrencyNames_cs_CZ {
            _getContents(): any[][];
          }
          interface CurrencyNames_cs_CZ extends CombineTypes<[_CurrencyNames_cs_CZ, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_da_DK$$static extends ClassLike {
            new(): CurrencyNames_da_DK;
          }
          let CurrencyNames_da_DK: _CurrencyNames_da_DK$$static;
          interface _CurrencyNames_da_DK {
            _getContents(): any[][];
          }
          interface CurrencyNames_da_DK extends CombineTypes<[_CurrencyNames_da_DK, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_de$$static extends ClassLike {
            new(): CurrencyNames_de;
          }
          let CurrencyNames_de: _CurrencyNames_de$$static;
          interface _CurrencyNames_de {
            _getContents(): any[][];
          }
          interface CurrencyNames_de extends CombineTypes<[_CurrencyNames_de, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_de_AT$$static extends ClassLike {
            new(): CurrencyNames_de_AT;
          }
          let CurrencyNames_de_AT: _CurrencyNames_de_AT$$static;
          interface _CurrencyNames_de_AT {
            _getContents(): any[][];
          }
          interface CurrencyNames_de_AT extends CombineTypes<[_CurrencyNames_de_AT, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_de_CH$$static extends ClassLike {
            new(): CurrencyNames_de_CH;
          }
          let CurrencyNames_de_CH: _CurrencyNames_de_CH$$static;
          interface _CurrencyNames_de_CH {
            _getContents(): any[][];
          }
          interface CurrencyNames_de_CH extends CombineTypes<[_CurrencyNames_de_CH, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_de_DE$$static extends ClassLike {
            new(): CurrencyNames_de_DE;
          }
          let CurrencyNames_de_DE: _CurrencyNames_de_DE$$static;
          interface _CurrencyNames_de_DE {
            _getContents(): any[][];
          }
          interface CurrencyNames_de_DE extends CombineTypes<[_CurrencyNames_de_DE, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_de_LU$$static extends ClassLike {
            new(): CurrencyNames_de_LU;
          }
          let CurrencyNames_de_LU: _CurrencyNames_de_LU$$static;
          interface _CurrencyNames_de_LU {
            _getContents(): any[][];
          }
          interface CurrencyNames_de_LU extends CombineTypes<[_CurrencyNames_de_LU, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_el_CY$$static extends ClassLike {
            new(): CurrencyNames_el_CY;
          }
          let CurrencyNames_el_CY: _CurrencyNames_el_CY$$static;
          interface _CurrencyNames_el_CY {
            _getContents(): any[][];
          }
          interface CurrencyNames_el_CY extends CombineTypes<[_CurrencyNames_el_CY, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_el_GR$$static extends ClassLike {
            new(): CurrencyNames_el_GR;
          }
          let CurrencyNames_el_GR: _CurrencyNames_el_GR$$static;
          interface _CurrencyNames_el_GR {
            _getContents(): any[][];
          }
          interface CurrencyNames_el_GR extends CombineTypes<[_CurrencyNames_el_GR, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_en_AU$$static extends ClassLike {
            new(): CurrencyNames_en_AU;
          }
          let CurrencyNames_en_AU: _CurrencyNames_en_AU$$static;
          interface _CurrencyNames_en_AU {
            _getContents(): any[][];
          }
          interface CurrencyNames_en_AU extends CombineTypes<[_CurrencyNames_en_AU, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_en_CA$$static extends ClassLike {
            new(): CurrencyNames_en_CA;
          }
          let CurrencyNames_en_CA: _CurrencyNames_en_CA$$static;
          interface _CurrencyNames_en_CA {
            _getContents(): any[][];
          }
          interface CurrencyNames_en_CA extends CombineTypes<[_CurrencyNames_en_CA, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_en_GB$$static extends ClassLike {
            new(): CurrencyNames_en_GB;
          }
          let CurrencyNames_en_GB: _CurrencyNames_en_GB$$static;
          interface _CurrencyNames_en_GB {
            _getContents(): any[][];
          }
          interface CurrencyNames_en_GB extends CombineTypes<[_CurrencyNames_en_GB, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_en_IE$$static extends ClassLike {
            new(): CurrencyNames_en_IE;
          }
          let CurrencyNames_en_IE: _CurrencyNames_en_IE$$static;
          interface _CurrencyNames_en_IE {
            _getContents(): any[][];
          }
          interface CurrencyNames_en_IE extends CombineTypes<[_CurrencyNames_en_IE, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_en_IN$$static extends ClassLike {
            new(): CurrencyNames_en_IN;
          }
          let CurrencyNames_en_IN: _CurrencyNames_en_IN$$static;
          interface _CurrencyNames_en_IN {
            _getContents(): any[][];
          }
          interface CurrencyNames_en_IN extends CombineTypes<[_CurrencyNames_en_IN, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_en_MT$$static extends ClassLike {
            new(): CurrencyNames_en_MT;
          }
          let CurrencyNames_en_MT: _CurrencyNames_en_MT$$static;
          interface _CurrencyNames_en_MT {
            _getContents(): any[][];
          }
          interface CurrencyNames_en_MT extends CombineTypes<[_CurrencyNames_en_MT, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_en_NZ$$static extends ClassLike {
            new(): CurrencyNames_en_NZ;
          }
          let CurrencyNames_en_NZ: _CurrencyNames_en_NZ$$static;
          interface _CurrencyNames_en_NZ {
            _getContents(): any[][];
          }
          interface CurrencyNames_en_NZ extends CombineTypes<[_CurrencyNames_en_NZ, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_en_PH$$static extends ClassLike {
            new(): CurrencyNames_en_PH;
          }
          let CurrencyNames_en_PH: _CurrencyNames_en_PH$$static;
          interface _CurrencyNames_en_PH {
            _getContents(): any[][];
          }
          interface CurrencyNames_en_PH extends CombineTypes<[_CurrencyNames_en_PH, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_en_SG$$static extends ClassLike {
            new(): CurrencyNames_en_SG;
          }
          let CurrencyNames_en_SG: _CurrencyNames_en_SG$$static;
          interface _CurrencyNames_en_SG {
            _getContents(): any[][];
          }
          interface CurrencyNames_en_SG extends CombineTypes<[_CurrencyNames_en_SG, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_en_ZA$$static extends ClassLike {
            new(): CurrencyNames_en_ZA;
          }
          let CurrencyNames_en_ZA: _CurrencyNames_en_ZA$$static;
          interface _CurrencyNames_en_ZA {
            _getContents(): any[][];
          }
          interface CurrencyNames_en_ZA extends CombineTypes<[_CurrencyNames_en_ZA, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_es$$static extends ClassLike {
            new(): CurrencyNames_es;
          }
          let CurrencyNames_es: _CurrencyNames_es$$static;
          interface _CurrencyNames_es {
            _getContents(): any[][];
          }
          interface CurrencyNames_es extends CombineTypes<[_CurrencyNames_es, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_es_AR$$static extends ClassLike {
            new(): CurrencyNames_es_AR;
          }
          let CurrencyNames_es_AR: _CurrencyNames_es_AR$$static;
          interface _CurrencyNames_es_AR {
            _getContents(): any[][];
          }
          interface CurrencyNames_es_AR extends CombineTypes<[_CurrencyNames_es_AR, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_es_BO$$static extends ClassLike {
            new(): CurrencyNames_es_BO;
          }
          let CurrencyNames_es_BO: _CurrencyNames_es_BO$$static;
          interface _CurrencyNames_es_BO {
            _getContents(): any[][];
          }
          interface CurrencyNames_es_BO extends CombineTypes<[_CurrencyNames_es_BO, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_es_CL$$static extends ClassLike {
            new(): CurrencyNames_es_CL;
          }
          let CurrencyNames_es_CL: _CurrencyNames_es_CL$$static;
          interface _CurrencyNames_es_CL {
            _getContents(): any[][];
          }
          interface CurrencyNames_es_CL extends CombineTypes<[_CurrencyNames_es_CL, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_es_CO$$static extends ClassLike {
            new(): CurrencyNames_es_CO;
          }
          let CurrencyNames_es_CO: _CurrencyNames_es_CO$$static;
          interface _CurrencyNames_es_CO {
            _getContents(): any[][];
          }
          interface CurrencyNames_es_CO extends CombineTypes<[_CurrencyNames_es_CO, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_es_CR$$static extends ClassLike {
            new(): CurrencyNames_es_CR;
          }
          let CurrencyNames_es_CR: _CurrencyNames_es_CR$$static;
          interface _CurrencyNames_es_CR {
            _getContents(): any[][];
          }
          interface CurrencyNames_es_CR extends CombineTypes<[_CurrencyNames_es_CR, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_es_CU$$static extends ClassLike {
            new(): CurrencyNames_es_CU;
          }
          let CurrencyNames_es_CU: _CurrencyNames_es_CU$$static;
          interface _CurrencyNames_es_CU {
            _getContents(): any[][];
          }
          interface CurrencyNames_es_CU extends CombineTypes<[_CurrencyNames_es_CU, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_es_DO$$static extends ClassLike {
            new(): CurrencyNames_es_DO;
          }
          let CurrencyNames_es_DO: _CurrencyNames_es_DO$$static;
          interface _CurrencyNames_es_DO {
            _getContents(): any[][];
          }
          interface CurrencyNames_es_DO extends CombineTypes<[_CurrencyNames_es_DO, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_es_EC$$static extends ClassLike {
            new(): CurrencyNames_es_EC;
          }
          let CurrencyNames_es_EC: _CurrencyNames_es_EC$$static;
          interface _CurrencyNames_es_EC {
            _getContents(): any[][];
          }
          interface CurrencyNames_es_EC extends CombineTypes<[_CurrencyNames_es_EC, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_es_ES$$static extends ClassLike {
            new(): CurrencyNames_es_ES;
          }
          let CurrencyNames_es_ES: _CurrencyNames_es_ES$$static;
          interface _CurrencyNames_es_ES {
            _getContents(): any[][];
          }
          interface CurrencyNames_es_ES extends CombineTypes<[_CurrencyNames_es_ES, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_es_GT$$static extends ClassLike {
            new(): CurrencyNames_es_GT;
          }
          let CurrencyNames_es_GT: _CurrencyNames_es_GT$$static;
          interface _CurrencyNames_es_GT {
            _getContents(): any[][];
          }
          interface CurrencyNames_es_GT extends CombineTypes<[_CurrencyNames_es_GT, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_es_HN$$static extends ClassLike {
            new(): CurrencyNames_es_HN;
          }
          let CurrencyNames_es_HN: _CurrencyNames_es_HN$$static;
          interface _CurrencyNames_es_HN {
            _getContents(): any[][];
          }
          interface CurrencyNames_es_HN extends CombineTypes<[_CurrencyNames_es_HN, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_es_MX$$static extends ClassLike {
            new(): CurrencyNames_es_MX;
          }
          let CurrencyNames_es_MX: _CurrencyNames_es_MX$$static;
          interface _CurrencyNames_es_MX {
            _getContents(): any[][];
          }
          interface CurrencyNames_es_MX extends CombineTypes<[_CurrencyNames_es_MX, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_es_NI$$static extends ClassLike {
            new(): CurrencyNames_es_NI;
          }
          let CurrencyNames_es_NI: _CurrencyNames_es_NI$$static;
          interface _CurrencyNames_es_NI {
            _getContents(): any[][];
          }
          interface CurrencyNames_es_NI extends CombineTypes<[_CurrencyNames_es_NI, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_es_PA$$static extends ClassLike {
            new(): CurrencyNames_es_PA;
          }
          let CurrencyNames_es_PA: _CurrencyNames_es_PA$$static;
          interface _CurrencyNames_es_PA {
            _getContents(): any[][];
          }
          interface CurrencyNames_es_PA extends CombineTypes<[_CurrencyNames_es_PA, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_es_PE$$static extends ClassLike {
            new(): CurrencyNames_es_PE;
          }
          let CurrencyNames_es_PE: _CurrencyNames_es_PE$$static;
          interface _CurrencyNames_es_PE {
            _getContents(): any[][];
          }
          interface CurrencyNames_es_PE extends CombineTypes<[_CurrencyNames_es_PE, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_es_PR$$static extends ClassLike {
            new(): CurrencyNames_es_PR;
          }
          let CurrencyNames_es_PR: _CurrencyNames_es_PR$$static;
          interface _CurrencyNames_es_PR {
            _getContents(): any[][];
          }
          interface CurrencyNames_es_PR extends CombineTypes<[_CurrencyNames_es_PR, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_es_PY$$static extends ClassLike {
            new(): CurrencyNames_es_PY;
          }
          let CurrencyNames_es_PY: _CurrencyNames_es_PY$$static;
          interface _CurrencyNames_es_PY {
            _getContents(): any[][];
          }
          interface CurrencyNames_es_PY extends CombineTypes<[_CurrencyNames_es_PY, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_es_SV$$static extends ClassLike {
            new(): CurrencyNames_es_SV;
          }
          let CurrencyNames_es_SV: _CurrencyNames_es_SV$$static;
          interface _CurrencyNames_es_SV {
            _getContents(): any[][];
          }
          interface CurrencyNames_es_SV extends CombineTypes<[_CurrencyNames_es_SV, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_es_US$$static extends ClassLike {
            new(): CurrencyNames_es_US;
          }
          let CurrencyNames_es_US: _CurrencyNames_es_US$$static;
          interface _CurrencyNames_es_US {
            _getContents(): any[][];
          }
          interface CurrencyNames_es_US extends CombineTypes<[_CurrencyNames_es_US, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_es_UY$$static extends ClassLike {
            new(): CurrencyNames_es_UY;
          }
          let CurrencyNames_es_UY: _CurrencyNames_es_UY$$static;
          interface _CurrencyNames_es_UY {
            _getContents(): any[][];
          }
          interface CurrencyNames_es_UY extends CombineTypes<[_CurrencyNames_es_UY, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_es_VE$$static extends ClassLike {
            new(): CurrencyNames_es_VE;
          }
          let CurrencyNames_es_VE: _CurrencyNames_es_VE$$static;
          interface _CurrencyNames_es_VE {
            _getContents(): any[][];
          }
          interface CurrencyNames_es_VE extends CombineTypes<[_CurrencyNames_es_VE, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_et_EE$$static extends ClassLike {
            new(): CurrencyNames_et_EE;
          }
          let CurrencyNames_et_EE: _CurrencyNames_et_EE$$static;
          interface _CurrencyNames_et_EE {
            _getContents(): any[][];
          }
          interface CurrencyNames_et_EE extends CombineTypes<[_CurrencyNames_et_EE, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_fi_FI$$static extends ClassLike {
            new(): CurrencyNames_fi_FI;
          }
          let CurrencyNames_fi_FI: _CurrencyNames_fi_FI$$static;
          interface _CurrencyNames_fi_FI {
            _getContents(): any[][];
          }
          interface CurrencyNames_fi_FI extends CombineTypes<[_CurrencyNames_fi_FI, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_fr$$static extends ClassLike {
            new(): CurrencyNames_fr;
          }
          let CurrencyNames_fr: _CurrencyNames_fr$$static;
          interface _CurrencyNames_fr {
            _getContents(): any[][];
          }
          interface CurrencyNames_fr extends CombineTypes<[_CurrencyNames_fr, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_fr_BE$$static extends ClassLike {
            new(): CurrencyNames_fr_BE;
          }
          let CurrencyNames_fr_BE: _CurrencyNames_fr_BE$$static;
          interface _CurrencyNames_fr_BE {
            _getContents(): any[][];
          }
          interface CurrencyNames_fr_BE extends CombineTypes<[_CurrencyNames_fr_BE, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_fr_CA$$static extends ClassLike {
            new(): CurrencyNames_fr_CA;
          }
          let CurrencyNames_fr_CA: _CurrencyNames_fr_CA$$static;
          interface _CurrencyNames_fr_CA {
            _getContents(): any[][];
          }
          interface CurrencyNames_fr_CA extends CombineTypes<[_CurrencyNames_fr_CA, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_fr_CH$$static extends ClassLike {
            new(): CurrencyNames_fr_CH;
          }
          let CurrencyNames_fr_CH: _CurrencyNames_fr_CH$$static;
          interface _CurrencyNames_fr_CH {
            _getContents(): any[][];
          }
          interface CurrencyNames_fr_CH extends CombineTypes<[_CurrencyNames_fr_CH, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_fr_FR$$static extends ClassLike {
            new(): CurrencyNames_fr_FR;
          }
          let CurrencyNames_fr_FR: _CurrencyNames_fr_FR$$static;
          interface _CurrencyNames_fr_FR {
            _getContents(): any[][];
          }
          interface CurrencyNames_fr_FR extends CombineTypes<[_CurrencyNames_fr_FR, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_fr_LU$$static extends ClassLike {
            new(): CurrencyNames_fr_LU;
          }
          let CurrencyNames_fr_LU: _CurrencyNames_fr_LU$$static;
          interface _CurrencyNames_fr_LU {
            _getContents(): any[][];
          }
          interface CurrencyNames_fr_LU extends CombineTypes<[_CurrencyNames_fr_LU, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_ga_IE$$static extends ClassLike {
            new(): CurrencyNames_ga_IE;
          }
          let CurrencyNames_ga_IE: _CurrencyNames_ga_IE$$static;
          interface _CurrencyNames_ga_IE {
            _getContents(): any[][];
          }
          interface CurrencyNames_ga_IE extends CombineTypes<[_CurrencyNames_ga_IE, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_he_IL$$static extends ClassLike {
            new(): CurrencyNames_he_IL;
          }
          let CurrencyNames_he_IL: _CurrencyNames_he_IL$$static;
          interface _CurrencyNames_he_IL {
            _getContents(): any[][];
          }
          interface CurrencyNames_he_IL extends CombineTypes<[_CurrencyNames_he_IL, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_hi_IN$$static extends ClassLike {
            new(): CurrencyNames_hi_IN;
          }
          let CurrencyNames_hi_IN: _CurrencyNames_hi_IN$$static;
          interface _CurrencyNames_hi_IN {
            _getContents(): any[][];
          }
          interface CurrencyNames_hi_IN extends CombineTypes<[_CurrencyNames_hi_IN, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_hr_HR$$static extends ClassLike {
            new(): CurrencyNames_hr_HR;
          }
          let CurrencyNames_hr_HR: _CurrencyNames_hr_HR$$static;
          interface _CurrencyNames_hr_HR {
            _getContents(): any[][];
          }
          interface CurrencyNames_hr_HR extends CombineTypes<[_CurrencyNames_hr_HR, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_hu_HU$$static extends ClassLike {
            new(): CurrencyNames_hu_HU;
          }
          let CurrencyNames_hu_HU: _CurrencyNames_hu_HU$$static;
          interface _CurrencyNames_hu_HU {
            _getContents(): any[][];
          }
          interface CurrencyNames_hu_HU extends CombineTypes<[_CurrencyNames_hu_HU, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_id_ID$$static extends ClassLike {
            new(): CurrencyNames_id_ID;
          }
          let CurrencyNames_id_ID: _CurrencyNames_id_ID$$static;
          interface _CurrencyNames_id_ID {
            _getContents(): any[][];
          }
          interface CurrencyNames_id_ID extends CombineTypes<[_CurrencyNames_id_ID, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_is_IS$$static extends ClassLike {
            new(): CurrencyNames_is_IS;
          }
          let CurrencyNames_is_IS: _CurrencyNames_is_IS$$static;
          interface _CurrencyNames_is_IS {
            _getContents(): any[][];
          }
          interface CurrencyNames_is_IS extends CombineTypes<[_CurrencyNames_is_IS, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_it$$static extends ClassLike {
            new(): CurrencyNames_it;
          }
          let CurrencyNames_it: _CurrencyNames_it$$static;
          interface _CurrencyNames_it {
            _getContents(): any[][];
          }
          interface CurrencyNames_it extends CombineTypes<[_CurrencyNames_it, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_it_CH$$static extends ClassLike {
            new(): CurrencyNames_it_CH;
          }
          let CurrencyNames_it_CH: _CurrencyNames_it_CH$$static;
          interface _CurrencyNames_it_CH {
            _getContents(): any[][];
          }
          interface CurrencyNames_it_CH extends CombineTypes<[_CurrencyNames_it_CH, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_it_IT$$static extends ClassLike {
            new(): CurrencyNames_it_IT;
          }
          let CurrencyNames_it_IT: _CurrencyNames_it_IT$$static;
          interface _CurrencyNames_it_IT {
            _getContents(): any[][];
          }
          interface CurrencyNames_it_IT extends CombineTypes<[_CurrencyNames_it_IT, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_ja$$static extends ClassLike {
            new(): CurrencyNames_ja;
          }
          let CurrencyNames_ja: _CurrencyNames_ja$$static;
          interface _CurrencyNames_ja {
            _getContents(): any[][];
          }
          interface CurrencyNames_ja extends CombineTypes<[_CurrencyNames_ja, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_ja_JP$$static extends ClassLike {
            new(): CurrencyNames_ja_JP;
          }
          let CurrencyNames_ja_JP: _CurrencyNames_ja_JP$$static;
          interface _CurrencyNames_ja_JP {
            _getContents(): any[][];
          }
          interface CurrencyNames_ja_JP extends CombineTypes<[_CurrencyNames_ja_JP, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_ko$$static extends ClassLike {
            new(): CurrencyNames_ko;
          }
          let CurrencyNames_ko: _CurrencyNames_ko$$static;
          interface _CurrencyNames_ko {
            _getContents(): any[][];
          }
          interface CurrencyNames_ko extends CombineTypes<[_CurrencyNames_ko, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_ko_KR$$static extends ClassLike {
            new(): CurrencyNames_ko_KR;
          }
          let CurrencyNames_ko_KR: _CurrencyNames_ko_KR$$static;
          interface _CurrencyNames_ko_KR {
            _getContents(): any[][];
          }
          interface CurrencyNames_ko_KR extends CombineTypes<[_CurrencyNames_ko_KR, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_lt_LT$$static extends ClassLike {
            new(): CurrencyNames_lt_LT;
          }
          let CurrencyNames_lt_LT: _CurrencyNames_lt_LT$$static;
          interface _CurrencyNames_lt_LT {
            _getContents(): any[][];
          }
          interface CurrencyNames_lt_LT extends CombineTypes<[_CurrencyNames_lt_LT, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_lv_LV$$static extends ClassLike {
            new(): CurrencyNames_lv_LV;
          }
          let CurrencyNames_lv_LV: _CurrencyNames_lv_LV$$static;
          interface _CurrencyNames_lv_LV {
            _getContents(): any[][];
          }
          interface CurrencyNames_lv_LV extends CombineTypes<[_CurrencyNames_lv_LV, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_mk_MK$$static extends ClassLike {
            new(): CurrencyNames_mk_MK;
          }
          let CurrencyNames_mk_MK: _CurrencyNames_mk_MK$$static;
          interface _CurrencyNames_mk_MK {
            _getContents(): any[][];
          }
          interface CurrencyNames_mk_MK extends CombineTypes<[_CurrencyNames_mk_MK, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_ms_MY$$static extends ClassLike {
            new(): CurrencyNames_ms_MY;
          }
          let CurrencyNames_ms_MY: _CurrencyNames_ms_MY$$static;
          interface _CurrencyNames_ms_MY {
            _getContents(): any[][];
          }
          interface CurrencyNames_ms_MY extends CombineTypes<[_CurrencyNames_ms_MY, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_mt_MT$$static extends ClassLike {
            new(): CurrencyNames_mt_MT;
          }
          let CurrencyNames_mt_MT: _CurrencyNames_mt_MT$$static;
          interface _CurrencyNames_mt_MT {
            _getContents(): any[][];
          }
          interface CurrencyNames_mt_MT extends CombineTypes<[_CurrencyNames_mt_MT, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_nl_BE$$static extends ClassLike {
            new(): CurrencyNames_nl_BE;
          }
          let CurrencyNames_nl_BE: _CurrencyNames_nl_BE$$static;
          interface _CurrencyNames_nl_BE {
            _getContents(): any[][];
          }
          interface CurrencyNames_nl_BE extends CombineTypes<[_CurrencyNames_nl_BE, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_nl_NL$$static extends ClassLike {
            new(): CurrencyNames_nl_NL;
          }
          let CurrencyNames_nl_NL: _CurrencyNames_nl_NL$$static;
          interface _CurrencyNames_nl_NL {
            _getContents(): any[][];
          }
          interface CurrencyNames_nl_NL extends CombineTypes<[_CurrencyNames_nl_NL, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_no_NO$$static extends ClassLike {
            new(): CurrencyNames_no_NO;
          }
          let CurrencyNames_no_NO: _CurrencyNames_no_NO$$static;
          interface _CurrencyNames_no_NO {
            _getContents(): any[][];
          }
          interface CurrencyNames_no_NO extends CombineTypes<[_CurrencyNames_no_NO, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_pl_PL$$static extends ClassLike {
            new(): CurrencyNames_pl_PL;
          }
          let CurrencyNames_pl_PL: _CurrencyNames_pl_PL$$static;
          interface _CurrencyNames_pl_PL {
            _getContents(): any[][];
          }
          interface CurrencyNames_pl_PL extends CombineTypes<[_CurrencyNames_pl_PL, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_pt$$static extends ClassLike {
            new(): CurrencyNames_pt;
          }
          let CurrencyNames_pt: _CurrencyNames_pt$$static;
          interface _CurrencyNames_pt {
            _getContents(): any[][];
          }
          interface CurrencyNames_pt extends CombineTypes<[_CurrencyNames_pt, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_pt_BR$$static extends ClassLike {
            new(): CurrencyNames_pt_BR;
          }
          let CurrencyNames_pt_BR: _CurrencyNames_pt_BR$$static;
          interface _CurrencyNames_pt_BR {
            _getContents(): any[][];
          }
          interface CurrencyNames_pt_BR extends CombineTypes<[_CurrencyNames_pt_BR, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_pt_PT$$static extends ClassLike {
            new(): CurrencyNames_pt_PT;
          }
          let CurrencyNames_pt_PT: _CurrencyNames_pt_PT$$static;
          interface _CurrencyNames_pt_PT {
            _getContents(): any[][];
          }
          interface CurrencyNames_pt_PT extends CombineTypes<[_CurrencyNames_pt_PT, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_ro_RO$$static extends ClassLike {
            new(): CurrencyNames_ro_RO;
          }
          let CurrencyNames_ro_RO: _CurrencyNames_ro_RO$$static;
          interface _CurrencyNames_ro_RO {
            _getContents(): any[][];
          }
          interface CurrencyNames_ro_RO extends CombineTypes<[_CurrencyNames_ro_RO, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_ru_RU$$static extends ClassLike {
            new(): CurrencyNames_ru_RU;
          }
          let CurrencyNames_ru_RU: _CurrencyNames_ru_RU$$static;
          interface _CurrencyNames_ru_RU {
            _getContents(): any[][];
          }
          interface CurrencyNames_ru_RU extends CombineTypes<[_CurrencyNames_ru_RU, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_sk_SK$$static extends ClassLike {
            new(): CurrencyNames_sk_SK;
          }
          let CurrencyNames_sk_SK: _CurrencyNames_sk_SK$$static;
          interface _CurrencyNames_sk_SK {
            _getContents(): any[][];
          }
          interface CurrencyNames_sk_SK extends CombineTypes<[_CurrencyNames_sk_SK, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_sl_SI$$static extends ClassLike {
            new(): CurrencyNames_sl_SI;
          }
          let CurrencyNames_sl_SI: _CurrencyNames_sl_SI$$static;
          interface _CurrencyNames_sl_SI {
            _getContents(): any[][];
          }
          interface CurrencyNames_sl_SI extends CombineTypes<[_CurrencyNames_sl_SI, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_sq_AL$$static extends ClassLike {
            new(): CurrencyNames_sq_AL;
          }
          let CurrencyNames_sq_AL: _CurrencyNames_sq_AL$$static;
          interface _CurrencyNames_sq_AL {
            _getContents(): any[][];
          }
          interface CurrencyNames_sq_AL extends CombineTypes<[_CurrencyNames_sq_AL, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_sr_BA$$static extends ClassLike {
            new(): CurrencyNames_sr_BA;
          }
          let CurrencyNames_sr_BA: _CurrencyNames_sr_BA$$static;
          interface _CurrencyNames_sr_BA {
            _getContents(): any[][];
          }
          interface CurrencyNames_sr_BA extends CombineTypes<[_CurrencyNames_sr_BA, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_sr_CS$$static extends ClassLike {
            new(): CurrencyNames_sr_CS;
          }
          let CurrencyNames_sr_CS: _CurrencyNames_sr_CS$$static;
          interface _CurrencyNames_sr_CS {
            _getContents(): any[][];
          }
          interface CurrencyNames_sr_CS extends CombineTypes<[_CurrencyNames_sr_CS, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_sr_Latn_BA$$static extends ClassLike {
            new(): CurrencyNames_sr_Latn_BA;
          }
          let CurrencyNames_sr_Latn_BA: _CurrencyNames_sr_Latn_BA$$static;
          interface _CurrencyNames_sr_Latn_BA {
            _getContents(): any[][];
          }
          interface CurrencyNames_sr_Latn_BA extends CombineTypes<[_CurrencyNames_sr_Latn_BA, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_sr_Latn_ME$$static extends ClassLike {
            new(): CurrencyNames_sr_Latn_ME;
          }
          let CurrencyNames_sr_Latn_ME: _CurrencyNames_sr_Latn_ME$$static;
          interface _CurrencyNames_sr_Latn_ME {
            _getContents(): any[][];
          }
          interface CurrencyNames_sr_Latn_ME extends CombineTypes<[_CurrencyNames_sr_Latn_ME, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_sr_Latn_RS$$static extends ClassLike {
            new(): CurrencyNames_sr_Latn_RS;
          }
          let CurrencyNames_sr_Latn_RS: _CurrencyNames_sr_Latn_RS$$static;
          interface _CurrencyNames_sr_Latn_RS {
            _getContents(): any[][];
          }
          interface CurrencyNames_sr_Latn_RS extends CombineTypes<[_CurrencyNames_sr_Latn_RS, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_sr_ME$$static extends ClassLike {
            new(): CurrencyNames_sr_ME;
          }
          let CurrencyNames_sr_ME: _CurrencyNames_sr_ME$$static;
          interface _CurrencyNames_sr_ME {
            _getContents(): any[][];
          }
          interface CurrencyNames_sr_ME extends CombineTypes<[_CurrencyNames_sr_ME, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_sr_RS$$static extends ClassLike {
            new(): CurrencyNames_sr_RS;
          }
          let CurrencyNames_sr_RS: _CurrencyNames_sr_RS$$static;
          interface _CurrencyNames_sr_RS {
            _getContents(): any[][];
          }
          interface CurrencyNames_sr_RS extends CombineTypes<[_CurrencyNames_sr_RS, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_sv$$static extends ClassLike {
            new(): CurrencyNames_sv;
          }
          let CurrencyNames_sv: _CurrencyNames_sv$$static;
          interface _CurrencyNames_sv {
            _getContents(): any[][];
          }
          interface CurrencyNames_sv extends CombineTypes<[_CurrencyNames_sv, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_sv_SE$$static extends ClassLike {
            new(): CurrencyNames_sv_SE;
          }
          let CurrencyNames_sv_SE: _CurrencyNames_sv_SE$$static;
          interface _CurrencyNames_sv_SE {
            _getContents(): any[][];
          }
          interface CurrencyNames_sv_SE extends CombineTypes<[_CurrencyNames_sv_SE, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_th_TH$$static extends ClassLike {
            new(): CurrencyNames_th_TH;
          }
          let CurrencyNames_th_TH: _CurrencyNames_th_TH$$static;
          interface _CurrencyNames_th_TH {
            _getContents(): any[][];
          }
          interface CurrencyNames_th_TH extends CombineTypes<[_CurrencyNames_th_TH, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_tr_TR$$static extends ClassLike {
            new(): CurrencyNames_tr_TR;
          }
          let CurrencyNames_tr_TR: _CurrencyNames_tr_TR$$static;
          interface _CurrencyNames_tr_TR {
            _getContents(): any[][];
          }
          interface CurrencyNames_tr_TR extends CombineTypes<[_CurrencyNames_tr_TR, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_uk_UA$$static extends ClassLike {
            new(): CurrencyNames_uk_UA;
          }
          let CurrencyNames_uk_UA: _CurrencyNames_uk_UA$$static;
          interface _CurrencyNames_uk_UA {
            _getContents(): any[][];
          }
          interface CurrencyNames_uk_UA extends CombineTypes<[_CurrencyNames_uk_UA, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_vi_VN$$static extends ClassLike {
            new(): CurrencyNames_vi_VN;
          }
          let CurrencyNames_vi_VN: _CurrencyNames_vi_VN$$static;
          interface _CurrencyNames_vi_VN {
            _getContents(): any[][];
          }
          interface CurrencyNames_vi_VN extends CombineTypes<[_CurrencyNames_vi_VN, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_zh_CN$$static extends ClassLike {
            new(): CurrencyNames_zh_CN;
          }
          let CurrencyNames_zh_CN: _CurrencyNames_zh_CN$$static;
          interface _CurrencyNames_zh_CN {
            _getContents(): any[][];
          }
          interface CurrencyNames_zh_CN extends CombineTypes<[_CurrencyNames_zh_CN, sun.util.resources.LocaleNamesBundle]> {}
          interface _CurrencyNames_zh_HK$$static extends ClassLike {
            new(): CurrencyNames_zh_HK;
          }
          let CurrencyNames_zh_HK: _CurrencyNames_zh_HK$$static;
          interface _CurrencyNames_zh_HK {
            _getContents(): any[][];
          }
          interface CurrencyNames_zh_HK extends CombineTypes<[_CurrencyNames_zh_HK, sun.util.resources.OpenListResourceBundle]> {}
          interface _CurrencyNames_zh_SG$$static extends ClassLike {
            new(): CurrencyNames_zh_SG;
          }
          let CurrencyNames_zh_SG: _CurrencyNames_zh_SG$$static;
          interface _CurrencyNames_zh_SG {
            _getContents(): any[][];
          }
          interface CurrencyNames_zh_SG extends CombineTypes<[_CurrencyNames_zh_SG, sun.util.resources.OpenListResourceBundle]> {}
          interface _CurrencyNames_zh_TW$$static extends ClassLike {
            new(): CurrencyNames_zh_TW;
          }
          let CurrencyNames_zh_TW: _CurrencyNames_zh_TW$$static;
          interface _CurrencyNames_zh_TW {
            _getContents(): any[][];
          }
          interface CurrencyNames_zh_TW extends CombineTypes<[_CurrencyNames_zh_TW, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_ar$$static extends ClassLike {
            new(): LocaleNames_ar;
          }
          let LocaleNames_ar: _LocaleNames_ar$$static;
          interface _LocaleNames_ar {
            _getContents(): any[][];
          }
          interface LocaleNames_ar extends CombineTypes<[_LocaleNames_ar, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_be$$static extends ClassLike {
            new(): LocaleNames_be;
          }
          let LocaleNames_be: _LocaleNames_be$$static;
          interface _LocaleNames_be {
            _getContents(): any[][];
          }
          interface LocaleNames_be extends CombineTypes<[_LocaleNames_be, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_bg$$static extends ClassLike {
            new(): LocaleNames_bg;
          }
          let LocaleNames_bg: _LocaleNames_bg$$static;
          interface _LocaleNames_bg {
            _getContents(): any[][];
          }
          interface LocaleNames_bg extends CombineTypes<[_LocaleNames_bg, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_ca$$static extends ClassLike {
            new(): LocaleNames_ca;
          }
          let LocaleNames_ca: _LocaleNames_ca$$static;
          interface _LocaleNames_ca {
            _getContents(): any[][];
          }
          interface LocaleNames_ca extends CombineTypes<[_LocaleNames_ca, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_cs$$static extends ClassLike {
            new(): LocaleNames_cs;
          }
          let LocaleNames_cs: _LocaleNames_cs$$static;
          interface _LocaleNames_cs {
            _getContents(): any[][];
          }
          interface LocaleNames_cs extends CombineTypes<[_LocaleNames_cs, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_da$$static extends ClassLike {
            new(): LocaleNames_da;
          }
          let LocaleNames_da: _LocaleNames_da$$static;
          interface _LocaleNames_da {
            _getContents(): any[][];
          }
          interface LocaleNames_da extends CombineTypes<[_LocaleNames_da, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_de$$static extends ClassLike {
            new(): LocaleNames_de;
          }
          let LocaleNames_de: _LocaleNames_de$$static;
          interface _LocaleNames_de {
            _getContents(): any[][];
          }
          interface LocaleNames_de extends CombineTypes<[_LocaleNames_de, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_el$$static extends ClassLike {
            new(): LocaleNames_el;
          }
          let LocaleNames_el: _LocaleNames_el$$static;
          interface _LocaleNames_el {
            _getContents(): any[][];
          }
          interface LocaleNames_el extends CombineTypes<[_LocaleNames_el, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_el_CY$$static extends ClassLike {
            new(): LocaleNames_el_CY;
          }
          let LocaleNames_el_CY: _LocaleNames_el_CY$$static;
          interface _LocaleNames_el_CY {
            _getContents(): any[][];
          }
          interface LocaleNames_el_CY extends CombineTypes<[_LocaleNames_el_CY, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_en_MT$$static extends ClassLike {
            new(): LocaleNames_en_MT;
          }
          let LocaleNames_en_MT: _LocaleNames_en_MT$$static;
          interface _LocaleNames_en_MT {
            _getContents(): any[][];
          }
          interface LocaleNames_en_MT extends CombineTypes<[_LocaleNames_en_MT, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_en_PH$$static extends ClassLike {
            new(): LocaleNames_en_PH;
          }
          let LocaleNames_en_PH: _LocaleNames_en_PH$$static;
          interface _LocaleNames_en_PH {
            _getContents(): any[][];
          }
          interface LocaleNames_en_PH extends CombineTypes<[_LocaleNames_en_PH, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_en_SG$$static extends ClassLike {
            new(): LocaleNames_en_SG;
          }
          let LocaleNames_en_SG: _LocaleNames_en_SG$$static;
          interface _LocaleNames_en_SG {
            _getContents(): any[][];
          }
          interface LocaleNames_en_SG extends CombineTypes<[_LocaleNames_en_SG, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_es$$static extends ClassLike {
            new(): LocaleNames_es;
          }
          let LocaleNames_es: _LocaleNames_es$$static;
          interface _LocaleNames_es {
            _getContents(): any[][];
          }
          interface LocaleNames_es extends CombineTypes<[_LocaleNames_es, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_es_US$$static extends ClassLike {
            new(): LocaleNames_es_US;
          }
          let LocaleNames_es_US: _LocaleNames_es_US$$static;
          interface _LocaleNames_es_US {
            _getContents(): any[][];
          }
          interface LocaleNames_es_US extends CombineTypes<[_LocaleNames_es_US, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_et$$static extends ClassLike {
            new(): LocaleNames_et;
          }
          let LocaleNames_et: _LocaleNames_et$$static;
          interface _LocaleNames_et {
            _getContents(): any[][];
          }
          interface LocaleNames_et extends CombineTypes<[_LocaleNames_et, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_fi$$static extends ClassLike {
            new(): LocaleNames_fi;
          }
          let LocaleNames_fi: _LocaleNames_fi$$static;
          interface _LocaleNames_fi {
            _getContents(): any[][];
          }
          interface LocaleNames_fi extends CombineTypes<[_LocaleNames_fi, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_fr$$static extends ClassLike {
            new(): LocaleNames_fr;
          }
          let LocaleNames_fr: _LocaleNames_fr$$static;
          interface _LocaleNames_fr {
            _getContents(): any[][];
          }
          interface LocaleNames_fr extends CombineTypes<[_LocaleNames_fr, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_ga$$static extends ClassLike {
            new(): LocaleNames_ga;
          }
          let LocaleNames_ga: _LocaleNames_ga$$static;
          interface _LocaleNames_ga {
            _getContents(): any[][];
          }
          interface LocaleNames_ga extends CombineTypes<[_LocaleNames_ga, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_he$$static extends ClassLike {
            new(): LocaleNames_he;
          }
          let LocaleNames_he: _LocaleNames_he$$static;
          interface _LocaleNames_he {
            _getContents(): any[][];
          }
          interface LocaleNames_he extends CombineTypes<[_LocaleNames_he, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_hi$$static extends ClassLike {
            new(): LocaleNames_hi;
          }
          let LocaleNames_hi: _LocaleNames_hi$$static;
          interface _LocaleNames_hi {
            _getContents(): any[][];
          }
          interface LocaleNames_hi extends CombineTypes<[_LocaleNames_hi, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_hr$$static extends ClassLike {
            new(): LocaleNames_hr;
          }
          let LocaleNames_hr: _LocaleNames_hr$$static;
          interface _LocaleNames_hr {
            _getContents(): any[][];
          }
          interface LocaleNames_hr extends CombineTypes<[_LocaleNames_hr, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_hu$$static extends ClassLike {
            new(): LocaleNames_hu;
          }
          let LocaleNames_hu: _LocaleNames_hu$$static;
          interface _LocaleNames_hu {
            _getContents(): any[][];
          }
          interface LocaleNames_hu extends CombineTypes<[_LocaleNames_hu, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_id$$static extends ClassLike {
            new(): LocaleNames_id;
          }
          let LocaleNames_id: _LocaleNames_id$$static;
          interface _LocaleNames_id {
            _getContents(): any[][];
          }
          interface LocaleNames_id extends CombineTypes<[_LocaleNames_id, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_is$$static extends ClassLike {
            new(): LocaleNames_is;
          }
          let LocaleNames_is: _LocaleNames_is$$static;
          interface _LocaleNames_is {
            _getContents(): any[][];
          }
          interface LocaleNames_is extends CombineTypes<[_LocaleNames_is, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_it$$static extends ClassLike {
            new(): LocaleNames_it;
          }
          let LocaleNames_it: _LocaleNames_it$$static;
          interface _LocaleNames_it {
            _getContents(): any[][];
          }
          interface LocaleNames_it extends CombineTypes<[_LocaleNames_it, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_ja$$static extends ClassLike {
            new(): LocaleNames_ja;
          }
          let LocaleNames_ja: _LocaleNames_ja$$static;
          interface _LocaleNames_ja {
            _getContents(): any[][];
          }
          interface LocaleNames_ja extends CombineTypes<[_LocaleNames_ja, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_ko$$static extends ClassLike {
            new(): LocaleNames_ko;
          }
          let LocaleNames_ko: _LocaleNames_ko$$static;
          interface _LocaleNames_ko {
            _getContents(): any[][];
          }
          interface LocaleNames_ko extends CombineTypes<[_LocaleNames_ko, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_lt$$static extends ClassLike {
            new(): LocaleNames_lt;
          }
          let LocaleNames_lt: _LocaleNames_lt$$static;
          interface _LocaleNames_lt {
            _getContents(): any[][];
          }
          interface LocaleNames_lt extends CombineTypes<[_LocaleNames_lt, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_lv$$static extends ClassLike {
            new(): LocaleNames_lv;
          }
          let LocaleNames_lv: _LocaleNames_lv$$static;
          interface _LocaleNames_lv {
            _getContents(): any[][];
          }
          interface LocaleNames_lv extends CombineTypes<[_LocaleNames_lv, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_mk$$static extends ClassLike {
            new(): LocaleNames_mk;
          }
          let LocaleNames_mk: _LocaleNames_mk$$static;
          interface _LocaleNames_mk {
            _getContents(): any[][];
          }
          interface LocaleNames_mk extends CombineTypes<[_LocaleNames_mk, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_ms$$static extends ClassLike {
            new(): LocaleNames_ms;
          }
          let LocaleNames_ms: _LocaleNames_ms$$static;
          interface _LocaleNames_ms {
            _getContents(): any[][];
          }
          interface LocaleNames_ms extends CombineTypes<[_LocaleNames_ms, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_mt$$static extends ClassLike {
            new(): LocaleNames_mt;
          }
          let LocaleNames_mt: _LocaleNames_mt$$static;
          interface _LocaleNames_mt {
            _getContents(): any[][];
          }
          interface LocaleNames_mt extends CombineTypes<[_LocaleNames_mt, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_nl$$static extends ClassLike {
            new(): LocaleNames_nl;
          }
          let LocaleNames_nl: _LocaleNames_nl$$static;
          interface _LocaleNames_nl {
            _getContents(): any[][];
          }
          interface LocaleNames_nl extends CombineTypes<[_LocaleNames_nl, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_no$$static extends ClassLike {
            new(): LocaleNames_no;
          }
          let LocaleNames_no: _LocaleNames_no$$static;
          interface _LocaleNames_no {
            _getContents(): any[][];
          }
          interface LocaleNames_no extends CombineTypes<[_LocaleNames_no, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_no_NO_NY$$static extends ClassLike {
            new(): LocaleNames_no_NO_NY;
          }
          let LocaleNames_no_NO_NY: _LocaleNames_no_NO_NY$$static;
          interface _LocaleNames_no_NO_NY {
            _getContents(): any[][];
          }
          interface LocaleNames_no_NO_NY extends CombineTypes<[_LocaleNames_no_NO_NY, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_pl$$static extends ClassLike {
            new(): LocaleNames_pl;
          }
          let LocaleNames_pl: _LocaleNames_pl$$static;
          interface _LocaleNames_pl {
            _getContents(): any[][];
          }
          interface LocaleNames_pl extends CombineTypes<[_LocaleNames_pl, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_pt$$static extends ClassLike {
            new(): LocaleNames_pt;
          }
          let LocaleNames_pt: _LocaleNames_pt$$static;
          interface _LocaleNames_pt {
            _getContents(): any[][];
          }
          interface LocaleNames_pt extends CombineTypes<[_LocaleNames_pt, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_pt_BR$$static extends ClassLike {
            new(): LocaleNames_pt_BR;
          }
          let LocaleNames_pt_BR: _LocaleNames_pt_BR$$static;
          interface _LocaleNames_pt_BR {
            _getContents(): any[][];
          }
          interface LocaleNames_pt_BR extends CombineTypes<[_LocaleNames_pt_BR, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_pt_PT$$static extends ClassLike {
            new(): LocaleNames_pt_PT;
          }
          let LocaleNames_pt_PT: _LocaleNames_pt_PT$$static;
          interface _LocaleNames_pt_PT {
            _getContents(): any[][];
          }
          interface LocaleNames_pt_PT extends CombineTypes<[_LocaleNames_pt_PT, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_ro$$static extends ClassLike {
            new(): LocaleNames_ro;
          }
          let LocaleNames_ro: _LocaleNames_ro$$static;
          interface _LocaleNames_ro {
            _getContents(): any[][];
          }
          interface LocaleNames_ro extends CombineTypes<[_LocaleNames_ro, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_ru$$static extends ClassLike {
            new(): LocaleNames_ru;
          }
          let LocaleNames_ru: _LocaleNames_ru$$static;
          interface _LocaleNames_ru {
            _getContents(): any[][];
          }
          interface LocaleNames_ru extends CombineTypes<[_LocaleNames_ru, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_sk$$static extends ClassLike {
            new(): LocaleNames_sk;
          }
          let LocaleNames_sk: _LocaleNames_sk$$static;
          interface _LocaleNames_sk {
            _getContents(): any[][];
          }
          interface LocaleNames_sk extends CombineTypes<[_LocaleNames_sk, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_sl$$static extends ClassLike {
            new(): LocaleNames_sl;
          }
          let LocaleNames_sl: _LocaleNames_sl$$static;
          interface _LocaleNames_sl {
            _getContents(): any[][];
          }
          interface LocaleNames_sl extends CombineTypes<[_LocaleNames_sl, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_sq$$static extends ClassLike {
            new(): LocaleNames_sq;
          }
          let LocaleNames_sq: _LocaleNames_sq$$static;
          interface _LocaleNames_sq {
            _getContents(): any[][];
          }
          interface LocaleNames_sq extends CombineTypes<[_LocaleNames_sq, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_sr$$static extends ClassLike {
            new(): LocaleNames_sr;
          }
          let LocaleNames_sr: _LocaleNames_sr$$static;
          interface _LocaleNames_sr {
            _getContents(): any[][];
          }
          interface LocaleNames_sr extends CombineTypes<[_LocaleNames_sr, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_sr_Latn$$static extends ClassLike {
            new(): LocaleNames_sr_Latn;
          }
          let LocaleNames_sr_Latn: _LocaleNames_sr_Latn$$static;
          interface _LocaleNames_sr_Latn {
            _getContents(): any[][];
          }
          interface LocaleNames_sr_Latn extends CombineTypes<[_LocaleNames_sr_Latn, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_sv$$static extends ClassLike {
            new(): LocaleNames_sv;
          }
          let LocaleNames_sv: _LocaleNames_sv$$static;
          interface _LocaleNames_sv {
            _getContents(): any[][];
          }
          interface LocaleNames_sv extends CombineTypes<[_LocaleNames_sv, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_th$$static extends ClassLike {
            new(): LocaleNames_th;
          }
          let LocaleNames_th: _LocaleNames_th$$static;
          interface _LocaleNames_th {
            _getContents(): any[][];
          }
          interface LocaleNames_th extends CombineTypes<[_LocaleNames_th, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_tr$$static extends ClassLike {
            new(): LocaleNames_tr;
          }
          let LocaleNames_tr: _LocaleNames_tr$$static;
          interface _LocaleNames_tr {
            _getContents(): any[][];
          }
          interface LocaleNames_tr extends CombineTypes<[_LocaleNames_tr, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_uk$$static extends ClassLike {
            new(): LocaleNames_uk;
          }
          let LocaleNames_uk: _LocaleNames_uk$$static;
          interface _LocaleNames_uk {
            _getContents(): any[][];
          }
          interface LocaleNames_uk extends CombineTypes<[_LocaleNames_uk, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_vi$$static extends ClassLike {
            new(): LocaleNames_vi;
          }
          let LocaleNames_vi: _LocaleNames_vi$$static;
          interface _LocaleNames_vi {
            _getContents(): any[][];
          }
          interface LocaleNames_vi extends CombineTypes<[_LocaleNames_vi, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_zh$$static extends ClassLike {
            new(): LocaleNames_zh;
          }
          let LocaleNames_zh: _LocaleNames_zh$$static;
          interface _LocaleNames_zh {
            _getContents(): any[][];
          }
          interface LocaleNames_zh extends CombineTypes<[_LocaleNames_zh, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_zh_HK$$static extends ClassLike {
            new(): LocaleNames_zh_HK;
          }
          let LocaleNames_zh_HK: _LocaleNames_zh_HK$$static;
          interface _LocaleNames_zh_HK {
            _getContents(): any[][];
          }
          interface LocaleNames_zh_HK extends CombineTypes<[_LocaleNames_zh_HK, sun.util.resources.OpenListResourceBundle]> {}
          interface _LocaleNames_zh_SG$$static extends ClassLike {
            new(): LocaleNames_zh_SG;
          }
          let LocaleNames_zh_SG: _LocaleNames_zh_SG$$static;
          interface _LocaleNames_zh_SG {
            _getContents(): any[][];
          }
          interface LocaleNames_zh_SG extends CombineTypes<[_LocaleNames_zh_SG, sun.util.resources.LocaleNamesBundle]> {}
          interface _LocaleNames_zh_TW$$static extends ClassLike {
            new(): LocaleNames_zh_TW;
          }
          let LocaleNames_zh_TW: _LocaleNames_zh_TW$$static;
          interface _LocaleNames_zh_TW {
            _getContents(): any[][];
          }
          interface LocaleNames_zh_TW extends CombineTypes<[_LocaleNames_zh_TW, sun.util.resources.LocaleNamesBundle]> {}
          interface _TimeZoneNames_de$$static extends ClassLike {
            new(): TimeZoneNames_de;
          }
          let TimeZoneNames_de: _TimeZoneNames_de$$static;
          interface _TimeZoneNames_de {
            _getContents(): any[][];
          }
          interface TimeZoneNames_de extends CombineTypes<[_TimeZoneNames_de, sun.util.resources.TimeZoneNamesBundle]> {}
          interface _TimeZoneNames_en_CA$$static extends ClassLike {
            new(): TimeZoneNames_en_CA;
          }
          let TimeZoneNames_en_CA: _TimeZoneNames_en_CA$$static;
          interface _TimeZoneNames_en_CA {
            _getContents(): any[][];
          }
          interface TimeZoneNames_en_CA extends CombineTypes<[_TimeZoneNames_en_CA, sun.util.resources.TimeZoneNamesBundle]> {}
          interface _TimeZoneNames_en_GB$$static extends ClassLike {
            new(): TimeZoneNames_en_GB;
          }
          let TimeZoneNames_en_GB: _TimeZoneNames_en_GB$$static;
          interface _TimeZoneNames_en_GB {
            _getContents(): any[][];
          }
          interface TimeZoneNames_en_GB extends CombineTypes<[_TimeZoneNames_en_GB, sun.util.resources.TimeZoneNamesBundle]> {}
          interface _TimeZoneNames_en_IE$$static extends ClassLike {
            new(): TimeZoneNames_en_IE;
          }
          let TimeZoneNames_en_IE: _TimeZoneNames_en_IE$$static;
          interface _TimeZoneNames_en_IE {
            _getContents(): any[][];
          }
          interface TimeZoneNames_en_IE extends CombineTypes<[_TimeZoneNames_en_IE, sun.util.resources.TimeZoneNamesBundle]> {}
          interface _TimeZoneNames_es$$static extends ClassLike {
            new(): TimeZoneNames_es;
          }
          let TimeZoneNames_es: _TimeZoneNames_es$$static;
          interface _TimeZoneNames_es {
            _getContents(): any[][];
          }
          interface TimeZoneNames_es extends CombineTypes<[_TimeZoneNames_es, sun.util.resources.TimeZoneNamesBundle]> {}
          interface _TimeZoneNames_fr$$static extends ClassLike {
            new(): TimeZoneNames_fr;
          }
          let TimeZoneNames_fr: _TimeZoneNames_fr$$static;
          interface _TimeZoneNames_fr {
            _getContents(): any[][];
          }
          interface TimeZoneNames_fr extends CombineTypes<[_TimeZoneNames_fr, sun.util.resources.TimeZoneNamesBundle]> {}
          interface _TimeZoneNames_hi$$static extends ClassLike {
            new(): TimeZoneNames_hi;
          }
          let TimeZoneNames_hi: _TimeZoneNames_hi$$static;
          interface _TimeZoneNames_hi {
            _getContents(): any[][];
          }
          interface TimeZoneNames_hi extends CombineTypes<[_TimeZoneNames_hi, sun.util.resources.TimeZoneNamesBundle]> {}
          interface _TimeZoneNames_it$$static extends ClassLike {
            new(): TimeZoneNames_it;
          }
          let TimeZoneNames_it: _TimeZoneNames_it$$static;
          interface _TimeZoneNames_it {
            _getContents(): any[][];
          }
          interface TimeZoneNames_it extends CombineTypes<[_TimeZoneNames_it, sun.util.resources.TimeZoneNamesBundle]> {}
          interface _TimeZoneNames_ja$$static extends ClassLike {
            new(): TimeZoneNames_ja;
          }
          let TimeZoneNames_ja: _TimeZoneNames_ja$$static;
          interface _TimeZoneNames_ja {
            _getContents(): any[][];
          }
          interface TimeZoneNames_ja extends CombineTypes<[_TimeZoneNames_ja, sun.util.resources.TimeZoneNamesBundle]> {}
          interface _TimeZoneNames_ko$$static extends ClassLike {
            new(): TimeZoneNames_ko;
          }
          let TimeZoneNames_ko: _TimeZoneNames_ko$$static;
          interface _TimeZoneNames_ko {
            _getContents(): any[][];
          }
          interface TimeZoneNames_ko extends CombineTypes<[_TimeZoneNames_ko, sun.util.resources.TimeZoneNamesBundle]> {}
          interface _TimeZoneNames_pt_BR$$static extends ClassLike {
            new(): TimeZoneNames_pt_BR;
          }
          let TimeZoneNames_pt_BR: _TimeZoneNames_pt_BR$$static;
          interface _TimeZoneNames_pt_BR {
            _getContents(): any[][];
          }
          interface TimeZoneNames_pt_BR extends CombineTypes<[_TimeZoneNames_pt_BR, sun.util.resources.TimeZoneNamesBundle]> {}
          interface _TimeZoneNames_sv$$static extends ClassLike {
            new(): TimeZoneNames_sv;
          }
          let TimeZoneNames_sv: _TimeZoneNames_sv$$static;
          interface _TimeZoneNames_sv {
            _getContents(): any[][];
          }
          interface TimeZoneNames_sv extends CombineTypes<[_TimeZoneNames_sv, sun.util.resources.TimeZoneNamesBundle]> {}
          interface _TimeZoneNames_zh_CN$$static extends ClassLike {
            new(): TimeZoneNames_zh_CN;
          }
          let TimeZoneNames_zh_CN: _TimeZoneNames_zh_CN$$static;
          interface _TimeZoneNames_zh_CN {
            _getContents(): any[][];
          }
          interface TimeZoneNames_zh_CN extends CombineTypes<[_TimeZoneNames_zh_CN, sun.util.resources.TimeZoneNamesBundle]> {}
          interface _TimeZoneNames_zh_HK$$static extends ClassLike {
            new(): TimeZoneNames_zh_HK;
          }
          let TimeZoneNames_zh_HK: _TimeZoneNames_zh_HK$$static;
          interface _TimeZoneNames_zh_HK {
            _getContents(): any[][];
          }
          interface TimeZoneNames_zh_HK extends CombineTypes<[_TimeZoneNames_zh_HK, sun.util.resources.TimeZoneNamesBundle]> {}
          interface _TimeZoneNames_zh_TW$$static extends ClassLike {
            new(): TimeZoneNames_zh_TW;
          }
          let TimeZoneNames_zh_TW: _TimeZoneNames_zh_TW$$static;
          interface _TimeZoneNames_zh_TW {
            _getContents(): any[][];
          }
          interface TimeZoneNames_zh_TW extends CombineTypes<[_TimeZoneNames_zh_TW, sun.util.resources.TimeZoneNamesBundle]> {}
        }
        module provider {
          interface _LocaleDataProvider$$static extends ClassLike {
            _loadResourceBundle(bundleName: string): java.util.ResourceBundle;
            new(): LocaleDataProvider;
          }
          let LocaleDataProvider: _LocaleDataProvider$$static;
          interface _LocaleDataProvider {
            getBundle(baseName: string, locale: java.util.Locale): java.util.ResourceBundle;
          }
          interface LocaleDataProvider extends CombineTypes<[_LocaleDataProvider, sun.util.resources.LocaleData$CommonResourceBundleProvider]> {}
          interface _NonBaseLocaleDataMetaInfo$$static extends ClassLike {
            getSupportedLocaleString(resourceName: string): string;
            _resourceNameToLocales: java.util.Map<string,string>;
            new(): NonBaseLocaleDataMetaInfo;
          }
          let NonBaseLocaleDataMetaInfo: _NonBaseLocaleDataMetaInfo$$static;
          interface _NonBaseLocaleDataMetaInfo {
            availableLanguageTags(category: string): string;
            getType(): util.locale.provider.LocaleProviderAdapter$Type;
          }
          interface NonBaseLocaleDataMetaInfo extends CombineTypes<[_NonBaseLocaleDataMetaInfo, sun.util.locale.provider.LocaleDataMetaInfo, java.lang.Object]> {}
          interface _SupplementaryLocaleDataProvider$$static extends ClassLike {
            new(): SupplementaryLocaleDataProvider;
          }
          let SupplementaryLocaleDataProvider: _SupplementaryLocaleDataProvider$$static;
          interface _SupplementaryLocaleDataProvider {
            getBundle(baseName: string, locale: java.util.Locale): java.util.ResourceBundle;
          }
          interface SupplementaryLocaleDataProvider extends CombineTypes<[_SupplementaryLocaleDataProvider, sun.util.resources.LocaleData$SupplementaryResourceBundleProvider]> {}
        }
      }
    }
  }
}
