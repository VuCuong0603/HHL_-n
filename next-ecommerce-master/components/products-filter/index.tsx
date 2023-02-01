import { useEffect, useState } from "react";
import Checkbox from "./form-builder/checkbox";
import CheckboxColor from "./form-builder/checkbox-color";
import Slider from "rc-slider";

// data
import { getcategoryAPI } from "./../../utils/data/products-types";
import productsColors from "./../../utils/data/products-colors";
import productsSizes from "./../../utils/data/products-sizes";
import { useRouter } from "next/router";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const ProductsFilter = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [productsTypes, setProductsTypes] = useState<any>([]);

  const router = useRouter();

  const productsType = async () => {
    try {
      const res = await getcategoryAPI();
      console.log(res);
      setProductsTypes(res.result.categories);
    } catch (error) {
      console.log(error);
    }
  };
  const addQueryParams = () => {
    // query params changes
    console.log("aaaa");
  };
  useEffect(() => {
    productsType();
  }, []);

  const changeParam = (type: any) => {
    console.log("type..", type);
    router.push(
      {
        pathname: "/products/",
        query: { aolen: type._id },
      },
      undefined,
      { shallow: true }
    );
  };

  console.log("productsTypes..", productsTypes);

  return (
    <form className="products-filter" onChange={addQueryParams}>
      <button
        type="button"
        onClick={() => setFiltersOpen(!filtersOpen)}
        className={`products-filter__menu-btn ${
          filtersOpen ? "products-filter__menu-btn--active" : ""
        }`}
      >
        Tìm kiếm nâng cao <i className="icon-down-open"></i>
      </button>

      <div
        className={`products-filter__wrapper ${
          filtersOpen ? "products-filter__wrapper--open" : ""
        }`}
      >
        <div className="products-filter__block">
          <button type="button">Loại sản phẩm</button>
          <div className="products-filter__block__content">
            {productsTypes?.map((type: any) => (
              <Checkbox
                key={type.id}
                name="product-type"
                label={type.name}
                type={type}
                changeParam={changeParam}
              />
            ))}
          </div>
        </div>
        {/* <div className="products-filter__block">
          <button type="button">Giá</button>
          <div className="products-filter__block__content">
            <Range
              min={0}
              max={20}
              defaultValue={[3, 10]}
              tipFormatter={(value) => `${value}%`}
            />
          </div>
        </div> */}

        <div className="products-filter__block">
          <button type="button">Size</button>
          <div className="products-filter__block__content checkbox-square-wrapper">
            {productsSizes.map((type) => (
              <Checkbox
                type="square"
                key={type.id}
                name="product-size"
                label={type.label}
                changeParam={changeParam}
              />
            ))}
          </div>
        </div>

        <div className="products-filter__block">
          <button type="button">Màu</button>
          <div className="products-filter__block__content">
            <div className="checkbox-color-wrapper">
              {productsColors.map((type) => (
                <CheckboxColor
                  key={type.id}
                  valueName={type.color}
                  name="product-color"
                  color={type.color}
                />
              ))}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-submit btn--rounded btn--yellow"
        >
          Apply
        </button>
      </div>
    </form>
  );
};

export default ProductsFilter;
