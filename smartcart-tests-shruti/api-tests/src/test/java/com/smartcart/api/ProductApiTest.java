package com.smartcart.api;
import io.restassured.RestAssured;
import org.junit.jupiter.api.Test;
class ProductApiTest {
  @Test
  void getProducts() {
    RestAssured.get("http://localhost:8080/api/products").then().statusCode(200);
  }
}
