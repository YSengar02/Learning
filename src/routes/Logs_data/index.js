import { log, seller, product } from "../../model/data_xpress/index.js";

class logController {
  async getdata(req, res) {
    try {
      const Action = req.body.action;

      console.log("object", Action);
      if (!Action) {
        return res.status(400).json({
          error: true,
          message: "action ID is required in the request body",
        });
      }
      const logProduct = await log.findAll({
        where: {
          action: Action,
        },
      });
      // console.log("logProduct====>>>>>>",logProduct);

      const modifiedData = await Promise.all(
        logProduct.map(async (item) => {
          const Data = JSON.parse(item.body);
          console.log("Data==>>>>",Data);

          var product_info = [];
          await Promise.all(
            Data.message.order.items.map(async (_item) => {
              for (const _item of Data.message.order.items) {
                const productData = await product.findOne({
                  // Get product data for the item based on its name
                  where: {
                    ondc_product_id: _item.id,
                  },
                });

                if (productData) {
                  product_info.push({
                    item_id: _item.id,
                    product_name: productData.name,
                    quantity: _item.quantity.count,
                  });
                } else {

                  // Handle the case where there's no matching product data
                  product_info.push({
                    item_id: _item.id,
                    product_name: null,
                    quantity: _item.quantity.count,
                  });
                }
              }
            })
          );
          //Get company name from seller using provider_id
          const sellerData = await seller.findOne({
            where: {
              provider_id: Data.message.order.provider.id,
            },
          });

          if (!sellerData) {
            // Handle the case where there's no matching seller data
            console.log(
              "No seller data found for provider_id:",
              Data.message.order.provider.id
            );
            return {
              provider: Data.message.order.provider.id,
              seller_name: null,
              product_info,
              created_at: item.created_at,
              updated_at: item.updated_at,
            };
          }

          return {
            provider: Data.message.order.provider.id,
            company_name: sellerData.company_name,
            product_info,
            created_at: item.created_at,
            updated_at: item.updated_at,
          };
        })
      );
      //console.log("seller_data", modifiedData);

      if (logProduct) {
        res.status(200).json({
          message: "action exist",
          data: modifiedData,
        });
      } else {
        res.status(200).json({
          error: true,
          message: "action does not exist",
        });
      }
    } catch (error) {
      {
        console.log("error", error);
        res.status(404).json({ error: true, message: error.message });
      }
    }
  }
}

export default new logController();
