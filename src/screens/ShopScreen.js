import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

const { width } = Dimensions.get('window');

export default function ShopScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/images/e9pay-logo.png')}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>

          <TouchableOpacity style={styles.qrButton}>
            <Ionicons name="qr-code-outline" size={28} color={COLORS.black} />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color={COLORS.gray} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor={COLORS.gray}
          />
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        
        {/* Advertisement Banner */}
        <View style={styles.adSection}>
          <ScrollView 
            horizontal 
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={styles.adCarousel}
          >
            {[1, 2, 3].map((item) => (
              <TouchableOpacity key={item} style={styles.adBanner}>
                <Image
                  source={require('../assets/images/ad-banner.png')}
                  style={styles.adImage}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
          
          {/* Pagination Dots */}
          <View style={styles.paginationDots}>
            {[1, 2, 3].map((item) => (
              <View 
                key={item} 
                style={[
                  styles.dot, 
                  item === 1 && styles.activeDot
                ]} 
              />
            ))}
          </View>
        </View>

        {/* Categories Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={styles.seeAllText}>See All</Text>
              <Ionicons name="arrow-forward" size={16} color={COLORS.primary} />
            </TouchableOpacity>
          </View>

          <View style={styles.categoriesGrid}>
            {renderCategory('E9 Pay Service', 'NEW', '#FF6B6B')}
            {renderCategory('Sial Academy', 'NEW', '#FF6B6B')}
            {renderCategory('Air Ticket Service')}
            {renderCategory('Student Visa')}
            {renderCategory('Stock Market')}
            {renderCategory('Law Help')}
          </View>
        </View>

        {/* Related Topics */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Related Topics</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.topicsRow}>
              {[1, 2, 3, 4, 5].map((item) => (
                <TouchableOpacity key={item} style={styles.topicButton}>
                  <View style={styles.topicIcon}>
                    <Image
                      source={require('../assets/images/e9pay-logo.png')}
                      style={styles.topicIconImage}
                      resizeMode="contain"
                    />
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* New Items */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>New Items</Text>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={styles.seeAllText}>See All</Text>
              <Ionicons name="arrow-forward" size={16} color={COLORS.primary} />
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.productsRow}>
              {[1, 2, 3, 4].map((item) => (
                <View key={item} style={styles.productCard}>
                  <View style={styles.productImage}>
                    <Ionicons name="image-outline" size={40} color={COLORS.gray} />
                  </View>
                  <Text style={styles.productName} numberOfLines={2}>
                    Lorem ipsum dolor sit amet consectetur
                  </Text>
                  <Text style={styles.productPrice}>Rs. {item * 1000}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Flash Sale */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Flash Sale</Text>
            <View style={styles.timerContainer}>
              <Ionicons name="time-outline" size={16} color={COLORS.red} />
              <Text style={styles.timerText}>00:35:48</Text>
            </View>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={styles.seeAllText}>See All</Text>
              <Ionicons name="arrow-forward" size={16} color={COLORS.primary} />
            </TouchableOpacity>
          </View>

          <View style={styles.flashSaleGrid}>
            {[1, 2, 3, 4].map((item) => (
              <View key={item} style={styles.flashSaleCard}>
                <View style={styles.flashSaleBadge}>
                  <Text style={styles.flashSaleBadgeText}>50% OFF</Text>
                </View>
                <View style={styles.productImage}>
                  <Ionicons name="image-outline" size={40} color={COLORS.gray} />
                </View>
                <Text style={styles.productName} numberOfLines={2}>
                  Product {item}
                </Text>
                <Text style={styles.productPrice}>Rs. {item * 500}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Most Popular */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Most Popular</Text>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={styles.seeAllText}>See All</Text>
              <Ionicons name="arrow-forward" size={16} color={COLORS.primary} />
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.productsRow}>
              {[1, 2, 3, 4].map((item) => (
                <View key={item} style={styles.productCard}>
                  <View style={styles.popularBadge}>
                    <Ionicons name="flame" size={12} color={COLORS.white} />
                    <Text style={styles.popularBadgeText}>Hot</Text>
                  </View>
                  <View style={styles.productImage}>
                    <Ionicons name="image-outline" size={40} color={COLORS.gray} />
                  </View>
                  <Text style={styles.productName} numberOfLines={2}>
                    Popular Item {item}
                  </Text>
                  <Text style={styles.productPrice}>Rs. {item * 1500}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Just For You */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Just For You 🌟</Text>
          </View>

          <View style={styles.justForYouGrid}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <View key={item} style={styles.justForYouCard}>
                <View style={styles.productImage}>
                  <Ionicons name="image-outline" size={40} color={COLORS.gray} />
                </View>
                <Text style={styles.productName} numberOfLines={2}>
                  Eg Pay Service
                </Text>
                <Text style={styles.productDescription} numberOfLines={2}>
                  Lorem ipsum dolor sit amet consectetur
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Bottom Spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
}

// Helper function to render category cards
function renderCategory(title, badge, badgeColor) {
  return (
    <TouchableOpacity style={styles.categoryCard}>
      {badge && (
        <View style={[styles.categoryBadge, { backgroundColor: badgeColor }]}>
          <Text style={styles.categoryBadgeText}>{badge}</Text>
        </View>
      )}
      <View style={styles.categoryIcon}>
        <Ionicons name="storefront" size={30} color={COLORS.primary} />
      </View>
      <Text style={styles.categoryTitle} numberOfLines={2}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C1D7D8',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
    backgroundColor: '#C1D7D8',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  logoContainer: {
    // width: 50,
    // height: 50,
    // backgroundColor: COLORS.white,
    // borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: COLORS.border,
    overflow: 'hidden',
  },
  logoImage: {
    width: 80,
    height: 80,
  },
  qrButton: {
    padding: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.lightGray,
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: COLORS.black,
  },
  content: {
    flex: 1,
  },
  adSection: {
    marginTop: 20,
    marginBottom: 10,
  },
  adCarousel: {
    paddingHorizontal: 20,
  },
  adBanner: {
    width: width - 40,
    height: 150,
    backgroundColor: '#E8F4FF',
    borderRadius: 15,
    marginRight: 15,
    overflow: 'hidden',
  },
  adImage: {
    width: '100%',
    height: '100%',
  },
  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.lightGray,
  },
  activeDot: {
    width: 24,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 25,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  seeAllText: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: '600',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: (width - 60) / 2,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
    position: 'relative',
  },
  categoryBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
  categoryBadgeText: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: 'bold',
  },
  categoryIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.black,
    textAlign: 'center',
  },
  topicsRow: {
    flexDirection: 'row',
    gap: 15,
  },
  topicButton: {
    alignItems: 'center',
  },
  topicIcon: {
    marginTop: 15,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  topicIconImage: {
    width: 30,
    height: 30,
  },
  productsRow: {
    flexDirection: 'row',
    gap: 15,
  },
  productCard: {
    width: 150,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 130,
    backgroundColor: COLORS.lightGray,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  productName: {
    fontSize: 13,
    color: COLORS.black,
    marginBottom: 5,
    lineHeight: 18,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  productDescription: {
    fontSize: 11,
    color: COLORS.gray,
    lineHeight: 16,
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFE8E8',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    gap: 5,
  },
  timerText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.red,
  },
  flashSaleGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  flashSaleCard: {
    width: (width - 60) / 2,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: COLORS.border,
    position: 'relative',
  },
  flashSaleBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: COLORS.red,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    zIndex: 1,
  },
  flashSaleBadgeText: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: 'bold',
  },
  popularBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: COLORS.red,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 15,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  popularBadgeText: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: 'bold',
  },
  justForYouGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  justForYouCard: {
    width: (width - 60) / 2,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  bottomSpacing: {
    height: 30,
  },
});