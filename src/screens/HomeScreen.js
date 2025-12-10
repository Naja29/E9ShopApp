import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/images/e9pay-logo.png')}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.myActivityButton}>
            <Text style={styles.myActivityText}>My Activity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={24} color={COLORS.black} />
            <View style={styles.notificationBadge} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="search-outline" size={24} color={COLORS.black} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingsButton}>
            <Ionicons name="settings-outline" size={20} color={COLORS.black} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Greeting */}
        <Text style={styles.greeting}>Hello, Naja!</Text>

        {/* Announcement */}
        <TouchableOpacity style={styles.announcementCard}>
          <View style={styles.announcementContent}>
            <Text style={styles.announcementTitle}>Announcement</Text>
            <Text style={styles.announcementText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </View>
          <TouchableOpacity style={styles.announcementIcon}>
            <Ionicons name="arrow-forward" size={20} color={COLORS.white} />
          </TouchableOpacity>
        </TouchableOpacity>

        {/* Recently Viewed */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recently viewed</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recentlyViewed}>
            {[1, 2, 3, 4, 5].map((item) => (
              <View key={item} style={styles.recentItem}>
                <View style={styles.recentAvatar}>
                  <Ionicons name="image-outline" size={30} color={COLORS.gray} />
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* My Orders */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>My Orders</Text>
          </View>
          <View style={styles.orderButtons}>
            <TouchableOpacity style={styles.orderButton}>
              <View style={styles.orderIconContainer}>
                <Ionicons name="wallet-outline" size={24} color={COLORS.primary} />
              </View>
              <Text style={styles.orderButtonText}>To Pay</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.orderButton}>
              <View style={styles.orderIconContainer}>
                <Ionicons name="cube-outline" size={24} color={COLORS.primary} />
              </View>
              <Text style={styles.orderButtonText}>To Receive</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.orderButton}>
              <View style={styles.orderIconContainer}>
                <Ionicons name="star-outline" size={24} color={COLORS.primary} />
              </View>
              <Text style={styles.orderButtonText}>To Review</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Stories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Stories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.stories}>
            {[1, 2, 3, 4].map((item) => (
              <TouchableOpacity key={item} style={styles.storyCard}>
                <View style={styles.storyImage}>
                  <Ionicons name="image-outline" size={40} color={COLORS.gray} />
                </View>
                <View style={styles.storyBadge}>
                  <Text style={styles.storyBadgeText}>NEW</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Bottom Spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C1D7D8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
    backgroundColor: '#C1D7D8',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
  width: 70,
  height: 70,
  backgroundColor: COLORS.white,
  borderRadius: 100,
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: COLORS.border,
  overflow: 'hidden',
  },
  logoImage: {
    width: 50,
    height: 50,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  myActivityButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 35,
    paddingVertical: 8,
    borderRadius: 20,
  },
  myActivityText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '600',
  },
  iconButton: {
    padding: 5,
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.red,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.black,
    marginTop: 20,
    marginBottom: 20,
  },
  announcementCard: {
    flexDirection: 'row',
    backgroundColor: '#E8F4FF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 25,
    alignItems: 'center',
  },
  announcementContent: {
    flex: 1,
  },
  announcementTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 5,
  },
  announcementText: {
    fontSize: 13,
    color: COLORS.gray,
    lineHeight: 18,
  },
  announcementIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    marginBottom: 25,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 15,
  },
  recentlyViewed: {
    flexDirection: 'row',
  },
  recentItem: {
    marginRight: 15,
  },
  recentAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  orderButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderButton: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F8FBFF',
    paddingVertical: 15,
    borderRadius: 12,
    marginHorizontal: 5,
  },
  orderIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  orderButtonText: {
    fontSize: 12,
    color: COLORS.black,
    fontWeight: '600',
  },
  stories: {
    flexDirection: 'row',
  },
  storyCard: {
    width: 140,
    height: 180,
    borderRadius: 15,
    backgroundColor: COLORS.lightGray,
    marginRight: 15,
    overflow: 'hidden',
    position: 'relative',
  },
  storyImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: COLORS.red,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
  storyBadgeText: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: 'bold',
  },
  bottomSpacing: {
    height: 20,
  },
});